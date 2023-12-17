import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

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
      <Head key={"my-head"}>
        <meta name="description" content="Happy 19th birthday to my dear friend Sharon" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="birthday message wishes" />
        <meta name="author" content="Edward-Precious Omegbu Codegiyu" />
        <meta property="og:type" content="message" />
        <meta property="og:title" content="Happy Birthday Sharon" />
        <meta property="og:description" content="Happy 19th birthday to my dear friend Sharon" />
        <meta property="og:image" content="https://res.cloudinary.com/diirhfihi/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1702843441/sharon-favicon_gfkwki.jpg?_s=public-apps" />
        <meta property="og:url" content="https://happy-birthday-sharon-six.vercel.app" />
        <meta name="twitter:card" content="message" />
        <meta name="twitter:title" content="Happy Birthday Sharon" />
        <meta name="twitter:url" content="https://happy-birthday-sharon-six.vercel.app" />
        <meta name="twitter:site" content="@TheLonerider20" />
        <meta name="twitter:description" content="Happy 19th birthday to my dear friend Sharon" />
        <meta name="twitter:image" content="https://res.cloudinary.com/diirhfihi/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1702843441/sharon-favicon_gfkwki.jpg?_s=public-apps" />
        <link rel="canonical" href="https://happy-birthday-sharon-six.vercel.app" />
      </Head>
      <body className={montserrat.className}>
        {children}

        <script type="module" src="https://unpkg.com/x-frame-bypass" async></script>
        <script src="https://unpkg.com/@ungap/custom-elements-builtin" async></script>
      </body>
    </html>
  )
}
