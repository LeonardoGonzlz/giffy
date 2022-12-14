import {useState, useEffect, useContext} from "react";
import getGifs from "../services/getGifs";
import GifsContext from "../context/GifsContext"

const INITIAL_PAGE = 0

export function useGifs({keyword} = {keyword: null}){

    const [loading, setloading] = useState(false)
    const [loadingNextPage, setLoadingNextPage] = useState(false)
    const [page, setPage] = useState(INITIAL_PAGE)
    const {gifs, setGifs} = useContext(GifsContext)

    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

    useEffect(function(){
      setloading(true)
      
      getGifs({ keyword: keywordToUse })
        .then(gifs => {
            setGifs(gifs)
            setloading(false)
            localStorage.setItem('lastKeyword', keyword)
        })
    }, [keyword, keywordToUse, setGifs])

    useEffect(function(){
        if (page === INITIAL_PAGE) return

        setLoadingNextPage(true)

        getGifs({ keyword: keywordToUse, page })
            .then(nextGifs =>{
                setGifs(prevGifs => prevGifs.concat(nextGifs) )
                setLoadingNextPage(false)
            })

    }, [page, keywordToUse, setGifs])

    return {loading, gifs, setPage, loadingNextPage}
}