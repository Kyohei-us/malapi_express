import ReadMoreSynopsis from "./readMoreSynopsis";
import { useState } from "react";
import { Button } from "@material-ui/core";

export default function AnimeDetails(props: { animeRes: any; readMoreSynopsis: boolean; }) {
    const { animeRes, readMoreSynopsis } = props;
    console.log(animeRes)

    return (
        <>
            <p>
                {
                    animeRes && animeRes.data.mal_id !=  -1 ?
                        animeRes.data.mal_id :
                        ""
                }
            </p>
            <p>
                {
                    animeRes ?
                        animeRes.data.title_japanese :
                        "Japanese title comes here"
                }
            </p>
            <div>
                {
                    animeRes ? 
                        <>
                        <ReadMoreSynopsis paragraph={animeRes.data.synopsis} readMore={readMoreSynopsis} />
                         </>:
                        "synopsis comes here"
                }
            </div>
        </>
    )
}