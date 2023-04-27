import { NextSeo } from "next-seo";
import Head from "next/head";


const SeoPage = ({ hearder, category, tags, children }) => (


  <>
      <Head>
          <title>{hearder}</title>
          <meta name="description" content={hearder}/>
          <meta name="keywords" content="celebrity , net-worth , weight-loss , crime , reality tv , plastic-surgery"/>
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
