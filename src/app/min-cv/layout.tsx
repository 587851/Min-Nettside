import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Min CV – Torje Gloppholm Sylta",
  description: "Om livet til Torje Gloppholm Sylta",
};

export default function MinCVLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
