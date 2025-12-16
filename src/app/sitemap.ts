import { MetadataRoute } from "next";
import SITEMAP from "@/utils/sitemap";

export default function sitemap(): MetadataRoute.Sitemap {
  return SITEMAP;
}