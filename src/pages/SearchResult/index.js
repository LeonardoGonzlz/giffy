import ListGifs from "../../components/ListGifs"
import Spinner from "../../components/Spinner"
import React from "react"
import { useGifs } from "../../hooks/useGifs"

export default function SearchResult ({ params }){

    const {loading, gifs} = useGifs(params)

    return <div>
        {loading
            ? <Spinner />
            : <ListGifs gifs={gifs} />
        }
    </div>
}