import { API_KEY, APY_URL } from "./settings"


const fromApiResponseToGifs = apiResponse =>{
    const {data = []} = apiResponse
    return []
}


export default function getTrendingTermns({keyword="cyberpunk"} = {}){
    const API = `${APY_URL}/trending/searches?${API_KEY}&q=${keyword}&limit=5&offset=0&rating=g&lang=en`
    
        return fetch(API)
        .then(res => res.json())
        .then(fromApiResponseToGifs)
}