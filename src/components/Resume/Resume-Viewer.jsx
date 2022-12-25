import React, {useState} from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import './Resume-Viewer.css'


function ResumeViewer() {
    const [numPages, setNumPages] = useState(null)
	const [pageNumber, setPageNumber] = useState(1)

	const onDocumentLoadSuccess = ({numPages}) => {
		setNumPages(numPages)
	}

	const goToPrevPage = () =>
		setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1)

	const goToNextPage = () =>
		setPageNumber(
			pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
		)

	return (
		<div>
			<div>
				<button onClick={goToPrevPage}>Prev</button>
				|
				<button onClick={goToNextPage}>Next</button>
				<p>
					Page {pageNumber} of {numPages}
				</p>
			</div>
			<Document file="Owen_Tashlin_Resume.pdf" onLoadSuccess ={onDocumentLoadSuccess}>
				<Page pageNumber={pageNumber} />
			</Document>
		</div>
	);
}

export default ResumeViewer;