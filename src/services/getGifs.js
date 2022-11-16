import { API_KEY, APY_URL } from "./settings"

const fromApiResponseToGifs = apiResponse =>{
    const {data = []} = apiResponse
    if (Array.isArray(data)){
        const gifs = data.map(image =>{
            const { images, title, id } = image
            const { url } = images.downsized_medium
            return { title, id, url }
        })
    return gifs
    }
    return []
}

export default function getGifs({limit=5, keyword="cyberpunk", page=0} = {}){
    const API = `${APY_URL}/gifs/search?${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=g&lang=en`
    
        return fetch(API)
        .then(res => res.json())
        .then(fromApiResponseToGifs)
}
