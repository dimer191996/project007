import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="facebook-domain-verification"
        content={process.env.FB_DOMAIN_VERIFY}
      />
      <meta property="fb:app_id" content={process.env.FB_APP_ID} />
      <meta name="p:domain_verify" content={process.env.P_DOMAIN_VERIFY} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />

      <meta property="og:site_name" content="hotseatmag" />

      <link rel="canonical" href="https://www.hotseatmag.com/" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <script type="text/javascript" data-cfasync="false">
        {`/*<![CDATA[/* */
(function(){var bf7fc0d92d8ceb4ccdc98acbe5fae151="EZrrK0RkA6cFC5hzYDFrIjBZ-kkLFq_BrnoevCVTR3gfWFggHU9JJmMfVCS0A-cEGNzhGQtsB4xMw3_Vsvab9w";var b=['T8K3w4PCtm86IH3DlSdcYi4mfQ==','Kj4kdcOTDG/Cp0w=','aBPCsQ7CiMO0HC4=','SC3ChMKNw5nCg8Oqw6rDu1c=','O8Otw4Alw5kc','w53Dszhsw5MTwpg=','WMKgw5TCsTMfM2LDkz1R','e8KePBrDj8K1Ohk=','V8KdwqE5w6QpbMKcVMOSwo/DjWoXwobDvihvw4/ChUN8f8KRAMKgAB/DuMOvw4jCmsKcLMKmX0vDtyjDiMO5wrjCgcOr','b0Us','w7/CogvDhA==','wqcew4DDlsKaT8Kawq3CuU3DtkXDoMOKw5zDnsOUf8KABC7DiAlPwoDCsk1DwppVEsO/w4XDnFRtVUIZfB/CtlrCpA==','dsOcwpLDqAs=','F8O+w508','GRF/c8KTAQTDjlUiPXrCi8OXwqTCucOTw5ksKA==','X8K3w5fCozkSJH/DgzFafg==','JStkwpzDusKT','dCZIQ8KmbcOLaBxVw7N0PA==','bMO1woPDnkvCt0DCncOSwowIwqg=','e8O2wqYcwrUZ','RwFJw4/CpEE=','XsOcSEVdwr7Cj8O0','R13CucKwdXYUw7DDocKBcUPDvMK9','w6jCqR7DgHDCmmhjwp0EGMOdw6M=','eMOPNcOrRMKsO8OhwoAqWGQ=','WsOgOMO5fgHDnQ=='];(function(a,c){var f=function(g){while(--g){a['push'](a['shift']());}};f(++c);}(b,0x72));var c=function(a,d){a=a-0x0;var e=b[a];if(c['RHAkrv']===undefined){(function(){var h;try{var j=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');h=j();}catch(k){h=window;}var i='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';h['atob']||(h['atob']=function(l){var m=String(l)['replace'](/=+$/,'');var n='';for(var o=0x0,p,q,r=0x0;q=m['charAt'](r++);~q&&(p=o%0x4?p*0x40+q:q,o++%0x4)?n+=String['fromCharCode'](0xff&p>>(-0x2*o&0x6)):0x0){q=i['indexOf'](q);}return n;});}());var g=function(h,l){var m=[],n=0x0,o,p='',q='';h=atob(h);for(var t=0x0,u=h['length'];t<u;t++){q+='%'+('00'+h['charCodeAt'](t)['toString'](0x10))['slice'](-0x2);}h=decodeURIComponent(q);var r;for(r=0x0;r<0x100;r++){m[r]=r;}for(r=0x0;r<0x100;r++){n=(n+m[r]+l['charCodeAt'](r%l['length']))%0x100;o=m[r];m[r]=m[n];m[n]=o;}r=0x0;n=0x0;for(var v=0x0;v<h['length'];v++){r=(r+0x1)%0x100;n=(n+m[r])%0x100;o=m[r];m[r]=m[n];m[n]=o;p+=String['fromCharCode'](h['charCodeAt'](v)^m[(m[r]+m[n])%0x100]);}return p;};c['KVvayX']=g;c['QwgUXW']={};c['RHAkrv']=!![];}var f=c['QwgUXW'][a];if(f===undefined){if(c['MOfabR']===undefined){c['MOfabR']=!![];}e=c['KVvayX'](e,d);c['QwgUXW'][a]=e;}else{e=f;}return e;};var n=window;n[c('0x3','9l%P')]=[[c('0xa','BPZ%'),0x492333],[c('0x6','Om]f'),0.09],[c('0xc','D[lN'),'0'],[c('0x5','dq8&'),0x0],[c('0x15','!drI'),![]],[c('0x7','rwh]'),0x0],[c('0x8','0EGQ'),!0x0]];var x=[c('0x18','k!d*'),c('0x1','4(8J')],k=0x0,o,a=function(){if(!x[k])return;o=n[c('0x12','o(T#')][c('0xd','nID@')](c('0x9','d!N*'));o[c('0x0','nID@')]=c('0x10','dq8&');o[c('0x2','Xsso')]=!0x0;var d=n[c('0x17','iv*7')][c('0x4','V3qj')](c('0x14','9l%P'))[0x0];o[c('0x19','b]Mk')]=c('0xb','VKUi')+x[k];o[c('0x16','dq8&')]=c('0x11','#[Ea');o[c('0xf','$S2U')]=function(){k++;a();};d[c('0x13','rVYH')][c('0xe','cKQt')](o,d);};a();})();
/*]]>/* */`}
      </script>

      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700&display=swap"
        rel="stylesheet"
      />

      <script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4491397756399283`}
        crossOrigin="anonymous"
      ></script>
      <div className=" sm:mt-20 mt-24 md:mt-32"></div>

      <ins
        className="adsbygoogle"
        style={{
          display: "block",
          backgroundColor: "#eee9",
        }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-4491397756399283"
        data-ad-slot="2168142036"
      ></ins>
      <script async src="//www.instagram.com/embed.js"></script>
      <body>
        <div id="fb-root"></div>
        <script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v14.0&appId=321461765200716&autoLogAppEvents=1"
          nonce="FHBSVGIF"
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
