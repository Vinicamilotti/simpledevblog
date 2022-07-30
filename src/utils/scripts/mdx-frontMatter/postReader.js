import path from "path";
import fsPromises from "fs/promises";
import { serialize } from "next-mdx-remote/serialize";
import grayMatter from "gray-matter";
export default async function read({ params }) {
  const postsDirectory = path.join(process.cwd(), "pages/posts");
  const filePath = path.join(postsDirectory, `${params.id}.mdx`);
  const file = await fsPromises.readFile(filePath);
  const matter = grayMatter(file);
  const source = await serialize(matter.content);
  return {
    title: matter.data.title,
    author: matter.data.author,
    date: matter.data.date,
    content: source,
    id: params.id,
  };
}
