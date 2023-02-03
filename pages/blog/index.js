import axios from "axios";
import { Feed } from 'feed';
import  fs from 'fs';


export async function getStaticProps() {
    const site_url = 'https://www.hotseatmag.com/';
    const latest = await axios(`${site_url}api/articles/latest`).then(({ data }) => {
      return data
    }).catch((error)=>{
      consol.log(error)
    });

    const feed = new Feed({
      title: 'Latest & Breaking News on Hot Seat Magazine',
      description: 'Discover the latest breaking news feed with Hot Seat Magazine. Find out what the latest news is and read about the latest news happening today.',
      site_url: site_url,
      feed_url: `${site_url}rss.xml`,
      image: `${site_url}logo.png`,
      favicon: `${site_url}favicon.png`,
      pubDate: new Date(),
      copyright: `All rights reserved ${new Date().getFullYear()}, HotSeatMag`,
      feedLinks: {
        // rss2: `${site_url}rss.xml`,
        atom1: `${site_url}/latest.xml`,
      },
    });
 
    latest?.forEach((post) => {
      feed.addItem({
        title: post.title,
        id: `${site_url}article/${post.slug}`,
        link: `${site_url}article/${post.slug}`,
        description: post.description,
        image:post.image,
        date: new Date(post.createdAt),
      });
    });

    fs.writeFileSync('./public/latest.xml', feed.atom1());
    
    return {
      props:{ }
    }

}

export default function RssFeed({ rss }) {
  return (
    <div></div>
  )
  // Use the `rss` data as needed in your application
}