import prisma from "@/db/prisma";
import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod';

const createUserSchema  = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  avatar: z.string().url(),
})

export async function GET() {
  const users = await prisma.user.findMany();

  return NextResponse.json({ users });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createUserSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 })
  }

  const user = await prisma.user.create({ data: {...body} });

  return NextResponse.json({ user });
}
