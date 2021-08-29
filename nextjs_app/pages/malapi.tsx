import React from "react";
import Link from "next/link";
import Head from "next/head";
import SearchAnimeWithMAL from "../components/searchAnimeWithMAL";

export default function malapi() {

    return (
        <>
            <Head>
                <title>MAL api</title>
            </Head>
            <Link href="/">
                <h2><a>Back to home</a></h2>
            </Link>
            <SearchAnimeWithMAL />
            <style jsx>{`body {background-image url('/images/DjoFAH.jpg');}`}</style>
        </>
    );
}