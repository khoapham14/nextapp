/* eslint-disable @next/next/no-head-element */
import Link from "next/link";
import * as React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <main>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/">Stuff</Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
