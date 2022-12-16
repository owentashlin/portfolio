import ResumeViewer from "../../components/Resume/Resume"

function Contact() {
    const onButtonClick = () => {
        fetch('Owen_Tashlin_Resume.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob)
                let alink = document.createElement('a')
                alink.href = fileURL
                alink.download = 'Owen_Tashlin_Resume.pdf'
                alink.click()
            })
        })
    }
    
    return ( 
        <>
        <h1>call me</h1>
        <p></p>
        <a href='https://github.com/owentashlin'><img src='/'/>broken image link - gihub</a>
        <a href='https://www.linkedin.com/in/owen-tashlin/'><img src='/'/>broken image link - linkdIn</a>
        <ResumeViewer/>
        <button onClick={onButtonClick}>Download Resume</button>
        </>
     );
}

export default Contact;