import React from "react";
import Gifs from "../../components/Gifs";
import useGlobalGifs from "../../hooks/useGlobalGifs";

export default function Detail({ params }) {

    const gifs = useGlobalGifs()

    const gif = gifs.find(singleGif => singleGif.id == params.id)

    return <Gifs {...gif} />
}