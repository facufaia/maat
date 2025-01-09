import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request, { params }) {
  try {
    const storeId = parseInt(params.id);

    if (!storeId) {
      return NextResponse.json({ error: "Invalid store ID" }, { status: 400 });
    }

    const store = await prisma.store.findUnique({
      where: {
        id: storeId,
      },
      select: {
        id: true,
        name: true,
        description: true,
        is_verified: true,
        category: {
          select: {
            id: true,
            category_name: true,
          },
        },
        address: {
          select: {
            street: true,
            city: true,
            state: true,
            postal_code: true,
            country: true,
            latitude: true,
            longitude: true,
          },
        },
        worker_profiles: {
          select: {
            id: true,
            username: true,
            avatar: true,
            worker_services: {
              select: {
                id: true,
                price: true,
                duration: true,
                is_online: true,
                service: {
                  select: {
                    id: true,
                    name: true,
                    description: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!store) {
      return NextResponse.json({ error: "Store not found" }, { status: 404 });
    }

    return NextResponse.json(store);
  } catch (error) {
    console.error("Store fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch store details" },
      { status: 500 }
    );
  }
}
