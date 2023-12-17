import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"]
})

// export const metadata: Metadata = {
//   title: 'Happy Birthday Sharon',
//   description: 'Happy 19th birthday to my dear friend Sharon',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title key={"new"}>Happy Birthday Sharon</title>
        <meta key={"new"} name="description" content="Happy 19th birthday to my dear friend Sharon" />
        <meta key={"new"} name="robots" content="index, follow" />
        <meta key={"new"} name="keywords" content="birthday message wishes" />
        <meta key={"new"} name="author" content="Edward-Precious Omegbu Codegiyu" />
        <meta key={"new"} property="og:type" content="message" />
        <meta key={"new"} property="og:title" content="Happy Birthday Sharon" />
        <meta key={"new"} property="og:description" content="Happy 19th birthday to my dear friend Sharon" />
        <meta key={"new"} property="og:image" content="https://res.cloudinary.com/diirhfihi/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1702843441/sharon-favicon_gfkwki.jpg?_s=public-apps" />
        <meta key={"new"} property="og:url" content="https://happy-birthday-sharon-six.vercel.app" />
        <meta key={"new"} name="twitter:card" content="message" />
        <meta key={"new"} name="twitter:title" content="Happy Birthday Sharon" />
        <meta key={"new"} name="twitter:url" content="https://happy-birthday-sharon-six.vercel.app" />
        <meta key={"new"} name="twitter:site" content="@TheLonerider20" />
        <meta key={"new"} name="twitter:description" content="Happy 19th birthday to my dear friend Sharon" />
        <meta key={"new"} name="twitter:image" content="https://res.cloudinary.com/diirhfihi/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1702843441/sharon-favicon_gfkwki.jpg?_s=public-apps" />
        <link key={"new"} rel="canonical" href="https://happy-birthday-sharon-six.vercel.app" />
      </head>
      <body className={montserrat.className}>
        {children}

        <script type="module" src="https://unpkg.com/x-frame-bypass" async></script>
        <script src="https://unpkg.com/@ungap/custom-elements-builtin" async></script>
      </body>
    </html>
  )
}
