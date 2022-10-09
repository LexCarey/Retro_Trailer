import React from 'react'

const Fade = (props) => {
    const {color1, color2} = props
    return (
        <div style={{width: "100%", height: "10vh", backgroundImage: `linear-gradient(${color1}, ${color2})`}}>
        </div>
    )
}

export default Fade