import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://eranyosef.dev"),
  title: "Eran Yosef | Full Stack Engineer",
  description: "Full Stack Engineer specializing in React, Next.js, Node.js, and modern web technologies. Building scalable web applications with clean, responsive designs.",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Node.js", "Web Developer", "Israel"],
  authors: [{ name: "Eran Yosef" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Eran Yosef | Full Stack Engineer",
    description: "Full Stack Engineer specializing in building scalable web applications.",
    type: "website",
    url: "https://eranyosef.dev",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Eran Yosef - Full Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eran Yosef | Full Stack Engineer",
    description: "Full Stack Engineer specializing in React, Next.js, Node.js, and modern web technologies.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Fira+Code:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
