import type { MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/account', '/login', '/admin'],
    },
    sitemap: 'https://1बीघा.com/sitemap.xml',
  };
};

export default robots;
