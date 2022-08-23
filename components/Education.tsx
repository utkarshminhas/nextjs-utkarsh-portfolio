import Image from 'next/image'
import { sanityClient,urlFor } from '../sanity'
import {education} from '../typings'

interface Props{
  education : [education]
}


// function Education({education}:Props){
export default function Education(
  {education}:Props
  ){
    // console.log("EDUCATION")
    // console.log(education)
    // console.log("END")
  return(
    
    <div>
      <div className='text-blue-600 font-bold text-4xl md:text-4xl my-12'>
        Education
      </div>

      {education.length < 1 ?(
      <div>Loading...</div>
      ):(
        education.reverse().map(education_item =>(
          // console.log(education_item)
          // 'flex flex-col items-center my-5 space-y-10 md:flex-row md:items-start   bg-cyan-200'
            <div className = 'flex flex-col my-6 md:ml-4 md:flex-row md:items-end md:space-x-6' key= {education_item.institution_name}> 
              {/* <div className='relative h-32 w-32 bg-green-300'>
                <Image src={education_item.imageUrl} alt="It's me" layout='fill' objectFit='contain' className='rounded m-5'/>
              </div>               */}
              <Image src={education_item.imageUrl} alt="It's me" height='108' width='108' objectFit='contain' className='rounded m-5 '/>
              <div className = 'flex flex-col mt-6' >
                  <div className='text-2xl font-semibold'>{education_item.institution_name} </div>
                  <div className = 'font-semibold'>{education_item.brief}</div>
                  {education_item.institution_name.includes("Global") ?
                  <div>Secured : <span className = 'font-semibold'>{education_item.gpa}/10 GPA</span></div>
                  :
                  <div>Secured : <span className = 'font-semibold'>{education_item.percentage}%</span></div>
                  }
                  
                  <div>{education_item.location} </div>
                  <div className='italic font-semibold'>{education_item.time_period} </div>  
              </div>
            </div>
          )
        )
      )}
    </div>
    
  )
}

export function Education_Item(){

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
