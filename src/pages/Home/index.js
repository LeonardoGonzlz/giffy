import React, { useCallback } from "react";
import ListGifs from "components/ListGifs";
import { useGifs } from "hooks/useGifs";
import Category from "components/Categorias";
import { Link, useLocation } from "wouter";
import TrendingSearches from "components/TrendingSearches/TrendingSearches"; 
import SearchForm from "components/SearchForm";

export default function Home (){
    const [path, pushLocation] = useLocation()
    const {loading, gifs} = useGifs()

    const handleSubmit = useCallback(({keyword}) => {
        // Navegar a otra ruta
        pushLocation(`/search/${keyword}`)
    }, [pushLocation])

    return (
        <div>
            <SearchForm onSubmit={handleSubmit} />
            <div className="app-main">
                <div className="App-results">
                    <h3 className="App-title">Última búsqueda</h3>
                    <ListGifs gifs={gifs} />
                </div>
            </div>
            <div className="App-category">
                <TrendingSearches />
            </div>
        </div>
    )
}