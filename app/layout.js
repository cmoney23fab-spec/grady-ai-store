export const metadata = {
  title: "Grady1980 AI Store",
  description: "Your automated TikTok money machine"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#000", color: "#fff" }}>
        {children}
      </body>
    </html>
  );
}
