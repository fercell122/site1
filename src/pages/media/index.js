import React, { useState } from 'react';
import Menu from "../../components/menu/index";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import pdf from "./revista.pdf";
import pdf2 from "./revista2.pdf";
import Boxtipo from "../../components/box/index";
import "../../components/loader/style.css"
//import "./styles.css";




export default function Mídia() {
    const [numPages, setNumPages] = useState(null);
   

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const loader = 
        <body>
                <main class="loading-container">
                    <p class="spinner-text">
                        loading...
                    </p>
                    <div class="spinner"></div>
                </main>
            </body>;
    

    return (
        <div>
            <Menu />
            <Boxtipo titulo="Aventuras na História" />
            <div style={{
                display: 'flex',
                marginLeft: '100px',
                marginRight: '50px'
            }}>
                <Document file={pdf} loading={loader} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber= {1} />
                </Document>

            </div>
            <div style={{
                marginTop:'10px',
                display: 'flex',
                marginLeft: '100px',
                marginRight: '50px'
            }}>
                <Document file={pdf2} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={16} />
                </Document>
                <Document file={pdf2} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={17} />
                </Document>
            </div>

        </div>
    )
}