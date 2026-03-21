import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MEV Shield | @samdevrel",
  description: "Private mempool protection against sandwich attacks, frontrunning, and MEV extraction",
  keywords: ["mev", "flashbots", "private-mempool", "sandwich", "frontrun", "protection"],
  authors: [{ name: "Sam", url: "https://x.com/samdevrel" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
