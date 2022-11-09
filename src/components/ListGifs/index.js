import React from "react"
import Gifs from "../Gifs"

export default function ListGifs({ gifs }){


   return <div>
    {
      gifs.map(({id,title,url}) =>
        <Gifs
          id={id}
          key={id}
          title={title}
          url={url}
        />
      )
    }
   </div>
}