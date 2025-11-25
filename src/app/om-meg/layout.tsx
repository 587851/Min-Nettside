import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om meg – Torje Gloppholm Sylta",
  description: "Om livet til Torje Gloppholm Sylta",
};

export default function OmMegLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
