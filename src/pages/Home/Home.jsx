import './Home.css'
function Home() {
    return (
        <div className='home'>
        <h1 className='home-header'>Hi! My name is Owen Tashlin.</h1>
        <h2 className='home-text'> I approach software engineering a lot like any other design process.</h2> 
            
        <p className='home-text'>I start with a need and break it down to see where it goes. My design principles lean toward <strong>simple but effective</strong> solutions, prioritize <strong>ease of use</strong>, and <strong>discoverability</strong> to enhance the user experience.</p>

        <p className='home-text'>Checkout out my Portfolio for some examples of recent projects, or find me on <strong>LinkedIn and GitHub</strong>.</p>

        <img src="https://i.imgur.com/7o0HM6x.jpg" title="source: imgur.com" alt='headshot' className='headshot' />

        </div> 
     )
}



export default Home;