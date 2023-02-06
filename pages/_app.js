import "../styles/globals.css";
import Default from "../Layouts/Default";
import Script from "next/script";
import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import { Analytics } from '@vercel/analytics/react';
import Loader from "../components/Loader";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    Router.events.on("routeChangeStart", (url)=>{
      setIsLoading(true)
    });

    Router.events.on("routeChangeComplete", (url)=>{
      setIsLoading(false)
    });

    Router.events.on("routeChangeError", (url) =>{
      setIsLoading(false)
    });

  }, [Router])
  useEffect(() => {
    var ads = document.getElementsByClassName("adsbygoogle").length;
    for (var i = 0; i < ads; i++) {
      try {
        (adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {}
    }
  }, [router.asPath]);

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer', 'GTM-XXXXXX');
  `,
        }}
      />
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-VCL4RNBM4L}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VCL4RNBM4L', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Default>
        {isLoading && <Loader/>}
        <Component {...pageProps} />
        <Analytics />
      </Default>
    </>
  );
}

export default MyApp;
