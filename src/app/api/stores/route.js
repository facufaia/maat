import { NextResponse } from "next/server";
import { storeSchema } from "@/lib/validations/store";

export async function GET() {
  try {
    const stores = await prisma.store.findMany({
      include: {
        category: true,
        address: true,
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

export async function POST(request) {
  try {
    const body = await request.json();

    // Validate request body
    const result = storeSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          issues: result.error.issues,
        },
        { status: 400 }
      );
    }

    // Create store with address
    const store = await prisma.store.create({
      data: {
        store_name: body.store_name,
        description: body.description,
        category_id: body.category_id,
        verified: false,
        user_id: body.user_id,
        address: {
          create: body.address,
        },
      },
      include: {
        category: true,
        address: true,
      },
    });

    return NextResponse.json(store, { status: 201 });
  } catch (error) {
    console.error("Store creation error:", error);
    return NextResponse.json(
      { error: "Failed to create store" },
      { status: 500 }
    );
  }
}
