import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://1बीघा.com';

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },

    {
      url: `${baseUrl}/search`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },

    {
      url: `${baseUrl}/sell`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },

    {
      url: `${baseUrl}/partners`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },

    {
      url: `${baseUrl}/map`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },

    {
      url: `${baseUrl}/login`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ];
}
