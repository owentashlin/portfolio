import image from './../../assets/workshop.png'
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio">
      <h1>Follow the links below to view some of my previous work:</h1>
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
            <strong>The Reading Room:</strong> The Reading Room is a MERN stack application designed to allow users to share what they are reading and writing with other users, all in the same single page application. Readers can keep up to date on the latest recommendations from the NYT Fiction Bestsellers list, as well as get both text and visual writing prompts to inspire their own creative process.
            <hr></hr>
            <em>
              Technologies Used: React, JavaScript, Express, MongoDB/Mongoose, HTML, CSS, Token-based Authentication
            </em>
            <br></br>
            <a id="git-link" href="https://github.com/owentashlin/project3">
              <u>GitHub Repo</u>
            </a>
            <a id="git-link" href="https://fathomless-tundra-68839.herokuapp.com/">Live Link</a>
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
      <a href="https://owensworkshop.netlify.app/">
          <img
            className="project-link-image"
            src={image}
            alt="project link"
          />
        </a>
        <div className="project-description">
          <p>
              <strong>Owen's Workshop:</strong> This application started as practice in Python logic and grew into a place to write and play simple text based and retro arcade style in-browser games. Currently, it has a text based adventure game called "The Mysterious Island" coded and authored by myself. It also has a link to my very first JavaScript based application, an in-browser version of the 1980's classic game, Simon. In addition to the React version, a link to the Replit for the original Python version is included below.
              <hr></hr>
              <em>
                Technologies Used: React, JavaScript, Python, HTML, CSS, Node.js
              </em>
              <br></br>
            <a id="git-link" href="https://github.com/owentashlin/games/tree/main/src">
              <u>GitHub Repo</u>
            </a>
            <a id="git-link" href="https://owensworkshop.netlify.app/">
              <u>Live Link</u>
            </a>
            <a id="git-link" href="https://replit.com/@OwenTashlin/The-Mysterious-Island?v=1">
              <u>Replit Link</u>
            </a>
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
            <strong>CraftSpace:</strong> CraftSpace is an app that allows users to store and refer back to craft projects they have either worked on or already finished. They can link to outside sources for patterns, keep a log of supplies, and mark the status of different projects.
            <hr></hr>
            <em>
              Technologies Used: JavaScript, MongoDB/Mongoose, Express/EJS,
              HTML, CSS, Google OAuth
            </em>
            <br></br>
            <a id="git-link" href="https://github.com/owentashlin/project2">
              <u>GitHub Repo</u>
            </a>
            <a id="git-link" href="https://tranquil-badlands-75485.herokuapp.com/">Live Link</a>
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
      <br></br>
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
            <strong>Books & Tea:</strong> Books & Tea is an app where users can make a collections of their favorite books, as well as the teas they like to drink with them. The application is a rework of a previous application, The Reading Room, adapting it to Django and Python and SQL. 
            <hr></hr>
            <em>Technologies Used: Python, Django, HTML5, CSS, JavaScript, Materialize CSS Framework</em>
            <br></br>
            <a
              id="git-link"
              href="https://github.com/owentashlin/book_collector"
            >
              <u>GitHub Repo</u>
            </a>
            <a id="git-link" href="https://peaceful-springs-61150.herokuapp.com/">Live Link</a>
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
      <br></br>
      <br></br>
      <hr></hr>
      <h2>Other Projects:</h2>
      <div className="project-link">
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
            <a id="git-link" href="https://obscure-hollows-38715.herokuapp.com/">Live Link</a>
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
      <div className="project-link">
        <div className="project-description">
          <p>
              <strong>Food Forest:</strong> Food Forest is a group project completed during the General Assembly Collabathon UX/UI and SEI program collaboration Hackathon in February 2023. It was deemed the winning project for most complete and ready to launch at the end of the two day contest. It is a social networking app that allows urban farmers and users to connect and trade or sell locally grown foods and products. It is aimed at addressing food deserts and increasing the reach of local business and sole proprietors.
              <hr></hr>
              <em>
                Technologies Used: JavaScript, React, BootStrap CSS Framework, HTML, CSS, MongoDB
              </em>
              <br></br>
            <a id="git-link" href="https://github.com/owentashlin/foodForest-1">
              <u>GitHub Repo</u>
            </a>
            <a id="git-link" href="https://www.figma.com/proto/PfUw74KyRH95MsMtiMh6Vq/Collabathon?page-id=33%3A923&node-id=33%3A924&viewport=485%2C1076%2C0.93&scaling=scale-down&starting-point-node-id=33%3A924">
              <u>Figma Demo</u>
            </a>
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

