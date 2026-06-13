import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sinzo - Global E-Commerce Platform Coming Soon",
  description:
    "Sinzo is a global e-commerce platform coming soon with factory direct products, smarter prices, launch offers and millions of products.",
  keywords: [
    "Sinzo",
    "Sinzo.in",
    "Sinzo ecommerce",
    "Sinzo coming soon",
    "Sinzo India",
    "Sinzo online shopping",
    "factory direct shopping",
    "global ecommerce platform",
  ],
  alternates: {
    canonical: "https://www.sinzo.in",
  },
  openGraph: {
    title: "Sinzo - Global E-Commerce Platform Coming Soon",
    description:
      "Sinzo is coming soon with factory direct products, smarter prices, launch offers and millions of products.",
    url: "https://www.sinzo.in",
    siteName: "Sinzo",
    type: "website",
  },
};

const GA_ID: string = "G-KY4SW1C6Q1";
const CLARITY_ID: string = "";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const hasGoogleAnalytics = GA_ID.length > 0;
  const hasMicrosoftClarity = CLARITY_ID.length > 0;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sinzo",
    alternateName: ["Sinzo.in", "Sinzo E-Commerce", "Sinzo India"],
    url: "https://www.sinzo.in",
    logo: "https://www.sinzo.in/favicon.ico",
    description:
      "Sinzo is a global e-commerce platform coming soon with factory direct products, smarter prices, launch offers and millions of products.",
    sameAs: ["https://www.instagram.com/sinzo.in/"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-87505-11089",
        contactType: "customer support",
        email: "work@sinzo.in",
        areaServed: ["IN", "AE", "NP", "US", "GB"],
        availableLanguage: ["English", "Hindi"],
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sinzo",
    alternateName: "Sinzo.in",
    url: "https://www.sinzo.in",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.sinzo.in/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {hasGoogleAnalytics && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}

        {hasMicrosoftClarity && (
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);
                t.async=1;
                t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];
                y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${CLARITY_ID}");
            `}
          </Script>
        )}

        <Script
          id="sinzo-organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <Script
          id="sinzo-website-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        {children}
      </body>
    </html>
  );
}