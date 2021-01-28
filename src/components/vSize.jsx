import { useState } from 'react'

const VpWidth = () =>{
    const [ vpWidth, setVpWidth ] = useState(window.innerWidth)
    const [ vpHeight, setVpHeight ] = useState(window.innerHeight)

    const check = () => {
        setVpWidth(window.innerWidth)
        setVpHeight(window.scrollY)
    }

    setInterval(check, 1000);

    return { vpWidth, vpHeight }
}

export default VpWidth