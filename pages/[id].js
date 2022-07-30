import Head from "next/head";
import Posts from "../src/components/posts";
import Link from "../src/components/link";
import read from "../src/utils/scripts/mdx-frontMatter/postReader";
import getAllPostIds from "../src/utils/scripts/mdx-frontMatter/postPaths";

export async function getStaticProps({ params }) {
  const content = await read({ params });
  return {
    props: {
      title: content.title,
      author: content.author,
      date: content.date,
      content: content.content,
      id: params.id,
    },
  };
}

export function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Slug({
  content,
  date,
  title,
  author,
  id,
  postComments,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Link href="/">Retornar aos posts</Link>
      <Posts
        content={content}
        date={date}
        author={author}
        title={title}
        id={id}
      ></Posts>
    </>
  );
}
