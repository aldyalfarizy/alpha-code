import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.alpharizy.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://www.alpharizy.com/legal",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.3,
    },
    {
      url: "https://www.alpharizy.com/article",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.1,
    },
  ];
}
