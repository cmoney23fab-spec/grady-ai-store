export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#000",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Arial"
    }}>
      <h1>🔥 Grady1980 AI Store 🔥</h1>
      <p>Your automated TikTok money machine is live.</p>
      <a
        href="https://www.grady1980.com"
        style={{
          marginTop: 20,
          padding: "15px 30px",
          background: "#00ff99",
          color: "#000",
          textDecoration: "none",
          fontWeight: "bold",
          borderRadius: 10
        }}
      >
        Enter Store
      </a>
    </main>
  );
}
