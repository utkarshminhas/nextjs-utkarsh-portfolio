import Image from 'next/image'
import { sanityClient,urlFor } from '../sanity'
import {certification} from '../typings'

interface Props{
  certifications : [certification]
}


// function Education({education}:Props){
export default function Certifications(
  {certifications}:Props
  ){
    console.log('start.....')
    console.log(certifications)
    console.log('end.....')
    return(
        <div>
        <div className='text-blue-600 font-bold text-4xl md:text-4xl my-12'>
          Certifications
        </div>
  
        {certifications.length < 1 ?(
        <div>Loading...</div>
        ):(
          certifications.reverse().map(cert =>(
            <div className = 'flex flex-row items-center mb-3 space-x-4 md:ml-4'>
                {/* <div className='mr-4'> */}
                    {/* {#if cert['issued by']==='Coursera'}
                    <img 
                    src='{coursera_png_link}'
                    className = 'object-contain h-16 rounded-3xl'/>
                    {:else}
                    <p> filler image</p>
                    {/if} */}
                {/* </div> */}
                <div className='flex-none'>
                    {/* wrapping the image in a flex-none so that the image does not grow or shrink depending on the 'certification_name' field*/}
                    <Image src={cert.issued_by_image_url} alt="It's me" height='64' width='64'  className='rounded-xl m-5   '/>
                </div>
                <div className = 'flex flex-col'>
                    <div><a href = {cert.certificate_url} className = 'text-sky-600 font-semibold hover:underline'>{cert.certification_name}</a></div> 
                    <div>Date of Issue : {cert.date_of_issue}</div>
                    <div>Issued by : {cert.issued_by_name}</div>
                </div>
            </div>
            )
          )
        )}
        </div>
        )
    }