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
        // if query is actually changed, rendered anime cards are cleared
        debounce(() => {setQuery(q); setRenderedAc([])}, 2 * 1000)
    }

    const [showAnimeDetails, setShowAnimeDetails] = useState(false)
    const onClickShowDetails = () => {
        setShowAnimeDetails(!showAnimeDetails)
    }

    const [readMoreSynopsis, setReadMoreSynopsis] = useState(false)
    const handleReadMore = () => {
        setReadMoreSynopsis(!readMoreSynopsis)
    }

    const [renderedAc, setRenderedAc] = useState<JSX.Element[]>([])

    /**
     * Render anime cards every 1 second
     */
    function renderAc() {
        let liter = 0
        let it = setInterval(() => {
            console.log(baiList[liter])
            console.log(renderedAc)
            let baiEle = baiList[liter]
            let ele = <AnimeImageCard
                key={baiEle.title}
                image={baiEle.image}
                title={baiEle.title}
                malid={baiEle.malid}
                showAnimeDetails={showAnimeDetails}
                onClickShowDetails={onClickShowDetails}
                readMoreSynopsis={readMoreSynopsis}
                handleReadMore={handleReadMore} />
            setRenderedAc(prevRAC => [...prevRAC, ele])
            liter += 1
            if (liter >= baiList.length) {
                clearInterval(it)
            }
        }, 1 * 1000);
    }

    useEffect(() => {
        if(baiList.length != 0){
            renderAc()
        }
    }, [baiList])




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
                        renderedAc :
                        <p>No Image Available</p>
                }
            </div>
        </>
    )

}
