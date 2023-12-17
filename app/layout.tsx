import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: 'Happy Birthday Tabitha',
  description: 'Happy 15th birthday to my sweet little Tabitha',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}

        <script type="module" src="https://unpkg.com/x-frame-bypass" async></script>
        <script src="https://unpkg.com/@ungap/custom-elements-builtin" async></script>
      </body>
    </html>
  )
}
