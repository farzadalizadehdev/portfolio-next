import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "content/projects");

export function getProjectData(projectIdentifier) {
  const fileSlug = projectIdentifier.replace(/\.md$/, "");
  const filePath = path.join(projectsDirectory, `${fileSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const projectData = {
    slug: fileSlug,
    ...data,
    content,
  };
  return projectData;
}

export function getProjectFiles() {
  return fs.readdirSync(projectsDirectory);
}

export function getAllProjects() {
  const projectsFiles = getProjectFiles();
  const allProject = projectsFiles.map((projectFile) => {
    return getProjectData(projectFile);
  });
  const sortedProjects = allProject.sort((a, b) => (a.id > b.id ? -1 : 1));
  return sortedProjects;
}

export function getFeaturedProjects() {
  const allProject = getAllProjects();
  const featuredProjects = allProject.filter((project) => project.isFeatured);
  return featuredProjects;
}

export function getFilteredProjects(category) {
  const allProject = getAllProjects();
  const filteredProjects = allProject.filter(
    (project) => project.category === category
  );
  return filteredProjects;
}
