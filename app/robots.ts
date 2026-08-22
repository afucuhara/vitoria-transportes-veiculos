import type { MetadataRoute } from "next";

const siteUrl = "https://vitoria-transportes-veiculos.patriciavolt9.chatgpt.site";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${siteUrl}/sitemap.xml`, host: siteUrl };
}
