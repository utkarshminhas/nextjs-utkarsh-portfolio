import Image from 'next/image'
var resume_download_link = "https://drive.google.com/uc?export=download&id=1dm-7iDC_VRb7grx7RMHNVCM3bzrJcQlW"
// TODO : put this resume_download_link and all the other data in sanity
//  should i add some text regarding my coursera certifications, api building using fastapi, NLP etc?
function Home(){
  return(
    
    <div className='flex flex-col'>
      
      <div className='font-bold my-5'>
        <p className='md:inline-block text-4xl '>Hi!</p> 
        <p className='md:inline-block text-3xl md:text-4xl md:pl-2'>I am {' '}<span className="text-blue-600">Utkarsh Minhas</span></p>
      </div>

      <div className='flex flex-col-reverse items-center md:items-start space-x-5 md:flex-row '>
        <div className='py-5 md:py-0 text-xl md:text-lg'>
          {/* this div was added to place the buttons in the div after this correctly */}
          <div className = 'flex-col justify-between'> 
            <p className = 'text-justify pb-4'>Hello! I am a Computer Science & Engineering graduate from SRMIST,Chennai (Batch of 2021). I have 1 year of job experience. Currently I am WFH at <a href = 'https://www.valuelabs.com/' target="_blank" rel="noopener noreferrer" className='underline md:font-semibold hover:text-blue-700'>Valuelabs</a> as a Technical consultant in the AI/ML Cognitive Ops practice group where we leverage the power of AI to build solutions. Previously, I have also worked at <a href = 'https://flipped.ai/in/' target="_blank" rel="noopener noreferrer" className='underline md:font-semibold hover:text-blue-700'>GAIUS Networks Inc(now Flipped.ai)</a>, a New York University startup as a mobile aplication developer intern (via flutter) for one year.</p> 
            <p className = 'text-justify'>I like to work in AI/ML/Deep Learning and data science. Automating and optimizing time consuming processes into just a few seconds via python is a close second when it comes to the things I enjoy via programming. I also have experience in app development frameworks such as Flutter to develop cross platform mobile apps in Android and IOS. I like to code in python, and am familiar with Java, C, C++ as well.  </p>
            <br/>
            <a href="https://github.com/utkarshminhas" className = 'font-semibold underline hover:text-blue-700' target="_blank" rel="noopener noreferrer"> Click Here to know about my programming endeavors</a> 

          </div>
          
          <div className = 'mt-10 md:mt-20 grid grid-cols-2 gap-x-5 gap-y-5 md:gap-x-16 md:grid-cols-4'>
            <button className = 'bg-blue-600 text-white py-2 px-4 rounded'><a href="https://www.linkedin.com/in/utkarsh-minhas/" target="_blank" rel="noopener noreferrer">Linkedin</a></button>
            <button className = 'bg-blue-600 text-white py-2 px-4 rounded'><a href={resume_download_link}>Download CV</a></button>
            <button className = 'bg-blue-600 text-white py-2 px-4 rounded '><a href="mailto:utkarsh0304@gmail.com" target="_blank" rel="noopener noreferrer">Contact Me</a></button>
            <button className = 'bg-blue-600 text-white py-2 px-4 rounded'><a href="https://github.com/utkarshminhas" target="_blank" rel="noopener noreferrer">Github</a></button>
          </div>
      

        </div>
       
        <div className='relative h-80 w-72 md:hidden'>
         <Image src="/images/profile_pic_2.jpg" alt="It's me" layout='fill' objectFit='contain' className='rounded m-5'/>
        </div>

        <div className='hidden md:block p-3 md:py-0 md:px-3'>
         <Image src="/images/profile_pic_2.jpg" alt="It's me" height='1440' width='1080' objectFit='contain' className='rounded m-5'/>
        </div>
      
      </div>

    </div>

  )
}

export default Home