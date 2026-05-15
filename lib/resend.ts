import { Resend } from "resend";

// Marketing-side Resend wrapper. Mirrors acomply-app/lib/email.ts shape but
// stripped of shop_id / audit log — this is single-tenant marketing only.
//
// FROM uses the shared "onboarding@resend.dev" sender until Denis verifies
// acomply.co in Resend. Reply-to set so replies land in his inbox.
//
// Lazy-init: the Resend SDK throws on construction without an API key, so we
// can't instantiate at module load (would break `next build` page-data
// collection when the env var isn't present).

let _resend: Resend | null = null;
function getResend(): Resend {
  if (_resend) return _resend;
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY is not configured");
  _resend = new Resend(key);
  return _resend;
}

const FROM = "Acomply <onboarding@resend.dev>";
const TO = process.env.RESEND_TO_EMAIL ?? "acomplyinfo@gmail.com";

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;")
   .replace(/</g, "&lt;")
   .replace(/>/g, "&gt;")
   .replace(/"/g, "&quot;")
   .replace(/'/g, "&#39;");

export type DemoLead = {
  nombre: string;
  whatsapp: string;
  negocio?: string;
};

export async function sendDemoLead({ nombre, whatsapp, negocio }: DemoLead) {
  const subject = `Demo solicitada — ${nombre}${negocio ? ` (${negocio})` : ""}`;
  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; padding: 24px; color: #2B211C;">
      <h1 style="font-size: 22px; margin: 0 0 16px; color: #2B211C;">Nueva solicitud de demo</h1>
      <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
        <tr><td style="padding: 8px 0; color: #6B5E55;">Nombre</td><td style="padding: 8px 0; font-weight: 600;">${escapeHtml(nombre)}</td></tr>
        <tr><td style="padding: 8px 0; color: #6B5E55;">WhatsApp</td><td style="padding: 8px 0; font-weight: 600;"><a href="https://wa.me/${encodeURIComponent(whatsapp.replace(/[^0-9+]/g, ""))}" style="color: #E86C57;">${escapeHtml(whatsapp)}</a></td></tr>
        ${negocio ? `<tr><td style="padding: 8px 0; color: #6B5E55;">Negocio</td><td style="padding: 8px 0; font-weight: 600;">${escapeHtml(negocio)}</td></tr>` : ""}
      </table>
      <p style="margin-top: 24px; font-size: 13px; color: #6B5E55;">Enviado desde acomply.co · responde dentro de 24&nbsp;h.</p>
    </div>
  `.trim();

  return getResend().emails.send({
    from: FROM,
    to: TO,
    replyTo: TO,
    subject,
    html,
  });
}

export const RESEND_CONFIGURED = (): boolean => Boolean(process.env.RESEND_API_KEY);
