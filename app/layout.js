import Script from "next/script";

export const metadata = {
  title: "redant.in | RedANT — WhatsApp Business API | AI Automate WhatsApp",
  description:
    "redant.in is RedANT — Official WhatsApp Business API provider. AI automate WhatsApp, WhatsApp CRM, broadcast, chatbot. Trusted by 4000+ brands. Not RedAnt Staffing.",
};

export const dynamic = "force-dynamic";

export default function RootLayout({ children }) {
  const GA_ID = "G-5ZC2418VM8";

  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        {/* Tailwind CSS */}
        <script src="https://cdn.tailwindcss.com"></script>

        {/* Google Font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />

        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            gtag('js', new Date());

            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
              anonymize_ip: true
            });
          `}
        </Script>
        {/* META VERIFICATION */}
        <meta name="facebook-domain-verification" content="iv2ugw9md9gz86u4yw8w9xq172iy49" />
      </head>

      <body>{children}</body>
    </html>
  );
}