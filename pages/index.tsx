import Link from "next/link";
import Head from "next/head";
import ShowTop from "../components/showTop";
import styles from "../styles/Home.module.css";
import SidewayMediaCard from "../components/sidewayMediaCard";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#116466",
        minHeight: "100vh",
      }}
    >
      <div>
        <Head>
          <title>MALAPI EXPRESS ENTRY POINT</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Link href="/malapi">
            <h2>to malapi</h2>
          </Link>
        </main>
      </div>
    </div>
  );
};

export default Home;
