import {useState, useEffect, useContext} from "react";
import getGifs from "../services/get_gifs";
import GifsContext from "../context/GifsContext"

export function useGifs({keyword} = {keyword: "sonic"}){

    const [loading, setloading] = useState(false)
    const {gifs, setGifs} = useContext(GifsContext)

    const keywordToUse = keyword || localStorage.getItem('lastKeyword')

    useEffect(function(){
      setloading(true)
      getGifs({ keyword: keywordToUse })
        .then(gifs => {
            setGifs(gifs)
            setloading(false)
            localStorage.setItem('lastKeyword', keyword)
        })
    }, [keyword])

    return {loading, gifs}
}