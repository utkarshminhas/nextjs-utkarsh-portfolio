import { sanityClient,urlFor } from '../sanity'
import {intern_exp} from '../typings'  
interface Props{
  intern_exps : [ intern_exp]
  job_exps : [ intern_exp]
}

let heading_style = 'capitalize text-sky-600 text-3xl  my-6 ml-12 bold'
// underline underline-offset-3 decoration-3

var size = 96
  
// function ExperienceCard(){
const ExperienceCard = ({exp}:Props)=>{
    return (
        <div className = "flex flex-row mt-2 mb-6 mx-12 items-center" >
    {/* <input type="image" src={img_link} alt="background image" className = ' h-24 p-2 mb-2 mx-6 aspect-square'
    /> */}
        <img 
            src={exp['logo']}
            className = 'object-contain h-16 rounded-3xl mr-6'
            width={size} height={size}
            alt = ''/> 
    <div className = 'flex flex-col'>
        <p className='text-2xl font-semibold mb-1'>{exp['{company_name}']}</p>
        <p>{exp['{description}']}</p>
        <p className = 'italic font-semibold'>{exp['{time_period}']}</p>
        
    </div>
    
    <hr/>
</div>
    )
}


function Experience({job_exps}:Props,{intern_exps}:Props){
    return (
        <div>
            <div id = 'experience' className={`${heading_style} pt-16`}>Job Experience</div>

            {job_exps.map(
                    exp =>(
                        <div className = "flex flex-row mt-2 mb-6 mx-12 items-center" >
                        {/* <input type="image" src={img_link} alt="background image" className = ' h-24 p-2 mb-2 mx-6 aspect-square'
                        /> */}
                            <img 
                                src={exp.logo}
                                className = 'object-contain h-16 rounded-3xl mr-6'
                                width={size} height={size}
                                alt = ''/> 
                        <div className = 'flex flex-col'>
                            <p className='text-2xl font-semibold mb-1'>{exp['{company_name}']}</p>
                            <p>{exp.description}</p>
                            <p className = 'italic font-semibold'>{exp['{time_period}']}</p>
                            
                        </div>
                        
                        <hr/>
                    </div>
            ))}
            
            <div className = {heading_style}>Internship Experience</div>
            
            {intern_exps.map(
                    intern_exp =>(
                        <div>
                            I made it intern
                        </div>
            ))}            
            <br/>
            
        </div>
    )
}

export default Experience
// export default Blog1

export const getServerSideProps = async()=>{


    // var query = "*[_type =='certifications']";
    // const certifications = await sanityClient.fetch(query)
    // query = "*[_type =='research_exp']";
    // const research_exp = await sanityClient.fetch(query)
    var query = "*[_type =='intern_exp']";
    const intern_exp = await sanityClient.fetch(query)
    query = "*[_type =='job_exp']";
    const job_exp = await sanityClient.fetch(query)
    // query = "*[_type =='education']";
    // const education = await sanityClient.fetch(query)
    
    return {
      props:{
        // certifications,
        // research_exp,
        intern_exp,
        job_exp,
        // education,
      }
    }
  }
  