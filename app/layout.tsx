import type { Metadata } from "next"
import { Libre_Franklin } from "next/font/google"
import "./globals.css"

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["300", "600", "700"],
})

export const metadata: Metadata = {
  title: "Ping single column coming soon page",
  description: "A Challenge from Frontend Mentor!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/images/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body
        className={`${libreFranklin.className} text-neutral-very-dark-blue flex min-h-screen flex-col items-center justify-center `}
      >
        {children}
      </body>
    </html>
  )
}
