import axios from "axios";

export const fetcher = (url) => fetch(url).then((res) => res.json());

// Check if element is visible inside the viewport
export default async function generateRssFeed() {
  const site_url = 'http://127.0.0.1:3000/';
  const allPosts = await axios.get('/api/articles').then(({data})=>data);
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
   
 }