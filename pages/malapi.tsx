import Head from "next/head";
import Link from "next/link";
import React from "react";
import SearchOrDetail from "../components/searchOrDetail";

export default function malapi() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
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
        <SearchOrDetail />
      </div>
    </div>
  );
}
