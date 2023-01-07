import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio">
      <h1>Follow the links below to preview some of my previous work:</h1>
      <div className="project-link">
        <a href="https://peaceful-springs-61150.herokuapp.com/">
          <img
            className="project-link-image"
            src="https://i.imgur.com/WGtOhuB.png"
            alt="project link"
          />
        </a>
        <div className="project-description">
          <p>
            <strong>Books & Tea:</strong> Books & Tea is an app where users can make a collections of their
            favorite books, as well as the teas they like to drink with them.
            <hr></hr>
            <em>Technologies Used: Python, Django, HTML5, CSS, JavaScript, Materialize CSS Framework</em>
            <br></br>
            <a
              id="git-link"
              href="https://github.com/owentashlin/book_collector"
            >
              <u>GitHub Repo</u>
            </a>
            <div>
            <p><strong>demo login:</strong>
            <br></br>
            username: owen@tashlin.com
            <br></br>
            password: Th!s1safakepassword</p>
            </div>
          </p>
        </div>
      </div>

      <div className="project-link">
        <a href="https://fathomless-tundra-68839.herokuapp.com/">
          <img
            className="project-link-image"
            src="https://i.imgur.com/IWrzMeF.png"
            alt="project link"
          />
        </a>
        <div className="project-description">
          <p>
            <strong>The Reading Room:</strong> The Reading Room is an app
            designed to allow users to share what they are reading and writing
            with other users, all in the same single page application.
            <hr></hr>
            <em>
              Technologies Used: React, JavaScript, Express, MongoDB/Mongoose,
              HTML, CSS, Token-based Authentication
            </em>
            <br></br>
            <a id="git-link" href="https://github.com/owentashlin/project3">
              <u>GitHub Repo</u>
            </a>
            <div>
            <p><strong>demo login:</strong>
            <br></br>
            username: owen@owen.com
            <br></br>
            password: owen</p>
            </div>
          </p>
        </div>
      </div>

      <div className="project-link">
        <a href="https://tranquil-badlands-75485.herokuapp.com/">
          <img
            className="project-link-image"
            src="https://i.imgur.com/Yua10Ze.jpg"
            alt="project link"
          />
        </a>
        <div className="project-description">
          <p>
            <strong>CraftSpace:</strong> CraftSpace is an app that allows
            users to store and refer back to craft projects they have either
            worked on or already finished. They can link to outside sources for
            patterns, keep a log of supplies, and mark the status of different
            projects.
            <hr></hr>
            <em>
              Technologies Used: JavaScript, MongoDB/Mongoose, Express/EJS,
              HTML, CSS, Google OAuth
            </em>
            <br></br>
            <a id="git-link" href="https://github.com/owentashlin/project2">
              <u>GitHub Repo</u>
            </a>
            <div>
            <p><strong>demo login:</strong>
            <br></br>
            username: your google id
            <br></br>
            password: your google password</p>
            </div>
          </p>
        </div>
      </div>

      <div className="project-link">
        <a href="https://obscure-hollows-38715.herokuapp.com/">
          <img
            className="project-link-image"
            src="https://i.imgur.com/fNXzQnh.png"
            alt="project link"
          />
        </a>
        <div className="project-description">
          <p>
            <strong>LinkCable:</strong> LinkCable is a group project utilizing Django and Python. It is a dating app where users can sign up, list their interests and favorite games or systems and connect with others who share similar interests.
            <hr></hr>
            <em>
              Technologies Used: Django, Python, Materialize CSS Framework, PostgresQL, HTML, CSS, JavaScript
            </em>
            <br></br>
            <a id="git-link" href="https://github.com/Team-weird-gif-of-my-face/Link-Cable">
              <u>GitHub Repo</u>
            </a>
            <div>
            <p><strong>demo login:</strong>
            <br></br>
            username: owen@owen.com
            <br></br>
            password: Th!s1safakepassword</p>
            </div>
          </p>
        </div>
      </div>
        <br></br>
        <br></br>
        <br></br>
    </div>
  )
}

export default Portfolio;

