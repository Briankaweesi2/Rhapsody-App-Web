import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { ThemeProvider } from '@/components/theme-provider'
import { SectionProvider } from '@/components/section-context'
import './globals.css'

export const metadata: Metadata = {
  title: 'Adult\'s Rhapsody - Devotional App',
  description: 'Find your faith with God on the journey to heaven',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning style={{ fontFamily: GeistSans.style.fontFamily }}>
      <head>
      </head>
      <body className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <SectionProvider>
            {children}
          </SectionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
