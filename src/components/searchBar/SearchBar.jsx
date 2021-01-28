import React, {useState} from 'react'
import Search from '../images/search.svg'
import Microphone from '../images/microphone.svg'
import Right from '../images/right.svg'
import VSize from '../vSize'

const SearchBar = () =>{
    const [text, setText] = useState("")
    const [searching, setSearching] = useState(false)

    const { vpWidth } = VSize()

    return(
        <div className={searching ? "searchBarActive" : "searchBar"}>
            <img 
                className="icon" 
                src={searching ? Right : Search} 
                alt="seach_icon" 
                style={{transform: `rotate(${searching ? "180" : "0"}deg)`}}
                onClick={() => searching && setSearching(false)}
            />
            <input 
                type="text" 
                className="input" 
                onClick={() => {vpWidth < 1000 && setSearching(true)}}
                value={text} 
                onChange={e => setText(e.target.value)} 
                name="search" 
                id="search"
            />
            <img className="icon" src={Microphone} alt=""/>
        </div>
    )
}

export default SearchBar