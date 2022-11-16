import React from "react";
import { Link } from "wouter";
import "./gifs.css"

function Gifs ({title, url, id}){
    return (
        <Link to={`/gif/${id}`} className="gifs"> 
            <h3>{title}</h3>
            <img alt={title} src={url} />
        </Link>
    )
}

export default React.memo(Gifs, (prevProps, nextProps) => {
    return prevProps.id == nextProps.id
})