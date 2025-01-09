import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const stores = await prisma.store.findMany({
      include: {
        category: {
          select: {
            id: true,
            category_name: true,
          },
        },
        address: {
          select: {
            city: true,
            state: true,
            country: true,
          },
        },
      },
      orderBy: {
        store_name: "asc",
      },
    });

    return NextResponse.json(stores);
  } catch (error) {
    console.error("Stores fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch stores" },
      { status: 500 }
    );
  }
}
