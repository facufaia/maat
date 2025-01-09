import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get("name");

    const categories = await prisma.category.findMany({
      where: name
        ? {
            category_name: {
              contains: name,
              mode: "insensitive",
            },
          }
        : {},
      select: {
        id: true,
        category_name: true,
      },
      orderBy: {
        category_name: "asc",
      },
    });

    return NextResponse.json(categories);
  } catch (error) {
    console.error("Category fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch categories" },
      { status: 500 }
    );
  }
}
