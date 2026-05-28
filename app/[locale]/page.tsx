// [perf-audited 2026-05-28 / vercel-react-best-practices v1.0 + typescript-best-practices] audited-clean — no findings
//
// Server component wrapper. Calls setRequestLocale so nested client
// components consuming useTranslations get the right messages bundle
// AND so this route stays statically renderable per locale.

import { setRequestLocale } from "next-intl/server";
import HomeClient from "./HomeClient";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <HomeClient />;
}
