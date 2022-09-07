import React from 'react'
import "./styles.css";
import { Link } from 'react-router-dom';


export default function Landing() {
    return (
        <div>

            <div className="box">
                <h1 className="title">ISABELA BARREIROS</h1>

            </div>
            <div className="box">
                <h1 className="subtitle">Jornalista
                   
                </h1>

            </div>
            <div id="menu_section">
                <div className="box">
                    <Link to="/reportagens">
                        <h1 className="directions">reportagens</h1>
                    </Link>
                </div>
                <div className="box">
                    <Link to="/hardnews">
                        <h1 className="directions">hard news</h1>
                    </Link>
                </div>
                <div className="box">
                    <Link to="/audiovisual">
                        <h1 className="directions">audiovisual</h1>
                    </Link>
                </div>
                <div className="box">
                    <Link to="/webstories">
                        <h1 className="directions">web stories</h1>
                    </Link>
                </div>
                <div className="box">
                    <Link to="/sobre">
                        <h1 className="directions">sobre</h1>
                    </Link>
                </div>
                <div className="box">
                    <Link to="/contato">
                        <h1 className="directions">contato</h1>
                    </Link>
                </div>
            </div>

        </div>

    )
}