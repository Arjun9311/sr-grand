import { NextResponse } from "next/server";
import { inquirySchema } from "@/lib/validation";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const result = inquirySchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      {
        ok: false,
        errors: result.error.issues.map((issue) => issue.message)
      },
      { status: 400 }
    );
  }

  if (result.data.website) {
    return NextResponse.json({ ok: true });
  }

  // TODO: Connect to email, CRM, WhatsApp Business API or a database using server-only env vars.
  console.info("SR Grand inquiry received", {
    inquiryType: result.data.inquiryType,
    date: result.data.date,
    guests: result.data.guests
  });

  return NextResponse.json({
    ok: true,
    message: "Inquiry accepted."
  });
}
