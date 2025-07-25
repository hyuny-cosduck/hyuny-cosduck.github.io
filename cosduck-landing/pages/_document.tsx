import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Cosduck - Try K-beauty, Shine on TikTok" />
        <meta property="og:description" content="Get exclusive free K-beauty products, make fun TikTok content, and earn the highest commissions ever. Join Cosduck today!" />
        <meta property="og:image" content="https://cosduck.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://cosduck.com" />
        <meta property="og:site_name" content="Cosduck" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cosduck - Try K-beauty, Shine on TikTok" />
        <meta name="twitter:description" content="Get exclusive free K-beauty products, make fun TikTok content, and earn the highest commissions ever. Join Cosduck today!" />
        <meta name="twitter:image" content="https://cosduck.com/og-image.png" />
        <meta name="twitter:site" content="@cosduck" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}