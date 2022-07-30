import grayMatter from "gray-matter";
import fs from "fs/promises";
import path from "path";

export default async function mdx() {
  const postsDir = path.join(process.cwd(), "/pages/posts");
  const filenames = await fs.readdir(postsDir);
  const files = Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(postsDir, filename);
      const content = await fs.readFile(filePath, "utf-8");
      const mdxSource = grayMatter(content);

      return mdxSource;
    })
  );

  const data = {
    postData: await files,
    filenames: filenames,
  };
  return data;
}
