import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: 'Happy Birthday Sharon',
  description: 'Happy 19th birthday to my dear friend Sharon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}

        <script type="module" src="https://unpkg.com/x-frame-bypass" async></script>
        <script src="https://unpkg.com/@ungap/custom-elements-builtin" async></script>
      </body>
    </html>
  )
}
