import type { Metadata } from "next";
import LegalShell from "@/components/legal/LegalShell";

export const metadata: Metadata = {
  title: "Términos y condiciones — Acomply",
  description:
    "Reglas de uso de Acomply: la plataforma SaaS de reservas + WhatsApp + IA para negocios de servicios en Colombia.",
};

export default function TermsPage() {
  return (
    <LegalShell title="Términos y condiciones" updated="15 de mayo de 2026">
      <p>
        Bienvenido a Acomply. Estos términos regulan el uso de la plataforma. Al crear una cuenta
        o reservar a través de acomply.co aceptas estos términos. Si no estás de acuerdo, no uses
        el servicio.
      </p>

      <h2>1. Qué es Acomply</h2>
      <p>
        Acomply es una plataforma de software (SaaS) que permite a barberías, peluquerías, spas,
        estudios de uñas, centros de masajes, estética y otros negocios de servicios personales
        en Colombia ofrecer reservas en línea, comunicarse con sus clientes por WhatsApp, lanzar
        campañas de marketing con inteligencia artificial y aceptar pagos a través de Wompi.
        Acomply <strong>no es un negocio de servicios</strong>; es la herramienta que estos negocios usan
        para operar.
      </p>

      <h2>2. Quiénes pueden usar el servicio</h2>
      <p>Hay dos tipos de usuarios y los términos aplican a ambos:</p>
      <ul>
        <li>
          <strong>Negocios y su equipo</strong> (&quot;Cliente&quot;): quien contrata la suscripción y usa
          la plataforma para gestionar su negocio.
        </li>
        <li>
          <strong>Clientes finales</strong> (&quot;Visitante&quot;): quien reserva una cita a través de
          acomply.co/&#123;negocio&#125; o interactúa con el asistente de WhatsApp.
        </li>
      </ul>
      <p>
        Debes ser mayor de 14 años. Si eres menor, requieres autorización de tu representante
        legal.
      </p>

      <h2>3. Cuenta y registro</h2>
      <ul>
        <li>La información que proporcionas debe ser verídica y estar al día.</li>
        <li>Eres responsable de mantener tus credenciales seguras y de toda actividad realizada desde tu cuenta.</li>
        <li>Si eres negocio, eres responsable del comportamiento de los miembros de tu equipo en la plataforma.</li>
        <li>Puedes cerrar tu cuenta cuando quieras escribiéndonos a <a href="mailto:hola@acomply.co">hola@acomply.co</a>.</li>
      </ul>

      <h2>4. Suscripción, paquetes y pagos (solo Cliente negocio)</h2>
      <ul>
        <li>La suscripción se cobra mensualmente en pesos colombianos (COP). Los planes vigentes son <strong>Esencial</strong> ($39.900), <strong>Maestro</strong> ($59.900) y <strong>Élite</strong> ($79.900). El precio actual y las inclusiones se muestran al momento de contratar.</li>
        <li>Cada plan incluye un cupo mensual de mensajes por WhatsApp y de generaciones de IA. Al alcanzar el cupo el envío se bloquea hasta el inicio del siguiente periodo o hasta que compres un paquete de recargas.</li>
        <li>Los paquetes de recargas se cobran como compras únicas y se aplican de inmediato al cupo del mes vigente. No expiran dentro del mes en curso.</li>
        <li>Los pagos se procesan a través de Wompi (Bancolombia). Acomply no almacena información de tarjetas; recibimos solo el estado de la transacción.</li>
        <li>Si tu pago falla y no se regulariza en 7 días, podemos suspender el acceso a la plataforma. Tus datos se conservan 12 meses durante la suspensión.</li>
      </ul>

      <h2>5. Pagos en línea para citas (entre Visitante y negocio)</h2>
      <p>
        Algunos negocios activan el cobro en línea de las citas con Wompi. En esos casos, el
        pago se realiza al merchant del negocio, no a Acomply. El negocio es responsable del
        servicio prestado, de eventuales reembolsos y de la facturación. Acomply actúa solo como
        proveedor del software que conecta el negocio con Wompi.
      </p>

      <h2>6. Cómo funcionan las reservas (Visitante)</h2>
      <ul>
        <li>Eliges servicio, profesional, fecha y hora dentro de los horarios disponibles del negocio.</li>
        <li>La cita queda confirmada cuando recibes el mensaje de confirmación por WhatsApp o correo.</li>
        <li>Te enviaremos un recordatorio aproximadamente 24 horas antes.</li>
        <li>Los precios mostrados son referenciales. El valor final puede variar según el servicio efectivamente prestado y se confirma en el local.</li>
        <li>Puedes reagendar o cancelar con al menos 2 horas de anticipación. Cancelaciones tardías o inasistencias repetidas pueden llevar a que el negocio pida confirmación previa o un anticipo en futuras reservas.</li>
      </ul>

      <h2>7. Asistentes de IA (Recepcionista, Marketing, Análisis)</h2>
      <ul>
        <li>El asistente conversacional usa modelos de inteligencia artificial para entender tus mensajes. Las conversaciones se guardan para mejorar el servicio y como soporte ante reclamos. Puedes solicitar su eliminación en cualquier momento.</li>
        <li>El generador de imágenes de marketing produce piezas a partir de la información del negocio. Las imágenes generadas son referenciales: pueden contener variaciones de estilo entre generaciones.</li>
        <li>El asistente de análisis responde con datos reales de tu cuenta. No inventa números — si no sabe algo, te lo dice.</li>
        <li>Acomply no garantiza la exactitud de las respuestas del asistente ni de las simulaciones. Cualquier decisión sobre tu cita debe confirmarse con el negocio.</li>
      </ul>

      <h2>8. Conducta esperada</h2>
      <p>Al usar Acomply te comprometes a no:</p>
      <ul>
        <li>Reservar bajo identidad falsa o con números de WhatsApp ajenos.</li>
        <li>Hacer reservas masivas con la intención de bloquear horarios.</li>
        <li>Enviar contenido ofensivo, ilegal, sexual no consentido o no relacionado al asistente.</li>
        <li>Cargar fotos de terceros sin su permiso a los simuladores.</li>
        <li>Intentar vulnerar, sondear, hacer ingeniería inversa o desestabilizar la plataforma.</li>
        <li>Usar el servicio para enviar spam o mensajes no solicitados a clientes.</li>
        <li>Intentar acceder a datos de otros negocios o de sus clientes.</li>
      </ul>
      <p>
        Podemos suspender o cancelar cuentas que incumplan estas reglas, sin reembolso de la
        suscripción del mes en curso si el incumplimiento es grave.
      </p>

      <h2>9. Datos del Cliente negocio</h2>
      <p>
        Como Cliente negocio, los datos de tus clientes finales que ingreses a la plataforma son
        tuyos. Acomply los procesa exclusivamente por tu instrucción para prestarte el servicio
        (ver <a href="/privacy">Política de privacidad</a>). Si cancelas tu cuenta, podemos
        eliminarlos a tu solicitud o entregártelos en formato exportable dentro de los 30 días
        siguientes.
      </p>

      <h2>10. Propiedad intelectual</h2>
      <p>
        El nombre, logo, código, diseños y contenidos de Acomply son nuestros o están licenciados
        a nosotros. No puedes copiarlos, redistribuirlos, ni desarrollar productos derivados sin
        permiso escrito. La marca y los contenidos cargados por cada negocio siguen siendo del
        negocio.
      </p>

      <h2>11. Disponibilidad y limitación de responsabilidad</h2>
      <p>
        Hacemos esfuerzos razonables para mantener el servicio disponible, pero se ofrece &quot;tal
        cual&quot; y &quot;según disponibilidad&quot;. No garantizamos disponibilidad ininterrumpida ni que el
        servicio esté libre de errores. No respondemos por:
      </p>
      <ul>
        <li>Interrupciones causadas por proveedores externos (Meta, Vercel, Neon, Wompi, OpenAI, Google).</li>
        <li>Pérdida de citas, ingresos o clientes derivada de fallas técnicas.</li>
        <li>Errores en mensajes generados por los asistentes de inteligencia artificial.</li>
        <li>Daños indirectos, lucro cesante o consecuenciales.</li>
        <li>Decisiones tomadas con base únicamente en información del asistente sin confirmar con el negocio.</li>
      </ul>
      <p>
        En cualquier caso, la responsabilidad agregada de Acomply frente al Cliente negocio se
        limita al monto pagado por suscripción en los 3 meses anteriores al evento que dio origen
        al reclamo.
      </p>

      <h2>12. Cancelación y terminación</h2>
      <ul>
        <li>Puedes cancelar tu suscripción en cualquier momento desde la configuración de tu cuenta o escribiéndonos. La cancelación es efectiva al final del periodo facturado.</li>
        <li>Podemos terminar tu cuenta con aviso de 30 días si dejamos de operar el servicio.</li>
        <li>Podemos suspender o terminar tu cuenta sin aviso por incumplimiento grave de estos términos, fraude o uso ilegal del servicio.</li>
      </ul>

      <h2>13. Cambios a los términos</h2>
      <p>
        Podemos actualizar estos términos. Cuando lo hagamos, cambiaremos la fecha en la parte
        superior y, si los cambios son significativos, te avisaremos por correo con al menos 15
        días de anticipación. Si sigues usando el servicio tras la fecha de entrada en vigor, se
        entiende que aceptas los nuevos términos.
      </p>

      <h2>14. Ley aplicable y jurisdicción</h2>
      <p>
        Estos términos se rigen por las leyes de la República de Colombia. Cualquier disputa se
        resolverá ante los jueces civiles de la jurisdicción del domicilio del demandado, salvo
        norma legal imperativa en contrario.
      </p>

      <h2>15. Contacto</h2>
      <p>
        Dudas, sugerencias, reclamos o solicitudes de Habeas Data:{" "}
        <a href="mailto:hola@acomply.co">hola@acomply.co</a>.
      </p>
    </LegalShell>
  );
}
