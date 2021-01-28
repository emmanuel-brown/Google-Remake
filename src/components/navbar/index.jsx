import React, { useState } from 'react'
import Menu from './dropdowns/menu'
import Apps from './dropdowns/apps'
import CloseClickOutside from '../closeClickOutside'
import VSize from '../vSize'
import "./navbar.scss"

const Navbar = () =>{
    const [ dropDown, setDropDown ] = useState("")

    const handleOutClick = () => setDropDown("")

    const { domNode } = CloseClickOutside(handleOutClick)

    const { vpWidth } = VSize()

    const dropdowns = {
        menu: <Menu reference={domNode} key="Menu" />,
        apps: <Apps reference={domNode} key="apps"/>
    }
    const mobile = () =>(
        <>
            <nav id="navbarS">
                <div className="left">
                    <div className="left-menu" onClick={() => setDropDown("menu")}>
                        <span className="left-menu-line"></span>
                        <span className="left-menu-line"></span>
                        <span className="left-menu-line"></span>
                    </div>
                    <h2 className="left-link left-active">ALL</h2>
                    <h2 className="left-link">IMAGES</h2>
                </div>
                <div className="right">
                    <div className="right-apps" onClick={() => setDropDown("apps")}>
                        <span className="right-apps-dots"></span>
                        <span className="right-apps-dots"></span>
                        <span className="right-apps-dots"></span>
                        <span className="right-apps-dots"></span>
                        <span className="right-apps-dots"></span>
                        <span className="right-apps-dots"></span>
                        <span className="right-apps-dots"></span>
                        <span className="right-apps-dots"></span>
                        <span className="right-apps-dots"></span>
                    </div>
                    <div className="right-account">W</div>
                </div> 
            </nav>
        </>
    )
    const desktop = () =>(
        <>
            <nav id="navbar">
                <div className="left">
                    <h2 className="left-txt">About</h2>
                    <h2 className="left-txt">Store</h2>
                </div>
                <div className="right">
                    <h2 className="right-txt">Gmail</h2>
                    <h2 className="right-txt">Images</h2>
                    <div className="right-apps" onClick={() => setDropDown("apps")}>
                        <span className="right-apps-dots"></span>
                        <span className="right-apps-dots"></span>
                        <span className="right-apps-dots"></span>
                        <span className="right-apps-dots"></span>
                        <span className="right-apps-dots"></span>
                        <span className="right-apps-dots"></span>
                        <span className="right-apps-dots"></span>
                        <span className="right-apps-dots"></span>
                        <span className="right-apps-dots"></span>
                    </div>
                    <div className="right-account">W</div>
                </div>     
            </nav>
        </>
    )
    return(
        <>
           {vpWidth >= 1000 ? desktop() : mobile()}
           <div id="dropdowns" style={{display: `${dropDown ? "block" : "none"}`}}>
                {dropdowns[dropDown]}
            </div>
        </>
    )
}

export default Navbar