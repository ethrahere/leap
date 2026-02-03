import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LEAP — The Creative Exit Network",
  description: "A platform where creatives stake their escape from the 9-5. Your voice is earned by showing up, not paying up.",
  openGraph: {
    title: "LEAP — The Creative Exit Network",
    description: "A platform where creatives stake their escape from the 9-5. Your voice is earned by showing up, not paying up.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LEAP — The Creative Exit Network",
    description: "A platform where creatives stake their escape from the 9-5. Your voice is earned by showing up, not paying up.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
