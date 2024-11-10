import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Morteza Darzi",
  description: "Powered by Morteza Darzi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  return (
    <html data-theme="light" lang="en">
      <body>{children}</body>
    </html>
  );
}
