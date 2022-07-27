import fsPromises from "fs/promises";
import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import grayMatter from "gray-matter";
import Head from "next/head";
import Posts from "../src/components/posts";

const postsDirectory = path.join(process.cwd(), "pages/posts");

export async function getStaticProps({ params }) {
  const filePath = path.join(postsDirectory, `${params.id}.mdx`);
  const file = await fsPromises.readFile(filePath);
  const matter = grayMatter(file);
  const source = await serialize(matter.content);
  return {
    props: {
      title: matter.data.title,
      author: matter.data.author,
      date: matter.data.date,
      content: source,
    },
  };
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: { id: fileName.replace(/\.mdx$/, "") },
    };
  });
}

export function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Slug({ content, date, title, author }) {
  return (
    <>
      <Head>
        <title>{title} - DevBlog</title>
      </Head>
      <Posts
        content={content}
        date={date}
        author={author}
        title={title}
      ></Posts>
    </>
  );
}
