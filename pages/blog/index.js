// import axios from "axios";
// import { Feed } from 'feed';
// import  fs from 'fs';


// export async function getStaticProps() {
//     const site_url = 'https://www.hotseatmag.com';
//     const allPosts = await axios(`${site_url}/api/articles`).then(({ data }) => {
//       return data
//     });

//     const feed = new Feed({
//       title: 'WELCOME TO HOT SEAT MAGAZINE | RSS Feed',
//       description: 'WELCOME TO HOT SEAT MAGAZINE ARTICLES UPDATES!',
//       site_url: site_url,
//       feed_url: `${site_url}/rss.xml`,
//       image: `${site_url}/logo.png`,
//       favicon: `${site_url}/favicon.png`,
//       pubDate: new Date(),
//       copyright: `All rights reserved ${new Date().getFullYear()}, HotSeatMag`,
//       feedLinks: {
//         rss2: `${site_url}/rss.xml`,
//       },
//     });

//     allPosts.forEach((post) => {
//       feed.addItem({
//         title: post.title,
//         id: `${site_url}/article/${post.slug}`,
//         link: `${site_url}/article/${post.slug}`,
//         description: post.description,
//         date: new Date(post.createdAt),
//       });
//     });

//     fs.writeFileSync('./public/rss.xml', feed.rss2());

//     return {
//       props:{ }
//     }

// }

export default function RssFeed({ rss }) {
  return (
    <div>hello world</div>
  )
  // Use the `rss` data as needed in your application
}