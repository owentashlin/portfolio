import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio">
      <h1>Follow the links below to preview some of my previous work:</h1>
      <div className="project-link">
        <a href="/portfolio">
          <img
            className="project-link-image"
            src="https://i.imgur.com/WGtOhuB.png"
            alt="project link"
          />
        </a>
        <div className="project-description">
          <p>
            <strong>Books & Tea:</strong> an app where users can make a library
            of their favorite books and the teas they like to drink with them.
            <hr></hr>
            <em>Technologies Used: Python, Django, HTML5, CSS, JavaScript</em>
            <br></br>
            <a
              id="git-link"
              href="https://github.com/owentashlin/book_collector"
            >
              <u>GitHub Repo</u>
            </a>
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
            <strong>The Reading Room</strong> The Reading Room is an app
            designed to allow users to share what they are reading and writing
            with other users, all in the same single page application.
            <hr></hr>
            <em>
              Technologies Used: React, JavaScript, Express, MongoDB/Mongoose,
              HTML, CSS, Token-based Auth
            </em>
            <a id="git-link" href="https://github.com/owentashlin/project3">
              <u>GitHub Repo</u>
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
            <strong>CraftSpace</strong> CraftSpace is an app that allows
            users to store and refer back to craft projects they have either
            worked on or already finished. They can link to outside sources for
            patterns, keep a log of supplies, and mark the status of different
            projects.
            <hr></hr>
            <em>
              Technologies Used: JavaScript, MongoDB/Mongoose, Express/EJS,
              HTML, CSS, Google OAuth{" "}
            </em>
            <a id="git-link" href="https://github.com/owentashlin/project2">
              <u>GitHub Repo</u>
            </a>
          </p>
        </div>
      </div>

      <div className="project-link">
        <a href="/portfolio">
          <img
            className="project-link-image"
            src="https://i.imgur.com/yOoPBoG.png"
            alt="project link"
          />
        </a>
        <div className="project-description">
          <p>
            <strong>Project 4:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam magnam quasi tempora. Quaerat iure molestiae sint iusto illo unde quis earum eos deserunt libero, optio minima amet in ad ea.
            <hr></hr>
            <em>
              Technologies Used: 
            </em>
            <a id="git-link" href="/">
              <u>GitHub Repo</u>
            </a>
          </p>
        </div>
      </div>
        <div className="hidden">this is a hidden paragraph to try to fix the weird margin issue with my footer..</div>
    </div>
  )
}

export default Portfolio;

