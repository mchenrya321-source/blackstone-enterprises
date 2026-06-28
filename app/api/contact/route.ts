import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, service } = body;

    if (!name || !phone || !service) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Placeholder for email/CRM integration — logs in development
    if (process.env.NODE_ENV === "development") {
      console.log("[Contact Form]", body);
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 500 },
    );
  }
}
