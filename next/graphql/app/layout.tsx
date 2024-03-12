import type { Metadata } from "next";
import Providers from "@/components/Providers";

import "./globals.css";

export const metadata: Metadata = {
  title: "Graphql",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="m-5">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
