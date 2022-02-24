import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getContentFromMarkdown(fileName) {
  const contentDirectory = path.join(process.cwd(), `content/${fileName}`);
  const fileSlug = fileName.replace(/\.md$/, "");
  const filePath = path.join(contentDirectory, `${fileSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const contentData = {
    ...data,
    content,
  };
  return contentData;
}
