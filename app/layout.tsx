import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const bentonSans = localFont({
  src: "../public/FONT/BENTON/BentonSans Comp Black Regular.otf",
  variable: "--font-benton",
  display: "swap",
});

const sfProDisplay = localFont({
  src: "../public/FONT/SF/SFUIText-Regular.otf",
  variable: "--font-sf-pro",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VILIGA - Site en construction",
  description: "Site web VILIGA en cours de développement. Contactez-nous pour plus d'informations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bentonSans.variable} ${sfProDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
