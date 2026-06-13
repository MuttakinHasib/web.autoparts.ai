import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html className={`${roboto.variable} antialiased`} lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background text-foreground">
        <h1 className="font-bold text-6xl text-primary">404</h1>
        <p className="text-muted-foreground">This page does not exist.</p>
        <a className="text-primary underline underline-offset-4" href="/">
          Go home
        </a>
      </body>
    </html>
  );
}
