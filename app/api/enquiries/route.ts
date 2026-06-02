import { NextRequest, NextResponse } from "next/server";

// Mock in-memory store (resets on server restart — replace with DB later)
const ENQUIRIES: object[] = [];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { propertySlug, propertyName, visitDate, visitTime, message } = body;

    if (!propertySlug || !propertyName) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const enquiry = {
      id: `enq-${Date.now()}`,
      propertySlug,
      propertyName,
      visitDate: visitDate || null,
      visitTime: visitTime || null,
      message: message || null,
      status: "NEW",
      createdAt: new Date().toISOString(),
    };

    ENQUIRIES.push(enquiry);
    console.log("New enquiry:", enquiry);

    return NextResponse.json(enquiry, { status: 201 });
  } catch (error) {
    console.error("Enquiry error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const propertySlug = searchParams.get("propertySlug");
  const filtered = propertySlug
    ? ENQUIRIES.filter((e: object) => (e as { propertySlug: string }).propertySlug === propertySlug)
    : ENQUIRIES;
  return NextResponse.json(filtered);
}
