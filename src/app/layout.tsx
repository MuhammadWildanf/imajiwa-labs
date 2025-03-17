import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Webteck - Technology & IT Solutions",
  description: "Webteck - Template HTML Teknologi & Solusi IT",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="no-js" lang="zxx">
      <head>
        {/* Meta Tags */}
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="author" content="Themeholy" />
        <meta name="description" content="Webteck - Template HTML Teknologi & Solusi IT" />
        <meta name="keywords" content="Webteck, Teknologi, IT, Solusi Digital" />
        <meta name="robots" content="INDEX,FOLLOW" />

        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/img/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/assets/img/favicons/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/img/favicons/favicon-16x16.png" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800;900&family=Roboto:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />

        {/* CSS Stylesheets */}
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/fontawesome.min.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.min.css" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>

      <body>
        {/* Cursor Effects (Jika tidak dipakai, bisa dihapus) */}
        <div className="cursor"></div>
        <div className="cursor2"></div>

        {/* Header */}
        <Header />

        {/* Main Content */}
        {children}

        {/* Footer */}
        <Footer />

        {/* JavaScript Files */}
        <Script src="/assets/js/vendor/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/bootstrap.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/swiper-bundle.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/jquery.magnific-popup.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/jquery.counterup.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/circle-progress.js" strategy="lazyOnload" />
        <Script src="/assets/js/jquery-ui.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/imagesloaded.pkgd.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/isotope.pkgd.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/tilt.jquery.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/gsap.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/ScrollTrigger.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/smooth-scroll.js" strategy="lazyOnload" />
        <Script src="/assets/js/particles.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/particles-config.js" strategy="lazyOnload" />
        <Script src="/assets/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
