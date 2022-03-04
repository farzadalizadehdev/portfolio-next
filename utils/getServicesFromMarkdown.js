import fs from "fs";
import path from "path";
import matter from "gray-matter";

const servicesDirectory = path.join(process.cwd(), "content/services");

export function getServicesData(servicesIdentifier) {
  const fileSlug = servicesIdentifier.replace(/\.md$/, "");
  const filePath = path.join(servicesDirectory, `${fileSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const servicesData = {
    slug: fileSlug,
    ...data,
    content,
  };

  return servicesData;
}

export function getServicesFiles() {
  return fs.readdirSync(servicesDirectory);
}

export function getAllServices() {
  const servicesFiles = getServicesFiles();
  const allServices = servicesFiles.map((servicesFile) => {
    return getServicesData(servicesFile);
  });
  const sortedServices = allServices.sort((a, b) => (a.id < b.id ? -1 : 1));

  return sortedServices;
}

