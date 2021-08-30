import React, {useState, useEffect} from "react"
import axios, { AxiosResponse } from "axios"

/**
 * Fetch detailed anime info
 * 
 * @param malid 
 * @returns 
 */
export default function useFetchAnimeInfo(malid: number): AxiosResponse | undefined{
    const [response, setResponse] = useState<AxiosResponse>()
    
    let url = `https://api.jikan.moe/v3/anime/${malid}/`

    useEffect(() => {
        const result = async () => {
            let ret = await axios(url);
            setResponse(ret);
        }

        if(malid != -1) result();
    }, [malid])

    return response;
}