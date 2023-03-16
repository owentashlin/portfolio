import "./Home.css"

function Home() {
let linkedinUrl = 'https://www.linkedin.com/in/owen-tashlin/'
let gitHubUrl = 'https://github.com/owentashlin'

    return (
        <div className='home'>
        <h1 className='home-header'>Owen Tashlin</h1>
        <h2 className='home-text'>Full Stack Software Engineer</h2> 
        <p className='home-text'>My approach to <strong>Software Development</strong> is simple.</p>    
        <p className='home-text'>I start with a need and break it down to see where it goes. My design principles lean toward <strong>simple but effective</strong> solutions, prioritize <strong>ease of use</strong>, and <strong>discoverability</strong> to enhance the user experience.</p>

        <p className='home-text'>Checkout out my Portfolio for some examples of recent projects, or find me on  <a className='home-link' href={linkedinUrl}>LinkedIn</a> and <a className='home-link' href={gitHubUrl}>GitHub</a>.</p>
        </div> 
     )
}



export default Home;