import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://1बीघा.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/account',
        '/login',
        '/admin',
      ],
    },

    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
