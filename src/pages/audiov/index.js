import React from 'react';
import Menu from "../../components/menu/index";
import "./styles.css";



export default function Audiovisual() {
    return (
        <div>
            <Menu />
            <h1 id="tvideo">
                Revista Recreio<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K-stories

            </h1>
            <div id="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLNm4DnR7Yo1o47OsLeLU_fFlB0nDCe5x9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <h1 id="tvideo">
                &nbsp;&nbsp;&nbsp;Projeto de TCC<br />
                A nova era do beat
            </h1>
            <div id="tdescription">
                <p >Projeto de TCC na Faculdade Cásper Líbero
                    de uma série documental<br/> que aborda as
                    mudanças sofridas pela música brasileira
                    com a era digital.</p>
            </div>

            <div id="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/UTfed-S_0Fg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>


        </div>
    )
}