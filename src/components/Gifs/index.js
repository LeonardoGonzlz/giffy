import React from "react";
import { Link } from "wouter";

export default function Gifs ({title, url, id}){
    return (
        <Link to={`/gif/${id}`} className="gifs"> 
            <h4>{title}</h4>
            <img alt={title} src={url} />
        </Link>
    )
}