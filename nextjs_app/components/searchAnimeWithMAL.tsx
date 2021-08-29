// Import dependencies
import React, { useState } from 'react'
import useFetchAnimeInfo from '../hooks/useFetchAnimeInfo';
import useSearchAnime from '../hooks/useSearchAnime';

export default function SearchAnimeWithMAL() {
    const [query, setQuery] = useState("");

    const { image, title, malid } = useSearchAnime(query);
    const animeRes = useFetchAnimeInfo(malid);

    let timeout: any;
    var debounce = function (func: Function, delay: number) {
        clearTimeout(timeout);
        timeout = setTimeout(func, delay);
    };

    function onChange(q: string) {
        debounce(() => setQuery(q), 2 * 1000)
    }

    return (
        <>
            <input
                placeholder="type anime name"
                onChange={(e) => onChange(e.target.value)}
            ></input>
            <div>
                <h2>{query}</h2>
                <h2>{malid}</h2>
                <h2>{title}</h2>
                <h3>
                    {
                        animeRes ?
                            animeRes.data.title_japanese :
                            "Japanese title comes here"
                    }
                </h3>
                {
                    image ?
                        <img src={image}></img> :
                        <p>No Image Available</p>
                }
            </div>
        </>
    )

}
