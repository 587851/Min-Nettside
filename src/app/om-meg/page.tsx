import Link from "next/link";

export default function OmMegPage() {
  return (
    <div style={{ minHeight: "100vh", padding: "64px 24px", color: "white" }}>
      <h1>Om meg</h1>
      <p>Litt om meg</p>

      <p style={{ marginTop: "24px" }}>
        <Link href="/">← Tilbake til forsiden</Link>
      </p>
    </div>
  );
}
