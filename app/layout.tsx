import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { Nav } from "@/components/nav"
import { Toaster } from "@/components/ui/toaster"
import { siteConfig } from "@/data/portfolio"
import "./globals.css"

const fontSans = "ui-sans-serif, system-ui, sans-serif"
const fontDisplay = "ui-sans-serif, system-ui, sans-serif"
const fontMono = "ui-monospace, SFMono-Regular, Menlo, monospace"

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Mohd Quamar Tyagi",
    "Founding Engineer",
    "Takkada",
    "PaySaathi",
    "Software Engineer",
    "Competitive Programming",
    "Codeforces Candidate Master",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.email,
  jobTitle: "Founding Engineer",
  worksFor: { "@type": "Organization", name: "Takkada", url: "https://takkada.com" },
  sameAs: [
    "https://github.com/Tyagiquamar",
    "https://linkedin.com/in/mohd-quamar-tyagi",
    "https://codeforces.com/profile/altair_45",
    "https://leetcode.com/u/Altair_4/",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body style={{ "--font-sans": fontSans, "--font-display": fontDisplay, "--font-mono": fontMono } as React.CSSProperties}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Nav />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
