import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WordPress & WooCommerce Developer | React, Next.js, Vite, Laravel",
  description:
    "Development of websites and online stores on WordPress and WooCommerce. Creating modern web applications with React, Next.js, Laravel, and Vite for speed, performance, and flexibility.",
  icons: {
    icon: "/nv-logo.png", // favicon
    apple: "/nv-logo.png", // для Apple
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
        {/* <link rel="icon" href="/nv-logo.png" sizes="any" /> */}

        <meta
          name="keywords"
          content="WordPress developer, WooCommerce developer, WordPress website development, WooCommerce online store, eCommerce developer, React developer, Next.js developer, Laravel developer, Vite, full stack web development, custom web applications, website optimization, online store development, web developer for business"
        />
        {/* Open Graph для соцмереж */}
        <meta
          property="og:title"
          content="WordPress & WooCommerce Developer | React, Next.js, Vite, Laravel"
        />
        <meta
          property="og:description"
          content="Development of websites and online stores on WordPress and WooCommerce. Creating modern web applications with React, Next.js, Laravel, and Vite for speed, performance, and flexibility."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="Vyacheslav Nykyforov | WordPress & Full-Stack Development"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
