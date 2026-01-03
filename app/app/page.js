export default function Home() {
  return (
    <main style={{ padding: 40, textAlign: "center" }}>
      <h1>Grady AI Store 🚀</h1>
      <p>Your AI-powered dropshipping machine is live.</p>

      <a href="/api/checkout">
        <button
          style={{
            padding: "15px 30px",
            fontSize: "18px",
            background: "#00ff99",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer"
          }}
        >
          Launch My AI Store
        </button>
      </a>
    </main>
  );
}
