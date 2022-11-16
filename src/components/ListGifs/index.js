import React from "react"
import Gifs from "../Gifs"
import "./styles.css"

export default function ListGifs({ gifs }){


   return <div className="ListGifs">
    {
      gifs.map(({id, title, url, ...restOfGifs}) =>
        <Gifs
          id={id}
          key={id}
          title={title}
          url={url}
          {...restOfGifs}
        />
      )
    }
   </div>
}