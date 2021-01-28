import React from 'react'
import Logo from '../../components/images/GoogleLogo1.png'
import SearchBar from '../../components/searchBar/SearchBar'
import './home.scss'

const Home = () =>(
    <main id="home">
        <img className="logo" src={Logo} alt="Logo"/>
        <SearchBar />
        <div className="buttons">
            <button className="bttn">Google Search</button>
            <button className="bttn">I'm feeling lucky</button>
        </div>
    </main>
)

export default Home