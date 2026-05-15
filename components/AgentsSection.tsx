// Wraps the 3 agent vignettes with an intro.

import AgentVignette from "./AgentVignette";
import SparkleIcon from "./primitives/SparkleIcon";
import WhatsAppScreen from "./screens/WhatsAppScreen";
import MarketingScreen from "./screens/MarketingScreen";
import AnalysisScreen from "./screens/AnalysisScreen";

export default function AgentsSection() {
  return (
    <div id="agentes">
      <div className="agents-intro">
        <div className="container-narrow">
          <span className="agents-intro__eyebrow">
            <SparkleIcon size={11} color="currentColor" />
            Tres agentes, 24/7
          </span>
          <h2 className="agents-intro__h2">
            La IA que trabaja por ti<br />mientras tú <em>atiendes a tu cliente.</em>
          </h2>
          <p className="agents-intro__sub">
            No es un chatbot que da vueltas. Son tres especialistas con un trabajo claro:
            contestar, hacer crecer las ventas y responderte cuando preguntes.
          </p>
        </div>
      </div>

      <AgentVignette
        color="coral"
        index="01"
        agentLabel="Recepcionista IA"
        nameNode={<>Contesta cada WhatsApp,<br /><em>incluso a las 2 a.m.</em></>}
        lead="Tu cliente escribe; ella saluda con el nombre, ofrece horarios reales de tu agenda, confirma la cita y manda el recordatorio. Sin esperas, sin citas perdidas, sin sonar a bot."
        features={[
          "Habla como tú: tu tono, tus servicios, tus horarios",
          "WhatsApp oficial de Meta — no se cae, no te bloquean",
          "Reconfirma 24 h antes y pide reseña después",
          "Te avisa solo cuando algo necesita decisión humana",
        ]}
        screen={<WhatsAppScreen />}
      />

      <AgentVignette
        color="amber"
        index="02"
        agentLabel="Marketing IA"
        reverse
        nameNode={<>Llena tus días lentos.<br /><em>Recupera clientes que se fueron.</em></>}
        lead="Cada semana detecta tus huecos, agrupa los clientes que llevan tiempo sin venir y arma una promo con imagen lista para enviar por WhatsApp. Tú apruebas, ella manda y mide cuánto vendiste con cada campaña."
        features={[
          "Genera imagen de promo con la estética de tu marca",
          "Segmenta clientes por frecuencia, gasto y servicio",
          "Mide ingreso recuperado por cada envío",
          "Cumple Habeas Data — solo envía a quien aceptó",
        ]}
        screen={<MarketingScreen />}
      />

      <AgentVignette
        color="mint"
        index="03"
        agentLabel="Asistente de análisis"
        nameNode={<>Pregúntale lo que sea<br />a <em>tu propio negocio.</em></>}
        lead='"¿Qué día vendí menos?" "¿Cuál servicio deja más?" "¿Quién es mi mejor cliente?" Te responde con números reales de tu cuenta — nunca inventa. Y si pide, lanza la acción que arregla el problema.'
        features={[
          "Conectado a tus datos en tiempo real",
          "Responde en español, sin tecnicismos",
          "Solo dice números que existen — cero inventos",
          "Cada respuesta trae una acción para ejecutar",
        ]}
        screen={<AnalysisScreen />}
      />
    </div>
  );
}
