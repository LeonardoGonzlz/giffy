import React, { useState } from "react";


function SearchForm({ onSubmit}){
    const [keyword, setkeyword] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        onSubmit({keyword})
    }

    const handleChange = (e)=>{
        setkeyword(e.target.value)  
    }


    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" value={keyword} placeholder="Buscar"/>
            <button>Buscar</button>
        </form>
    )
}

export default React.memo(SearchForm)