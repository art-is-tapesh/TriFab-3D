import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { auth } from "@/auth";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const session = await auth();
  
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { fileUrl } = await req.json();
  
  const sequence = await prisma.sequence.create({
    data: {
      userId: session.user.id,
      fileUrl,
      status: "Processing"
    }
  });

  return NextResponse.json(sequence);
}
