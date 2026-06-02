import { NextRequest, NextResponse } from "next/server";

// Mock in-memory store (resets on server restart — replace with DB later)
const LEADS: object[] = [];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, message, source } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: "Name and phone are required" }, { status: 400 });
    }

    const lead = {
      id: `lead-${Date.now()}`,
      name,
      phone,
      email: email || null,
      message: message || null,
      source: source || "website",
      createdAt: new Date().toISOString(),
    };

    LEADS.push(lead);
    console.log("New lead:", lead);

    return NextResponse.json(lead, { status: 201 });
  } catch (error) {
    console.error("Lead error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json(LEADS);
}
