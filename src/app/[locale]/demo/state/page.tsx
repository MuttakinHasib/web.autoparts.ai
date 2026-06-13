import { setRequestLocale } from "next-intl/server";
import { StateDemo } from "@/components/demo/state-demo";

export default async function StateDemoPage({
  params,
}: PageProps<"/[locale]/demo/state">) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <StateDemo />;
}
