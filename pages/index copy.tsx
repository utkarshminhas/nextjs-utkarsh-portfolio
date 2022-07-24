import type { NextPage } from 'next'
import { sanityClient,urlFor } from '../sanity'
import Head from 'next/head'
import Image from 'next/image'
import Header2 from '../components/Header'
import Home from '../components/Home'
import Footer2 from '../components/MyFooter'
import {intern_exp} from '../typings'  
// interface Props{
//   intern_exps : [ intern_exp]
//   job_exps : [ intern_exp]
// }

export default function HomePage () {
  // {intern_exps}:Props
  // console.log(intern_exps)
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-blue-300">
      <Head>
        <title>Utkarsh Minhas</title>
        <link rel="icon" href="/favicon.ico" />
        {/* TODO : find a favicon */}
      </Head>

      {/* <Header2/> */}

      <main className="flex w-full flex-1 flex-col ">
      {/* <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center"> */}
        {/* <h1 className="text-6xl font-bold">
          Hi! I am {' '}
          <span className="text-blue-600">
            Utkarsh Minhas
          </span>
        </h1> */}

        <Home/>
        {/* <ExperienceCard/> */}
        {/* <Blog1/> */}
        

      </main>

      <Footer2/>
    </div>
  )
}

// export const getServerSideProps = async()=>{


//   var query = "*[_type =='certifications']";
//   const certifications = await sanityClient.fetch(query)
//   query = "*[_type =='research_exp']";
//   const research_exp = await sanityClient.fetch(query)
//   query = "*[_type =='intern_exp']";
//   const intern_exp = await sanityClient.fetch(query)
//   query = "*[_type =='job_exp']";
//   const job_exp = await sanityClient.fetch(query)
//   query = "*[_type =='education']";
//   const education = await sanityClient.fetch(query)
  
//   return {
//     props:{
//       certifications,
//       research_exp,
//       intern_exp,
//       job_exp,
//       education,
//     }
//   }
// }
