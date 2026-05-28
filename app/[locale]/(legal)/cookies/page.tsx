import type { Metadata } from "next";
import LegalShell from "@/components/legal/LegalShell";

export const metadata: Metadata = {
  title: "Política de cookies — Acomply",
  description:
    "Qué cookies usa Acomply, para qué sirven y cómo cambiar tu elección.",
};

export default function CookiesPage() {
  return (
    <LegalShell title="Política de cookies" updated="15 de mayo de 2026">
      <p>
        Esta política explica qué son las cookies, cuáles usamos en{" "}
        <strong>acomply.co</strong> y cómo puedes cambiar tu elección. Forma parte de nuestra{" "}
        <a href="/privacy">Política de privacidad</a> y se redacta en línea con la{" "}
        <strong>Ley 1581 de 2012</strong> (Habeas Data) y el Decreto 1377 de 2013.
      </p>

      <h2>1. Qué son las cookies</h2>
      <p>
        Las cookies son pequeños archivos de texto que un sitio web guarda en tu dispositivo
        cuando lo visitas. Sirven para que el sitio recuerde información entre páginas (por
        ejemplo, que ya iniciaste sesión, qué idioma prefieres) o para entender cómo se usa el
        servicio en agregado. Algunas cookies se borran al cerrar el navegador (cookies de
        sesión); otras permanecen un tiempo (cookies persistentes).
      </p>

      <h2>2. Cookies que usamos</h2>

      <h3>Estrictamente necesarias</h3>
      <p>
        No requieren consentimiento porque sin ellas la plataforma no funciona.
      </p>
      <ul>
        <li>
          <strong>Sesión de autenticación</strong> — mantiene tu inicio de sesión activo entre
          páginas mientras uses el panel de administración. Caduca al cerrar el navegador o al
          expirar la sesión.
        </li>
        <li>
          <strong>Preferencia de idioma</strong> — recuerda el idioma seleccionado (es / en).
        </li>
        <li>
          <strong>Aceptación de cookies</strong> — guarda tu elección en el banner para no volver
          a mostrarlo. Se almacena como un dato local llamado{" "}
          <code>acomply-cookie-consent</code>.
        </li>
        <li>
          <strong>Tokens anti-CSRF</strong> — protegen formularios contra envíos malintencionados.
        </li>
      </ul>

      <h3>Opcionales (requieren tu consentimiento)</h3>
      <p>
        Solo se activan si pulsas <em>Aceptar</em> en el banner. Hoy no tenemos analítica activa,
        pero registramos tu elección para cuando la añadamos.
      </p>
      <ul>
        <li>
          <strong>Analítica anónima</strong> (planificada — no activa hoy) — un proveedor que
          respeta la privacidad (sin perfilado, sin terceros publicitarios) nos dará métricas de
          uso agregadas.
        </li>
      </ul>

      <h3>Cookies que <em>no</em> usamos</h3>
      <p>
        Acomply <strong>no</strong> usa cookies de marketing de terceros, píxeles de redes sociales
        para retargeting, ni cookies para perfilado publicitario. Tampoco vendemos información
        personal a terceros (ver <a href="/privacy">Política de privacidad</a> §5).
      </p>

      <h2>3. Cookies de terceros que pueden aparecer</h2>
      <p>
        Algunos servicios externos que la plataforma usa pueden establecer sus propias cookies en
        páginas específicas:
      </p>
      <ul>
        <li>
          <strong>Wompi</strong> — durante el checkout de un pago. Establece cookies necesarias
          para procesar la transacción de forma segura. Procesado por Bancolombia.
        </li>
        <li>
          <strong>Google</strong> — solo si eliges iniciar sesión con tu cuenta de Google. Sus
          propias cookies se rigen por la{" "}
          <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer">
            política de cookies de Google
          </a>
          .
        </li>
        <li>
          <strong>YouTube</strong> — si embebimos un video en una entrada del blog (cuando
          exista). Recomendamos su modo de privacidad cuando esté disponible.
        </li>
      </ul>

      <h2>4. Cómo cambiar tu elección</h2>
      <ul>
        <li>
          <strong>Desde el banner inferior</strong> — si quieres revertir tu elección, borra el
          dato <code>acomply-cookie-consent</code> del almacenamiento local de tu navegador y
          recarga la página. Volverás a ver el banner.
        </li>
        <li>
          <strong>Desde tu navegador</strong> — la mayoría de navegadores permiten ver, bloquear
          o borrar cookies por dominio. Busca &quot;Configuración&quot; → &quot;Privacidad y seguridad&quot;
          → &quot;Cookies&quot;.
        </li>
        <li>
          <strong>En modo incógnito</strong> — las cookies se borran automáticamente al cerrar la
          ventana.
        </li>
      </ul>
      <p>
        Bloquear cookies estrictamente necesarias puede impedir que ciertas funciones (inicio de
        sesión, formularios) trabajen correctamente.
      </p>

      <h2>5. Cambios a esta política</h2>
      <p>
        Si actualizamos esta política, cambiaremos la fecha de &quot;Última actualización&quot; en la
        parte superior. Si los cambios son significativos, te avisaremos en el banner inferior la
        próxima vez que visites el sitio.
      </p>

      <h2>6. Contacto</h2>
      <p>
        Para dudas sobre esta política o sobre el tratamiento de tus datos, escríbenos a{" "}
        <a href="mailto:hola@acomply.co">hola@acomply.co</a>.
      </p>
    </LegalShell>
  );
}
