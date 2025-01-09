import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { workerServiceSchema } from "@/lib/validations/worker_service";

export async function POST(request) {
  try {
    const body = await request.json();

    const result = workerServiceSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", issues: result.error.issues },
        { status: 400 }
      );
    }

    // Verify worker exists
    const worker = await prisma.worker_profile.findUnique({
      where: { id: result.data.worker_id },
    });

    if (!worker) {
      return NextResponse.json({ error: "Worker not found" }, { status: 404 });
    }

    // Verify service exists
    const service = await prisma.service.findUnique({
      where: { id: result.data.service_id },
    });

    if (!service) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 });
    }

    // Create worker service
    const workerService = await prisma.worker_service.create({
      data: {
        worker: { connect: { id: result.data.worker_id } },
        service: { connect: { id: result.data.service_id } },
        price: result.data.price,
        duration: result.data.duration,
        is_online: result.data.is_online,
      },
      include: {
        worker: true,
        service: true,
      },
    });

    return NextResponse.json(workerService, { status: 201 });
  } catch (error) {
    console.error("Worker service creation error:", error);
    return NextResponse.json(
      { error: "Failed to create worker service" },
      { status: 500 }
    );
  }
}
