import './About.css'

function About() {
    return ( 
        <div className='about'>
            <h1 className='about-header' >Full Stack Software Engineer, Product Designer, Fiber Artist</h1>

            <p>Coming out of a <strong>design and invention </strong>background, I approach front end and full stack software development as an opportunity to find new <strong>solutions</strong>.</p>

            <p>While environments that allow for <strong>collaboration</strong> and free exchange of ideas are my preference (the more eyes on a problem, the better!), I am also comfortable working solo. </p>

            <p>Over a decade working with the public in a variety of fields has given me a good understanding of how a <strong>user experience</strong> can affect not only feelings about a product, but about the impression of a brand as a whole.</p> 

            <p>This combination of <strong>problem solving</strong> mentality and understanding of customer experience has given me a valuable perspective when <strong>training and supervising</strong> others, as well as in my own work.</p>

            <div className='image-list'>
            <p>These are my current preferred languages and frameworks, but I am always looking to learn more!</p>
            <ul className='about-list'>
                <li className='about-item'>JavaScript</li>
                <li className='about-item'>React</li>
                <li className='about-item'>Python</li>
                <li className='about-item'>Django</li>
                <li className='about-item'>Node.js</li>
                <li className='about-item'>Express</li>
                <li className='about-item'>MongoDB</li>
                <li className='about-item'>SQL</li>
            </ul>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div className='about-logo'>
            <a href='https://owentashlin.github.io/GA--project-1-Simon/'><img src='/simon-big.svg' alt='logo' id='rotate-center'/></a>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
     )
}

export default About;