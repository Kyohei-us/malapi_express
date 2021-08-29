import React, { useState, useEffect } from "react"
import axios from "axios"

/**
 * Search for anime by query
 * 
 * @param query 
 * @returns 
 */
export default function useSearchAnime(query: string): { image: string, title: string, malid: number } {
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [malid, setMalid] = useState(-1);

    let url = `https://api.jikan.moe/v3/search/anime?q=${query}&page=1`

    useEffect(() => {
        const result = async () => {
            let response = await axios(url);
            setImage(response.data["results"][0]["image_url"]);
            setTitle(response.data["results"][0]["title"]);
            setMalid(response.data["results"][0]["mal_id"]);
        }

        if (query.length >= 3) { result() } else { console.log("query is too short!") };
    }, [query])

    return { image, title, malid };
}