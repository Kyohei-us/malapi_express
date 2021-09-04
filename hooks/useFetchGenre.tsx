import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

export default function useFetchGenre(
  genre_type: string,
  genre_id: number,
  page: number
) {
    let baseURL = `https://malapiexpress.herokuapp.com`
    let url = `${baseURL}/genre/${genre_type}/${genre_id}/${page}`

    const [response, setResponse] = useState<AxiosResponse>()

    useEffect(() => {
        const result = async () => {
            let ret = await axios({url, method: 'get'});
            setResponse(ret);
            console.log(ret);
        }
        result();
    }, [])

    return response;
}
