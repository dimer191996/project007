import axios from "axios";
import RSS from 'rss';
import fs from 'fs';
import { Feed } from 'feed';

export async function getStaticProps() {
    const site_url = 'https://www.hotseatmag.com';
    const allPosts = await axios(`${site_url}/articles`).then(({ data }) => {
        return data
    });
   const feedOptions = {
    title: 'WELCOME TO HOT SEAT MAGAZINE | RSS Feed',
    description: 'WELCOME TO HOT SEAT MAGAZINE ARTICLES UPDATES!',
    site_url: site_url,
    feed_url: `${site_url}/rss.xml`,
    image: `${site_url}/logo.png`,
    favicon: `${site_url}/favicon.png`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, HotSeatMag`,
    feedLinks: {
      rss2: `${site_url}/rss.xml`,
      // other feed formats
      json: `${site_url}/rss.json`,
      atom: `${site_url}/atom.xml`,
     },
  };
  
    const feed = new Feed(feedOptions);
  
    allPosts.forEach((post) => {
      feed.addItem({
       title: post.title,
       id: `${site_url}/article/${post.slug}`,
       link: `${site_url}/article/${post.slug}`,
       description: post.description,
       date: new Date(post.createdAt),
      });
     });
    
    fs.writeFileSync('./public/rss.xml', feed.rss2());
    // fs.writeFileSync('./public/rss.json', feed.json1());
    // fs.writeFileSync('./public/atom.xml', feed.atom1());
    
     return {
       props:[]
      }
    
 // ....
}

export default function RssFeed() { }