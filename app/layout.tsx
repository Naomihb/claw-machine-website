import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Rajdhani, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })
const rajdhani = Rajdhani({
  variable: '--font-rajdhani',
  subsets: ['latin'],
  weight: ['600', '700'],
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const siteUrl = 'https://vegaplaysystems.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Vega Play Systems | Commercial Claw Machines for Sale in the USA',
    template: '%s | Vega Play Systems',
  },
  description:
    'We provide commercial claw machines for arcades, malls, family entertainment centers, trampoline parks, restaurants, and claw machine store operators in the United States.',
  keywords: [
    'claw machine for sale',
    'commercial claw machine',
    'arcade claw machine',
    'claw machine store',
    'claw machines USA',
    'arcade machines for sale',
    'family entertainment center equipment',
    'mall claw machines',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'Commercial Claw Machines for Sale in the USA',
    description:
      'Premium commercial claw machines for arcades, malls, family entertainment centers, trampoline parks, and restaurants across the United States.',
    url: siteUrl,
    siteName: 'Vega Play Systems',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/arcade-interior.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Claw Machines for Sale in the USA',
    description:
      'Premium commercial claw machines for arcades, malls, family entertainment centers, and entertainment venues across the United States.',
    images: ['/images/arcade-interior.jpg'],
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f7f5f0',
}

const gaId = process.env.NEXT_PUBLIC_GA_ID

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${rajdhani.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        <Toaster richColors position="top-center" />
        {process.env.NODE_ENV === 'production' && <Analytics />}
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  )
}
