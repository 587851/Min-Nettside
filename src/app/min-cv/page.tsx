import Link from "next/link";

export default function MinCvPage() {
  return (
    <div style={{ minHeight: "100vh", padding: "64px 24px", color: "white" }}>
      <h1>Min CV</h1>
      <p>cv....</p>

      <p style={{ marginTop: "24px" }}>
        <Link href="/">← Tilbake til forsiden</Link>
      </p>
    </div>
  );
}
