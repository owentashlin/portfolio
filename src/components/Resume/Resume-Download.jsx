function ResumeDownload() {
  const onButtonClick = () => {
    fetch("Owen_Tashlin_Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob)
        let alink = document.createElement("a")
        alink.href = fileURL
        alink.download = "Owen_Tashlin_Resume.pdf"
        alink.click()
      })
    })
  }

  return (
    <>
      <button className="resume-button" onClick={onButtonClick}>
        Resume
      </button>
    </>
  )
}

export default ResumeDownload;
