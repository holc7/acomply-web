import type { Metadata } from "next";
import LegalShell from "@/components/legal/LegalShell";

export const metadata: Metadata = {
  title: "Política de privacidad — Acomply",
  description:
    "Cómo Acomply recopila, usa y protege la información de barberías y de sus clientes.",
};

export default function PrivacyPage() {
  return (
    <LegalShell title="Política de privacidad" updated="15 de mayo de 2026">
      <p>
        En Acomply respetamos tu privacidad. Esta política explica qué información recopilamos
        cuando un negocio usa la plataforma o un cliente reserva a través de ella, por qué la
        recopilamos y cómo la protegemos. Está redactada conforme a la <strong>Ley 1581 de 2012</strong>{" "}
        (Habeas Data) y al Decreto 1377 de 2013 de Colombia.
      </p>

      <h2>1. Quiénes somos</h2>
      <p>
        Acomply es una plataforma de software (SaaS) que permite a barberías, peluquerías, spas,
        estudios de uñas y otros negocios de servicios personales gestionar reservas en línea,
        comunicarse con sus clientes por WhatsApp, generar campañas de marketing con inteligencia
        artificial y procesar pagos. Operamos en Colombia y atendemos consultas en{" "}
        <a href="mailto:hola@acomply.co">hola@acomply.co</a>.
      </p>

      <h2>2. Quién es responsable de tus datos</h2>
      <p>
        Distinguimos dos relaciones para que sea claro quién decide sobre el tratamiento de cada dato:
      </p>
      <ul>
        <li>
          <strong>Si eres dueño o miembro de un negocio</strong> que usa Acomply, nosotros
          (Acomply) somos los <strong>responsables</strong> del tratamiento de los datos
          asociados a tu cuenta de administrador (correo, contraseña, información de
          facturación, configuración de tu negocio).
        </li>
        <li>
          <strong>Si eres cliente reservando con un negocio</strong> a través de
          acomply.co/&#123;negocio&#125;, el <strong>negocio es el responsable</strong> de los datos
          que recopila sobre ti (tu nombre, contacto, historial de citas). Acomply actúa como{" "}
          <strong>encargado</strong> del tratamiento — los procesamos por instrucción del
          negocio para prestarles el servicio. Para ejercer tus derechos sobre esos datos
          puedes contactar directamente al negocio o a nosotros, y nosotros lo coordinamos.
        </li>
      </ul>

      <h2>3. Qué datos recopilamos</h2>
      <h3>De los negocios y sus equipos</h3>
      <ul>
        <li>Nombre del negocio, slug, dirección, horarios, fotos del local.</li>
        <li>Correo electrónico, contraseña (hash), nombre, rol (dueño / profesional).</li>
        <li>Datos de facturación de la suscripción y de los paquetes adicionales.</li>
        <li>Configuración del negocio: servicios, precios, productos, comisiones.</li>
        <li>Credenciales para conectar canales (token de WhatsApp Business, llaves de Wompi).</li>
      </ul>
      <h3 id="habeas-data">De los clientes que reservan a través de Acomply</h3>
      <ul>
        <li>Nombre y, si lo proporcionas, correo electrónico.</li>
        <li>Número de WhatsApp (cuando reservas o nos escribes desde él).</li>
        <li>Reservas: servicio, profesional, fecha, hora, notas e historial completo de citas.</li>
        <li>Reseñas y calificaciones que decidas dejar después del servicio.</li>
        <li>Conversaciones con el asistente de WhatsApp (cuando el negocio lo tiene activo).</li>
        <li>
          Si usas el simulador de looks: la foto que cargas y los resultados generados. La foto
          se guarda únicamente para mostrarte tu look y se elimina dentro de los 30 días.
        </li>
        <li>Inicio de sesión externo: si entras con Google, recibimos tu nombre, correo e identificador de Google. No tenemos acceso a tu contraseña.</li>
      </ul>
      <h3>Datos técnicos (de cualquier visitante)</h3>
      <ul>
        <li>Dirección IP, tipo de dispositivo, navegador, sistema operativo.</li>
        <li>Páginas visitadas y eventos de uso, en formato agregado.</li>
        <li>Cookies esenciales (sesión, idioma) y, con tu consentimiento, cookies de medición.</li>
      </ul>

      <h2>4. Para qué usamos tus datos</h2>
      <ul>
        <li>Operar la plataforma: mostrar tu calendario, confirmar citas, enviar recordatorios.</li>
        <li>Enviar mensajes transaccionales por WhatsApp y correo (confirmación, recordatorio 24h antes, cambios, cancelaciones, factura).</li>
        <li>Procesar pagos a través de proveedores autorizados (Wompi).</li>
        <li>Cobrar la suscripción y los paquetes adicionales que adquieras.</li>
        <li>Mejorar la plataforma analizando estadísticas agregadas.</li>
        <li>Detectar y prevenir fraude, abuso o uso indebido del servicio.</li>
        <li>Cumplir obligaciones legales o responder requerimientos de autoridades competentes.</li>
      </ul>
      <p>
        No usamos tus datos personales para entrenar modelos de inteligencia artificial propios.
        Tampoco vendemos información personal a terceros.
      </p>

      <h2>5. Con quién compartimos tus datos</h2>
      <p>Compartimos datos únicamente con proveedores que nos ayudan a operar el servicio:</p>
      <ul>
        <li><strong>Meta Platforms / WhatsApp Business Cloud API:</strong> envío y recepción de mensajes por WhatsApp.</li>
        <li><strong>Wompi (Bancolombia):</strong> procesamiento de pagos en línea (suscripción y paquetes).</li>
        <li><strong>Vercel</strong> y <strong>Neon</strong>: hospedaje de la aplicación y la base de datos.</li>
        <li><strong>Resend</strong>: envío de correos transaccionales.</li>
        <li><strong>OpenAI</strong>: modelos de lenguaje y de imagen para los agentes de IA. Las conversaciones e imágenes se envían bajo el modo &quot;no-training&quot; donde el proveedor lo soporta.</li>
        <li><strong>Google</strong>: inicio de sesión con cuenta de Google (opcional).</li>
      </ul>
      <p>
        Cada proveedor procesa datos bajo sus propias políticas de privacidad y solo en la medida
        necesaria para prestarnos el servicio. Algunos servidores están fuera de Colombia; las
        transferencias internacionales se hacen a países con niveles de protección considerados
        adecuados o mediante cláusulas contractuales tipo.
      </p>

      <h2>6. Cuánto tiempo conservamos tus datos</h2>
      <ul>
        <li>Cuentas de negocio: mientras la suscripción esté activa, más 12 meses tras la cancelación para fines fiscales y contables.</li>
        <li>Datos de clientes finales: mientras el negocio los mantenga en su cuenta. Si el negocio cierra su cuenta o si solicitas eliminación, borramos tus datos personales en máximo 30 días.</li>
        <li>Logs técnicos: hasta 90 días.</li>
        <li>Información de facturación: el plazo que exija la ley fiscal colombiana (mínimo 5 años).</li>
      </ul>

      <h2>7. Tus derechos</h2>
      <p>De acuerdo con la Ley 1581 de 2012, puedes en cualquier momento:</p>
      <ul>
        <li>Conocer qué información tenemos sobre ti.</li>
        <li>Pedir que la corrijamos si está desactualizada o incorrecta.</li>
        <li>Solicitar su eliminación o el cierre de tu cuenta.</li>
        <li>Revocar el consentimiento que hayas otorgado.</li>
        <li>Presentar quejas ante la Superintendencia de Industria y Comercio (SIC).</li>
      </ul>
      <p>
        Para ejercer estos derechos, escríbenos a{" "}
        <a href="mailto:hola@acomply.co">hola@acomply.co</a>. Respondemos en un plazo máximo de 15
        días hábiles, prorrogable por 8 días adicionales conforme a la ley.
      </p>

      <h2>8. Seguridad</h2>
      <p>
        Tu información viaja por HTTPS y se almacena en bases de datos cifradas. Las contraseñas
        se guardan con hash criptográfico (bcrypt) — nunca en texto plano. La separación entre
        negocios se garantiza a nivel de base de datos mediante Row-Level Security. Limitamos el
        acceso interno al personal estrictamente necesario y mantenemos registros de auditoría.
      </p>

      <h2>9. Cookies</h2>
      <p>
        Usamos cookies esenciales (sesión, idioma) que no requieren consentimiento porque son
        necesarias para que la plataforma funcione. Si das tu consentimiento mediante el banner,
        podemos usar cookies opcionales para entender el uso agregado del servicio. Puedes
        cambiar tu elección desde el banner inferior en cualquier momento o borrar el dato{" "}
        <code>acomply-cookie-consent</code> de tu almacenamiento local. Más detalles en nuestra{" "}
        <a href="/cookies">Política de cookies</a>.
      </p>

      <h2>10. Menores de edad</h2>
      <p>
        El servicio está dirigido a mayores de 14 años. Si eres menor, debes contar con
        autorización de tu representante legal antes de registrarte. Si detectamos una cuenta
        creada sin esa autorización la eliminaremos.
      </p>

      <h2>11. Cambios a esta política</h2>
      <p>
        Si actualizamos esta política, cambiaremos la fecha de &quot;Última actualización&quot; en la parte
        superior y, cuando los cambios sean significativos, te avisaremos por correo o por
        WhatsApp.
      </p>

      <h2>12. Contacto</h2>
      <p>
        Para cualquier duda relacionada con esta política o el tratamiento de tus datos,
        escríbenos a <a href="mailto:hola@acomply.co">hola@acomply.co</a>.
      </p>
    </LegalShell>
  );
}
