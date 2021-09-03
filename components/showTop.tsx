import React from "react"
import { jikanTop, topBasicAnimeInfo } from "../common/types"
import useFetchTopAnime from "../hooks/useFetchTopAnime"
import AnimeImageCard from "./animeImageCard"

export default function ShowTop() {
    const topPopAnime: jikanTop = {
        type: "anime",
        page: 1,
        subtype: "bypopularity"
    }
    const topRes = useFetchTopAnime(topPopAnime)

    const trl: any[] = topRes?.data.top
    const topAsList: JSX.Element[] = trl ? trl.map(
        (topEle: any) => {
            let topEle2: topBasicAnimeInfo = {
                image: topEle.image_url,
                title: topEle.title,
                malid: topEle.mal_id,
                rank: topEle.rank,
            }
            return topEle2
        }
    )
    // .filter(topEle => 
    //     topEle.rank < 20
    // )
    .map(topEle2 =>
        <AnimeImageCard
                key={topEle2.title}
                image={topEle2.image}
                title={topEle2.title}
                malid={topEle2.malid} />
    ) : []
    return (
        <div>
            {topAsList}
        </div>
    )
}