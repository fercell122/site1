import React, { useState } from 'react';
import Menu from "../../components/menu/index";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import pdf from "./revista.pdf";
//import "./styles.css";




export default function Mídia() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    return (
        <div>
            <Menu />
            <div style={{
                display:'flex',
                marginLeft:'100px',
                marginRight:'50px'
            }}>
                <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} />
                </Document>
            </div>

        </div>
    )
}