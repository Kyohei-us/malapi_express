// Import dependencies
import React, { useState, useEffect } from 'react'
import useSearchAnime from '../hooks/useSearchAnime';
import { InputAdornment, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'
import AnimeImageCard from './animeImageCard';

export default function SearchAnimeWithMAL(props: { numberForResults: number; }) {
    const { numberForResults } = props
    const [query, setQuery] = useState("");

    const baiList = useSearchAnime(query, numberForResults);

    let timeout: any;
    var debounce = function (func: Function, delay: number) {
        clearTimeout(timeout);
        timeout = setTimeout(func, delay);
    };

    function queryOnChange(q: string) {
        debounce(() => setQuery(q), 2 * 1000)
    }

    const animeCards = baiList.map(baiEle => 
        <AnimeImageCard
                key={baiEle.title}
                image={baiEle.image}
                title={baiEle.title}
                malid={baiEle.malid} />
        )



    return (
        <>
            <TextField type="search" placeholder="type anime name" onChange={(e) => queryOnChange(e.target.value)} InputProps={{
                startAdornment: (
                    < InputAdornment position="start" >
                        <SearchIcon />
                    </InputAdornment>
                )
            }}
            />
            <div
                style={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',
                    padding: '50px',
                    backgroundColor: '#116466'
                }}>
                {
                    baiList ?
                        animeCards :
                        <p>No Image Available</p>
                }
            </div>
        </>
    )

}
