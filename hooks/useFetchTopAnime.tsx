import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from "react"
import { jikanTopToParams } from "../utils/jikanTop"
import { jikanTop } from "../common/types";

export default function useFetchTopAnime(jikanTop: jikanTop){
    let jikanTopParams = jikanTopToParams(jikanTop)
    let baseURL = `https://malapiexpress.herokuapp.com` // https://api.jikan.moe/v3
    let url = `${baseURL}/top/${jikanTopParams}`

    const [response, setResponse] = useState<AxiosResponse>()

    useEffect(() => {
        const result = async () => {
            let ret = await axios({url: url, method: 'get'});
            setResponse(ret);
            console.log("top is fetched")
            console.log(ret)
        }

        result();
    }, [])

    return response;
}
