import type { Project, Home } from "@/types/index";
import plank from "./client";

// Collections

export async function getProjects({ onlyFeatured = false } = {}) {
  return await plank.collection<Project>("projects").findMany({
    status: "published",
    sort: "title",
    order: "asc",
    ...(onlyFeatured && { featured: true }),
  });
}

export async function getSingleProject(slug: string) {
  const result = await plank.collection<Project>("projects").findMany({
    status: "published",
    slug,
  });
  return result.data[0];
}

// Single Types

export async function getHome() {
  return await plank.single<Home>("labs").find();
}
