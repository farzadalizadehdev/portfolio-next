import fs from "fs";
import path from "path";
import matter from "gray-matter";

const testimonialsDirectory = path.join(process.cwd(), "content/testimonials");

export function getTestimonialsData(testimonialsIdentifier) {
  const fileSlug = testimonialsIdentifier.replace(/\.md$/, "");
  const filePath = path.join(testimonialsDirectory, `${fileSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const testimonialsData = {
    slug: fileSlug,
    ...data,
    content,
  };

  return testimonialsData;
}

export function getTestimonialsFiles() {
  return fs.readdirSync(testimonialsDirectory);
}

export function getAllTestimonials() {
  const testimonialsFiles = getTestimonialsFiles();
  const allTestimonials = testimonialsFiles.map((testimonialsFile) => {
    return getTestimonialsData(testimonialsFile);
  });
  return allTestimonials;
}
