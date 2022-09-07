import React from 'react'
import instagram from '../../assets/icons/instagram.png'
import linkedin from '../../assets/icons/linkedin.png'
import "./styles.css"


export default function Social() {
    return (
        <div id="social">
       <a href="https://instagram.com/isabelabbarreiros" target="_blank"><img id="instagram" src={instagram}></img></a>
       <a href="https://www.linkedin.com/in/isabelagbarreiros/" target="_blank"><img id="linkedin" src={linkedin}></img></a>
       </div>
    )
}