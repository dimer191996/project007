import axios from "axios";
import RSS from 'rss';
import fs from 'fs';

export async function getStaticProps() {
    const site_url = 'https://www.hotseatmag.com';
    const allPosts = await axios(`${'https://www.hotseatmag.com/api'}/articles`).then(({ data }) => {
        return data
    });
   const feedOptions = {
    title: 'Blog posts | RSS Feed',
    description: 'Welcome to this blog posts!',
    site_url: site_url,
    feed_url: `${site_url}/rss.xml`,
    image_url: `https://res.cloudinary.com/dggjlyw5e/image/upload/v1634447165/THE_HOT_SEAT_1_yubb8j.png`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, HotSeatMag`,
   };
  
    const feed = new RSS(feedOptions);
  
    allPosts.map((post) => {
      feed.item({
       title: post.title,
       description: post.description,
       url: `${site_url}/article/${post.slug}`,
       date: post.date,
      });
     });
  
     fs.writeFileSync('./public/rss.xml', feed.xml({ indent: true }));

     return {
        redirect: {
          destination: "/",
        },
      }
    
 // ....
}

export default function RssFeed() { }