import React, { useCallback, useEffect, useRef } from "react"
import ListGifs from "../../components/ListGifs"
import Spinner from "../../components/Spinner"
import debounce from "just-debounce-it"

import { useGifs } from "../../hooks/useGifs"
import useNearScreen from "../../hooks/useNearScreen"

export default function SearchResult ({ params }){

    const { keyword } = params
    const { loading, gifs, setPage } = useGifs({ keyword })
    const externalRef = useRef()
    const { isNearScreen } = useNearScreen({ 
        externalRef: loading ? null : externalRef, 
        once: false
    })

    //const handleNextPage = () => setPage(prevPage => prevPage + 1)
    //const handleNextPage = () => console.log("next page")

    const debuonceHandleNextPage = useCallback( debounce(
        () => setPage(prevPage => prevPage + 1), 200
    ), [setPage])

    useEffect(function(){
        console.log(isNearScreen)
        if(isNearScreen) debuonceHandleNextPage()
    }, [debuonceHandleNextPage, isNearScreen])

    return <>
        {loading
            ? <Spinner />
            : <>
                <h3 className="App-title">
                    Gifs de {decodeURI(keyword)}
                </h3>
                <ListGifs gifs={gifs} />
                <div id="visor" ref={externalRef}></div>
            </>
        }
    </>

}