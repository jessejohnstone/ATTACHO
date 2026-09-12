import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/db/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      fullName,
      email,
      phone,
      password,
    } = body;

    if (!fullName || !email || !password) {
      return NextResponse.json(
        {
          error: "Full name, email, and password are required.",
        },
        { status: 400 },
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        {
          error: "Password must be at least 8 characters.",
        },
        { status: 400 },
      );
    }

    const normalizedEmail = email.trim().toLowerCase();

    const existingUser = await prisma.user.findUnique({
      where: {
        email: normalizedEmail,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        {
          error: "An account with this email already exists.",
        },
        { status: 409 },
      );
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email: normalizedEmail,
        phone: phone || null,
        passwordHash,
        role: "STUDENT",
        studentProfile: {
          create: {
            fullName: fullName.trim(),
            skills: [],
            preferredIndustries: [],
          },
        },
      },
      include: {
        studentProfile: true,
      },
    });

    return NextResponse.json(
      {
        message: "Student account created successfully.",
        user: {
          id: user.id,
          email: user.email,
          role: user.role,
          studentProfile: user.studentProfile,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Registration error:", error);

    return NextResponse.json(
      {
        error: "Something went wrong while creating the account.",
      },
      { status: 500 },
    );
  }
}