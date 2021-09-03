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
    
    let baseURL = `https://malapiexpress.herokuapp.com` // https://api.jikan.moe/v3
    let url = `${baseURL}/anime/${malid}`
    // How I fixed CORS issue with this api
    // https://discord.com/channels/460491088004907029/460534914425552896/837217137390518342
    // Proxy is not needed no more
    // url = addcorsproxy(url)

    useEffect(() => {
        const result = async () => {
            let ret = await axios({url: url, method: 'get'});
            setResponse(ret);
            console.log("animeRes is fetched")
        }

        if(malid != -1) result();
    }, [malid])

    return response;
}