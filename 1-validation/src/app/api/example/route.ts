import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  try {
    const credentials = schema.parse(body);

    console.log("Valid credentials:", credentials);

    return NextResponse.json({ status: "success" });
  } catch (error) {
    console.log("Invalid credentials:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ status: "error", errors: error.errors }, { status: 400 });
    }

    return NextResponse.json({ status: "error" }, { status: 400 });
  }
}
