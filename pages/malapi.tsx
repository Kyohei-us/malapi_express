import React from "react";
import Link from "next/link";
import Head from "next/head";
import SearchOrDetail from "../components/searchOrDetail";

export default function malapi() {
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
          <title>MAL api</title>
        </Head>
        <Link href="/">
          <h2>
            <a>Back to home</a>
          </h2>
        </Link>
        {/* <SearchAnimeWithMAL numberForResults={10} /> */}
        <SearchOrDetail />
      </div>
    </div>
  );
}
