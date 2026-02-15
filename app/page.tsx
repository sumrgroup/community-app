import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "2rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", gap: "1rem" }}>
      <h1>Community App</h1>
      <p>Find Your People. Build Your Community.</p>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Link href="/login" style={{ padding: "0.5rem 1rem", background: "var(--foreground)", color: "var(--background)", borderRadius: "4px" }}>
          Login
        </Link>
        <Link href="/signup" style={{ padding: "0.5rem 1rem", border: "1px solid var(--foreground)", borderRadius: "4px" }}>
          Sign Up
        </Link>
      </div>
    </main>
  );
}
