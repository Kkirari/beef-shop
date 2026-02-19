import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "PrimeCut | Premium Beef & Wagyu Specialist",
  description:
    "Experience the finest cuts of Wagyu, Grass-fed, and Grain-fed beef sourced directly from award-winning farms.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background-light font-display text-charcoal">
        {children}
      </body>
    </html>
  )
}
