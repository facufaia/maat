import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { workerSchema } from "@/lib/validations/worker";

export async function GET() {
  try {
    const workers = await prisma.worker_profile.findMany({
      include: {
        worker_services: {
          include: {
            service: {
              select: {
                id: true,
                name: true,
                description: true,
              },
            },
          },
        },
        store: {
          select: {
            id: true,
            store_name: true,
          },
        },
      },
      orderBy: {
        username: "asc",
      },
    });

    return NextResponse.json(workers);
  } catch (error) {
    console.error("Workers fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch workers" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();

    // Validate with Zod
    const result = workerSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          issues: result.error.issues,
        },
        { status: 400 }
      );
    }

    // Check if store exists
    const store = await prisma.store.findUnique({
      where: { id: result.data.store_id },
    });

    if (!store) {
      return NextResponse.json({ error: "Store not found" }, { status: 404 });
    }

    // Create worker profile
    const worker = await prisma.worker_profile.create({
      data: {
        email: result.data.email,
        username: result.data.username,
        avatar: result.data.avatar,
        user_id: result.data.user_id,
        store: {
          connect: { id: result.data.store_id },
        },
      },
    });

    return NextResponse.json(worker, { status: 201 });
  } catch (error) {
    console.error("Worker creation error:", error);
    return NextResponse.json(
      { error: "Failed to create worker" },
      { status: 500 }
    );
  }
}
