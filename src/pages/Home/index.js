import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import ListGifs from "../../components/ListGifs";
import { useGifs } from "../../hooks/useGifs";

const POPULAR_GIFS = ["Matrix", "Venezuela", "Chile", "Colombia", "Ecuador"]

export default function Home (){
    const [keyword, setkeyword] = useState("")
    const [path, pushLocation] = useLocation()

    const {loading, gifs} = useGifs()

    const submitSearch = (e)=>{
        e.preventDefault()
        pushLocation(`/search/${keyword}`)
    }

    const valueSearch = (e)=>{
        setkeyword(e.target.value)  
    }

    return (
        <div>
            <form onSubmit={submitSearch}>
                <input onChange={valueSearch} type="text" />
            </form>
            <h3>Ultima busqueda</h3>
            <ListGifs gifs={gifs} />
            <h3>Los gifs mas populares</h3>
            <ul>
            {POPULAR_GIFS.map((popularGif)=>(
                <li key={popularGif}>
                    <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
                </li>
            ))}
            </ul>
        </div>
    )
}