import { API_KEY, APY_URL } from "./settings"


const fromApiResponseToGifs = apiResponse =>{
    const {data = []} = apiResponse
    return data
}
export default function getTrendingTermn(){
    const API = `${APY_URL}/trending/searches?${API_KEY}&rating=g&lang=en`
    
        return fetch(API)
        .then(res => res.json())
        .then(fromApiResponseToGifs)
}