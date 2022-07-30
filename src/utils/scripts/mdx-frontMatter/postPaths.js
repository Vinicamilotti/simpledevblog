import fs from "fs";
import path from "path";
export default function getAllPostIds() {
  const postsDirectory = path.join(process.cwd(), "pages/posts");
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: { id: fileName.replace(/\.mdx$/, "") },
    };
  });
}
