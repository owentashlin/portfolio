import ResumeViewer from "../../components/Resume/Resume-Viewer";
import "./Contact.css";

function Contact() {
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
        Links to my email and LinkedIn are below, as well as GitHub and you can download a copy of my resume with the button below.
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
