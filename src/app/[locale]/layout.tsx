import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "../globals.css";
import Providers from "@/providers/providers";
import { Locale, i18n } from "@/utils/i18nConfig";


const noto = Noto_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export function generateStaticParams() {
  return i18n.locales.map(locale => ({ locale }));
}

export default async function RootLayout({
  children,
   params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {

  return (
    <html lang={params.locale}>
      <body className={`${noto.className} min-h-screen antialiased`}>
        <Providers
        locale={params.locale}>
          {children}</Providers>
      </body>
    </html>
  );
}
