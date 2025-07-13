// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.freetoolshop.com',
  generateRobotsTxt: true,
  exclude: ['/admin'],
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  generateIndexSitemap: true,
  transform: async (config, path) => {
    // Don't include excluded paths
    if (path.includes('/admin')) {
      return null;
    }

    return {
      loc: `${config.siteUrl}${path}`,
      changefreq: 'weekly',
      priority: path === '/' ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin'],
      },
    ],
  },
};
