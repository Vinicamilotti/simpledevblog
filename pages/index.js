import style from "../styles/Home.module.css";
import Card from "../src/components/cards";
import read from "../src/utils/postListReader";

export async function getStaticProps() {
  const posts = await read();
  const frontMatter = posts.postData.map((data) => {
    return data.data;
  });
  const hrefs = posts.filenames.map((data) => {
    return data.replace(/\.mdx$/, "");
  });
  return {
    props: {
      frontMatter,
      hrefs,
    },
  };
}

export default function Home({ frontMatter, hrefs }) {
  return (
    <div>
      <div className={style.titles}>
        <h1>Dev Blog</h1>
        <h2>Por Vinicius Camilotti</h2>
      </div>

      <ul className={style.postConteiner}>
        {frontMatter.map((item, index) => {
          return <Card key={index} item={item} path={hrefs[index]} />;
        })}
      </ul>
    </div>
  );
}
