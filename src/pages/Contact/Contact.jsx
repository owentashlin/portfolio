import ResumeViewer from "../../components/Resume/Resume-Viewer";
import "./Contact.css";

function Contact() {
  function Mailto({ email, subject, body, ...props }) {
    return (
      <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
        {props.children}
      </a>
    );
  }

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
      <h1>Get In Touch:</h1>
      <p>
        I am currently located in the <strong>Portland, Oregon</strong> area and open to working either in person or remote in other regions. If you like what you see, I would love to hear from you!
      </p>
      <p> 
      Links to my email, LinkedIn, and GitHub are below:
        <br></br>
        <Mailto email="owentashlin@gmail.com" subject="Hello" body="Hello world!">
        <div className="portfolio-link">owentashlin@gmail.com</div></Mailto>
        <br></br>
        <a className="portfolio-link" href='https://www.linkedin.com/in/owen-tashlin/'>LinkedIn</a> 
        <br></br>
        <a className="portfolio-link" href="https://github.com/owentashlin">GitHub</a>
      </p>
      <p>
        You can download a copy of my resume with the button below and preview a copy in the desktop version of this portfolio:
      </p>
      <button className="resume-button" onClick={onButtonClick}>
        Resume
      </button>
      <hr></hr>
      <div className="resume-viewer">
        <ResumeViewer />
      </div>
    </>
  );
}

export default Contact;
