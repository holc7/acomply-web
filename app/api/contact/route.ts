import { NextResponse } from "next/server";
import { z } from "zod";
import { sendDemoLead, RESEND_CONFIGURED } from "@/lib/resend";

export const runtime = "nodejs";

const Body = z.object({
  nombre: z.string().trim().min(1).max(120),
  whatsapp: z.string().trim().min(7).max(40),
  negocio: z.string().trim().min(1).max(120).optional(),
});

export async function POST(request: Request) {
  if (!RESEND_CONFIGURED()) {
    return NextResponse.json({ ok: false, error: "config" }, { status: 503 });
  }

  let parsed;
  try {
    const json = await request.json();
    parsed = Body.safeParse(json);
  } catch {
    return NextResponse.json({ ok: false, error: "validation" }, { status: 400 });
  }

  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "validation" }, { status: 400 });
  }

  try {
    const result = await sendDemoLead(parsed.data);
    if (result.error) {
      console.error("[contact] resend error:", result.error);
      return NextResponse.json({ ok: false, error: "send" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] unexpected:", err);
    return NextResponse.json({ ok: false, error: "send" }, { status: 500 });
  }
}
