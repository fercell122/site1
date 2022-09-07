import React from 'react';
import "./styles.css"
export default function Unit(props) {
    return (
        <div id="unit">
         <a href={props.src} target="_blank"><h2>{props.title}, {props.data}</h2></a>
        </div>
    )
}