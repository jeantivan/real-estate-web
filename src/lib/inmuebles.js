import fs from "fs";
import path from "path";
import matter from "gray-matter";

import remark from "remark";
import html from "remark-html";

import { getAgentById } from "./agents";

const inmueblesDirectory = path.join(process.cwd(), "src/data/inmuebles");

export function getInmueblesList() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(inmueblesDirectory);
  const inmuebleList = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const slug = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(inmueblesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      slug,
      ...matterResult.data,
    };
  });

  return inmuebleList;
}

export function getAllInmueblesSlugs() {
  const fileNames = fs.readdirSync(inmueblesDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getInmuebleData(slug) {
  const fullPath = path.join(inmueblesDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  const agent = getAgentById(matterResult.data.agentId);

  // Combine the data with the id and contentHtml
  return {
    slug,
    contentHtml,
    ...matterResult.data,
    agent,
  };
}
