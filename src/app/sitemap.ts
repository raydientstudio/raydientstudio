import SITEMAP from "@/utils/sitemap";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return SITEMAP;
}