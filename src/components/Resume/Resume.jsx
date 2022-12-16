import React, {useState} from 'react'
import { Document, Page } from 'react-pdf';

function ResumeViewer() {
    const [numPages, setNumPages] = useState(null)
    const [pageNumber, setPageNumber] = useState(1)
    
    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages)
    }

    return ( 
        <div>
            <Document file="Owen_Tashlin_Resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
        </div>
     );
}

export default ResumeViewer;