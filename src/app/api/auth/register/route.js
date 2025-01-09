// src/app/api/auth/register/route.js
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req) {
  try {
    const { email, password, role } = await req.json();

    if (!email || !password || !role) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      return new NextResponse("Invalid email format", { status: 400 });
    }

    // Validate password strength
    if (password.length < 8) {
      return new NextResponse("Password must be at least 8 characters", {
        status: 400,
      });
    }

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return new NextResponse("User already exists", { status: 400 });
    }

    const hashedPassword = await hash(password, 12);

    // Create user with transaction
    const result = await prisma.$transaction(async (prisma) => {
      const user = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          role,
          profileCompleted: false,
          isActive: true,
        },
      });

      if (role === "doctor") {
        await prisma.doctor.create({
          data: {
            userId: user.id,
            rating: 0,
            reviewsCount: 0,
            consultations: 0,
          },
        });
      }

      return user;
    });

    // Remove password from response
    const { password: _, ...userWithoutPassword } = result;
    return NextResponse.json(userWithoutPassword);
  } catch (error) {
    console.error("Registration error:", error);
    return new NextResponse(error.message || "Internal Server Error", {
      status: error.status || 500,
    });
  }
}
