import React,{ useEffect, useState, useRef } from "react";
import  getTrendingTermns  from "services/getTrendingTermsService"
import Category from "components/Categorias";

export default function TrendingSearches (){
    const [trends, setTrends] = useState([])

    useEffect(function (){
        getTrendingTermns().then(setTrends)
    }, [])

    return <Category name="Mas buscados" options={trends} />
}