import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Min nettside",
  description: "Nettsiden til Torje Gloppholm Sylta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
