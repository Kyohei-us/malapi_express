import React, {useState, useEffect} from "react"
import axios, { AxiosResponse } from "axios"
import { addcorsproxy } from "../utils/cors"

/**
 * Fetch detailed anime info
 * 
 * @param malid 
 * @returns 
 */
export default function useFetchAnimeInfo(malid: number): AxiosResponse | undefined{
    const [response, setResponse] = useState<AxiosResponse>()
    
    let url = `https://api.jikan.moe/v3/anime/${malid}/`
    url = addcorsproxy(url)

    useEffect(() => {
        const result = async () => {
            let ret = await axios(url);
            setResponse(ret);
            console.log("animeRes is fetched")
        }

        if(malid != -1) result();
    }, [malid])

    return response;
}