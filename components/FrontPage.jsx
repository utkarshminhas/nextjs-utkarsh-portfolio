<script>
  import logo from './assets/svelte.png'
  import profile_pic_1 from './assets/profile_pic.jpg'
  import profile_pic_2 from './assets/profile_pic_2.jpg'

  import { Router, Route, Link } from "svelte-navigator";

  import Education from './lib/Education.svelte';
  import Experience from './lib/Experience.svelte';
  import Certifications from './lib/Certifications.svelte';
  let text_accent_color = 'text-blue-400'
  let original_resume_link = 'https://drive.google.com/file/d/1dm-7iDC_VRb7grx7RMHNVCM3bzrJcQlW/view?usp=sharing'
  let resume_download_link = 'https://drive.google.com/uc?export=download&id=1dm-7iDC_VRb7grx7RMHNVCM3bzrJcQlW'
  let link_style = 'text-sky-400 underline font-semibold hover:text-orange-400'
  // var year1 = new Date().getFullYear();
  // var year2 = 2021;

  var date1 = new Date(2021,6,1);
  var date2 = new Date();
  var year1=date1.getFullYear();
  var year2=date2.getFullYear();
  var month1=date1.getMonth();
  var month2=date2.getMonth();
  var numberOfMonths = (year2 - year1) * 12 + (month2 - month1) + 1;
  var numberOfYears = Math.round(numberOfMonths/12)

  // var job_exp = year1-year2;
</script>
<Router>


  
<!-- <div class = 'text-6xl py-8 text-center'>Utkarsh Minhas</div> -->
<nav class = 'sticky top-0 flex flex-row justify-center space-x-10 text-lg py-4 bg-neutral-700 '>
  <div class = 'font-semibold hover:text-orange-400 text-white'>Utkarsh Minhas</div>
  <Link to="/" class = '{link_style}' id="/">Home</Link>
  <a href="#experience" class ='{link_style}'>Experience</a>
  <a href="#education" class ='{link_style}'>Education</a>
  <a href='https://github.com/utkarshminhas' class = '{link_style}' target="_blank" rel="noopener noreferrer">Projects</a>
  <Link to="certifications" class = '{link_style}'>Certifications</Link>
  <Link to="research" class = '{link_style}'>Research Experience</Link>
  <!-- <a href='#' class = 'text-sky-600 underline font-semibold hover:text-orange-400'>Experience</a>
  <a href='#' class = 'text-sky-600 underline font-semibold hover:text-orange-400'>Education</a>
  <a href='https://github.com/utkarshminhas' class = 'text-sky-600 underline font-semibold hover:text-orange-400'>Projects</a>
  <a href='https://github.com/utkarshminhas' class = 'text-sky-600 underline font-semibold hover:text-orange-400'>Certifications</a>
  <a href='https://github.com/utkarshminhas' class = 'text-sky-600 underline font-semibold hover:text-orange-400'>Research Experience</a> -->
</nav>



<main class = ''>
  <Route path="/">
  <div class = 'flex flex-row items-center justify-center space-x-12 space-y-6 text-lg py-12 px-8'>
    <div>
      <p class = 'text-justify'>Hi! My name is Utkarsh Minhas. I am a Computer Science & Engineering graduate from SRMIST,Chennai(Batch of 2021). I have {numberOfYears} years of job experience. Currently I am working WFH at Valuelabs as a Technical consultant in the AI/ML Cognitive Ops practice group where we leverage the power of AI to build solutions. Previously, I have also worked at GAIUS Networks INC, a New York University startup as a mobile aplication developer intern (via flutter) for one year.</p>
      <p class = 'text-justify'>I like to work in AI/ML/Deep Learning and data science. Automating and optimizing time consuming processes into just a few seconds via python is a close second when it comes to the things I enjoy via programming. I also have experience in app development frameworks such as Flutter to develop cross platform mobile apps in Android and IOS. I like to code in python, and am familiar with Java, C, C++ as well.  </p>
      <p class = 'text-right'>
        <a href="https://github.com/utkarshminhas" class = '{text_accent_color} font-semibold hover:underline hover:text-orange-400' target="_blank" rel="noopener noreferrer"> Click Here to know about my programming endeavors</a> 
      </p>
    </div>
    <img src={profile_pic_1} class = 'h-80 rounded'  alt="Its me!" />
    
    
  </div>
  
  <div class = 'flex flex-row space-x-10 justify-center'>
    <button class = 'bg-sky-600 text-white py-2 px-4 rounded'><a href="https://www.linkedin.com/in/utkarsh-minhas/" target="_blank" rel="noopener noreferrer">Linkedin</a></button>
    <button class = 'bg-sky-600 text-white py-2 px-4 rounded'><a href="{resume_download_link}">Download CV</a></button>
    <button class = 'bg-sky-600 text-white py-2 px-4 rounded '><a href="mailto:utkarsh0304@gmail.com" target="_blank" rel="noopener noreferrer">Contact Me</a></button>
    <button class = 'bg-sky-600 text-white py-2 px-4 rounded'><a href="https://github.com/utkarshminhas" target="_blank" rel="noopener noreferrer">Github</a></button>
  </div>
  <br/>

	<Experience/>
  <br/>
  <h2 class = 'capitalize text-sky-600 text-3xl decoration-3 my-3 ml-12 bold'>Education</h2>
	<Education />

  <br/>
  <br/>
  <br/>

  </Route>
  <Route path="certifications" component={Certifications} />
  <Route path="research" component={Certifications} />

  <center>
    <div class = "w-1/3 h-px center bg-zinc-900"></div>
    <p>Built with 💖 in SvelteJS + TailwindCSS</p>
  </center>
  
  <!-- <br/>
  <p>{JSON.stringify(ajson['college_exp'], null, 2)}
  </p> -->


</main>
</Router>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    scroll-behavior: smooth;
  }
  main {
    /* text-align: center; */
    padding: 1em;
    margin: 0 auto;
  }

  /* img {
    height: 16rem;
    width: 16rem;
  } */

  /* h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  } */

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    /* h1 {
      max-width: none;
    } */

    p {
      max-width: none;
    }
  }
</style>
