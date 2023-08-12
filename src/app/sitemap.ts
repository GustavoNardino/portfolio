import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://gustavonardino.com.br',
      lastModified: new Date(),
    },
    {
      url: 'https://gustavonardino.com.br/experiences',
      lastModified: new Date(),
    },
    {
      url: 'https://gustavonardino.com.br/labs',
      lastModified: new Date(),
    },
  ]
}