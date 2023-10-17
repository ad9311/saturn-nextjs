import prisma from "@/db/prisma";
import { NextRequest, NextResponse } from "next/server";
import { userSchema } from '@/types';

export async function GET() {
  const users = await prisma.user.findMany();

  return NextResponse.json({ users });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = userSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 })
  }

  const user = await prisma.user.create({ data: {...body} });

  return NextResponse.json({ user });
}
