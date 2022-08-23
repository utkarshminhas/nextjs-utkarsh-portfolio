import Image from 'next/image'
import { sanityClient,urlFor } from '../sanity'
import {job_and_intern_exp} from '../typings'

interface Props{
  exp : [job_and_intern_exp]
  type: string
}

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function process_date(date_str:string){
    if (typeof(date_str) == undefined || date_str==null){
        return "Present"
    }
    console.log(date_str)
    const date = new Date(date_str)
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[date.getMonth()];
    return month + " "+date.getFullYear()
    }

// function Education({education}:Props){
export default function Education(
  {exp,type}:Props,
  ){
    // console.log("EDUCATION")
    // console.log(education)
    // console.log("END")
  return(
    
    <div>
      <div className='text-blue-600 font-bold text-4xl md:text-4xl my-12'>
        {type} experience
      </div>

      {exp.length < 1 ?(
      <div>Loading...</div>
      ):(
        exp.reverse().map(exp_item =>(
          // console.log(exp_item)
          // 'flex flex-col items-center my-5 space-y-10 md:flex-row md:items-start   bg-cyan-200'
            <div className = 'flex flex-col my-6 md:ml-4 md:flex-row md:items-center     md:space-x-6' key= {exp_item.company_name}> 
              {/* <div className='relative h-32 w-32 bg-green-300'>
                <Image src={exp_item.imageUrl} alt="It's me" layout='fill' objectFit='contain' className='rounded m-5'/>
              </div>               */}
              <Image src={exp_item.company_image_url} alt="It's me" height='108' width='108' objectFit='contain' className='rounded m-5 '/>
              <div className = 'flex flex-col'>
                <p className='text-2xl font-semibold mb-1'>{exp_item.company_name}</p>
                <p>{exp_item.description}</p>
                {/* (event.toLocaleDateString(undefined, { month: 'long'})); */}
                <p className = 'italic font-semibold'>{process_date(exp_item.start_time)} - {process_date(exp_item.end_time)}</p>
                {/* <p className = 'italic font-semibold'>start at {exp_item.start_time}</p> */}
                
            </div>
            </div>
          )
        )
      )}
    </div>
    
  )
}

export function exp_item(){

}

// export const getServerSideProps = async()=>{

//   // var query = "*[_type =='education']";
//   var query =  `*[_type =='education']{
//     institution_name,
//     brief,
//     description,
//     time_period,
//     location,
//     gpa,
//     Percentage,
//     "imageUrl": image.asset->url,
//   }`
//   const education = await sanityClient.fetch(query)
  
//   return {
//     props:{
//       education,
//     }
//   }
// }
