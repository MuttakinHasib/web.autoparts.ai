import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <Home />;
}

function Home() {
  const t = useTranslations();

  return (
    <main className="mx-auto flex max-w-3xl flex-1 flex-col items-center justify-center gap-8 px-4 py-16 text-center">
      <div className="flex items-center gap-2">
        <span className="rounded bg-primary px-2 py-1 font-black text-primary-foreground text-xl tracking-tight">
          AUTO
        </span>
        <span className="font-black text-xl tracking-tight">PARTS</span>
        <ThemeToggle />
      </div>

      <h1 className="font-bold text-4xl tracking-tight sm:text-5xl">
        Phase 0 — Foundation ready
      </h1>

      <p className="text-lg text-muted-foreground">
        Next.js 16 · React 19 · Tailwind v4 · shadcn/ui · next-intl · React
        Query · Zustand · light + dark
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button size="lg">{t("BUTTON_ADD_TO_CART")}</Button>
        <Button size="lg" variant="secondary">
          {t("BUTTON_CHECKOUT")}
        </Button>
        <Button size="lg" variant="outline">
          {t("BUTTON_ADD_TO_COMPARE")}
        </Button>
      </div>

      <div className="flex gap-4 text-muted-foreground text-sm">
        <a className="underline underline-offset-4" href="/en">
          English
        </a>
        <a className="underline underline-offset-4" href="/ru">
          Русский
        </a>
        <a className="underline underline-offset-4" href="/ar">
          العربية
        </a>
      </div>
    </main>
  );
}
