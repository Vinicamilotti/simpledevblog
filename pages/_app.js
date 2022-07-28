import "../styles/globals.css";
import Head from "next/head";
import TopBar from "../src/components/topbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dev Blog de Vinicius</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <div className="Conteiner">
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default MyApp;
