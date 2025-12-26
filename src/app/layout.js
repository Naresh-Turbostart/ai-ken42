import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./Components/layout/navbar/Navbar";
import Footer from "./Components/layout/footer/Footer";
// import HeadTag from "@/components/SEO/HeadTag";
// import MixpanelProvider from "@/components/tracking/MixpanelProvider";

// const Inter = localFont({
//   src: "./fonts/Inter-Regular.woff2",
//   variable: "--font-inter",
//   weight: "400",
//   display: "swap",
// });

// export const metadata = {
//   type: "website",
//   images: [
//     {
//       url: "/images/icon.svg",
//       width: 1200,
//       height: 630,
//     },
//   ],
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics 4 (gtag.js) */}
        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-GY2566ZJQJ"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GY2566ZJQJ');
            `,
          }}
        /> */}

        {/* Google Tag Manager */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T73J55CN');
            `,
          }}
        /> */}

        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Climatyai",
              url: "https://climaty.ai/",
              logo: "/images/icon.svg",
              image: "/images/icon.svg",
            }),
          }}
        /> */}


        {/* Meta Pixel Code */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
        n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '1491465265303971');
      fbq('track', 'PageView');
    `
          }}
        /> */}

        {/* <HeadTag /> */}
      </head>
      <body
        // className={`${Inter.variable} ${Inter.variable} antialiased`}
      >
        {/* google tag manager */}
        {/* <noscript
          dangerouslySetInnerHTML={{
            __html: `
<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T73J55CN"
height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        /> */}
      <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}