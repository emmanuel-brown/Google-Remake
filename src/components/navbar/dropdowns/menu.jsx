import React from 'react'
import Logo from '../../images/GoogleLogo1.png'
import Home from '../../images/HomeSvg.svg'
import SH from '../../images/searchHistorySvg.svg'

const option = (img, txt, isSect) =>(
    <div className={`options-opt${isSect ? " sect" : ""}`}>
        <img className="options-opt-svg" src={img} alt="homesvg"/>
        <h3 className="options-opt-txt">{txt}</h3>
    </div>
)

const Menu = props =>{
    const options = [
        option(Home, "Home"),
        option(SH, "Search Engine"),
        option("https://www.gstatic.com/navigationdrawer/save_icon.svg", "Collections"),
        option("https://www.gstatic.com/navigationdrawer/manage_searches_icon.png", "Offline Searches", true),
        option("https://www.gstatic.com/navigationdrawer/settings_icon.svg", "Settings"),
        option("https://www.gstatic.com/navigationdrawer/privacy_advisor_icon.svg", "Your data in Search"),
        option("https://www.gstatic.com/navigationdrawer/explicit_icon.svg", "Hide Explicit Results: On"),
        option("https://www.gstatic.com/navigationdrawer/how_search_works_icon.svg", "How search works"),
        option("https://www.gstatic.com/navigationdrawer/help_icon.svg", "Help"),
        option("https://www.gstatic.com/navigationdrawer/feedback_icon.svg", "Send Feedback"),
    ]
    return(
        <section id="menu" ref={props.reference} key="Menu">
            <img className="logo" src={Logo} alt="It's the google sign"/>
            <section className="options">
                {options}
            </section>
        </section>
    )
}

export default Menu