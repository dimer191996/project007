const { default: axios } = require('axios');
const Sitemap = require('next-sitemap');


module.exports = async () => {
  // Fetch the data that you want to include in the sitemap
  const products = await axios.get('/api/articles').then((response) => {
    return response.data
  })

  // Create an array of sitemap entries using the data
  const entries = products.map((product) => ({
    path: `/article/${product.slug}`,
    changefreq: 'weekly',
    priority: 0.8,
  }));

  // Generate the sitemap
  return new Sitemap(entries).build('https://www.hotseatmag.com');
};