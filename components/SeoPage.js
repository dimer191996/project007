import { NextSeo } from "next-seo";
import Head from "next/head";


const SeoPage = ({ hearder, category, tags, children }) => (


  <>
      <Head>
          <title>{hearder}</title>
          <meta name="description" content={hearder}/>
          <meta name="keywords" content="90 day fiance, 90 day, 90 fiance ,tellall , 90 day fiance other way, 90 day the other way, 90 day fiance the other way, 90 days, 90 day fiance full, 90 days fiance, 90 day fiance full episodes, pillow talk, 90 day pillow talk, 90 dias para casar, todo en 90 dias, family chantel, 90dayfiance, #90dayfiancé , #tlc 90 day fiance, 90 day fiance sumit,jenny 90 day fiance, todo en 90 dias en espaÃ±ol, ed 90 day fiance, jenny sumit 90 day fiance, pewdiepie, tlc , 90 day fiance yara , brandon and julia 90 day fiance, 90 day fiance jovi , 90 day fiance season 8 episode 1 , the family chantel season 2 episode 9 , zied 90 day fiance , 90 day fiance belize , 90 day fiance season 8 , 90 day fiance rebecca zied , 90 day fiance the other way tell all , natalie 90 day fiance , mike and natalie 90 day fiance, 90 day fiance season 9 , 90dayfianceJibri , Serbian, miona, 90 days fiance season 8 , 90 day fiance zied and rebecca , up and adam , 90 day fiance the other way season 2 episode 23 , 90 day fiance season 8 trailer , real housewives of atlanta , 90 day fiance new season , rhoa , 90 day fiance season 1 , deavan clegg , 90 day fiance the other way season 2 episode 22 , 90 day fiance the other way s02e22 , 90 day fiance , 90 day fiance the other way , 90 days fiance , sumit and jenny 90 day fiance , 90 days fiance the other way , jenny and sumit 90 day fiance , sumit and jenny , 90 day fiance sumit and jenny  , 90 day fiance jenny and sumit  , jenny and sumit  , sumit jenny ,  90 day fiance the other way full episodes , 90 day fiancé the other way , 90 day , the other way 90 day fiance , sumit jenny 90 day fiance , 90 days fiance sumit and jenny , 90 days the other way , 90 day fiance other way , 90 day the other way , ninety day fiance , 90 days , jenny sumit , 90 days fiance jenny and sumit , 90-day fiance , 90 day fiance full episodes , 90 day fiancé , 90 day fiance what now , 90-day fiance the other way , jenny sumit 90 day fiance , 90 day fiance jenny , 90 day fiance new , 90 day fiance sumit , 90daysfiancé the other way , jenny 90 day fiance , ninety day fiance the other way , sumit 90 day fiance , 90, 90 day fiance 2020 , 90 day fiance sumit jenny , 90 day fiance the other way jenny and sumit , fiance 90 days , sumit and jenny 90 day fiance latest , the other way , the other way 90 day fiance full episode , Loren and Alexei , #90dayfiance​ , #90dayfiancepillowtalk, 90 dayfianceseason9, 90daybaresall  , 90 day fiance new season , 90 days fiance latest episode , 90 days fiancee , 90 days fiancé"/>
          <meta name="author" content={"Hot Seat Magazine"}/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link rel="canonical" href={`https://www.hotseatmag.com/${category}`}/>
          
          <meta property="og:title" content={hearder}/>
          <meta property="og:description" content={hearder}/>
          <meta property="og:url" content={`https://www.hotseatmag.com/${category}`}/>
          {/* <meta property="og:image" content={image}/> */}
          <meta name="twitter:card" content="summary"/>
          {/* <meta name="twitter:title" content={title}/>
          <meta name="twitter:description" content={hearder}/>
          <meta name="twitter:image" content={image}/> */}
          <meta name="robots" content="index,follow"/>
          <meta name="googlebot" content="index,follow"/>
          <meta name="referrer" content="origin"/>
          <meta name="language" content="en"/>
          <meta name="copyright" content={`Copyright ${'Hot Seat Magazine'}`}/>
          <meta name="rating" content="general"/>
      </Head>
    {children}
  </>
);

export default SeoPage;
