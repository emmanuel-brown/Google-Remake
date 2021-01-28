import React from 'react'
import GA from '../../images/google-assistant.svg'
import Search from '../../images/google-icon.svg'
import Maps from '../../images/g-maps.svg'
import Youtube from '../../images/youtube-icon.svg'
import Play from '../../images/google-play.svg'
import News from '../../images/google-news.svg'
import Gmail from '../../images/gmail.svg'
import Meet from '../../images/meet.svg'
import Contacts from '../../images/contacts.svg'
import Drive from '../../images/google-drive.svg'
import Calendar from '../../images/google-calendar.svg'
import Translate from '../../images/google-translate.svg'
import Photos from '../../images/google-photos.svg'
import Duo from '../../images/google-duo.svg'
import Shopping from '../../images/google-shopping.svg'

const option = (txt, icon) => {

    return (
        <div className="option" key={txt}>
            {typeof icon === "string" ? <img src={icon} alt="icon"/> : icon}
            <p>{txt}</p>
        </div>
    )
}

const sep = () => (
    <span className="seperate"></span>
)

const Apps = props => {
    const opts = [
        option("Assistant", GA),
        option("Search", Search),
        option("Maps", Maps),
        option("Youtube", Youtube),
        option("Play", Play),
        option("News", News),
        option("Gmail", Gmail),
        option("Meet", Meet),
        option("Contacts", Contacts),
        option("Drive", Drive),
        option("Calendar", Calendar),
        option("Translate", Translate),
        option("Photos", Photos),
        option("Duo", Duo),
        option("Shopping", Shopping),
        sep()
    ]
    return(
        <section id="apps" ref={props.reference} key="apps">
            {opts}
        </section>
    )
}

export default Apps