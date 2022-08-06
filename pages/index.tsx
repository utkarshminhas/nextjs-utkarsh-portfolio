import type { NextPage } from 'next'
import { sanityClient,urlFor } from '../sanity'
import Head from 'next/head'
import Image from 'next/image'
import Home from '../components/Home'
import Education from '../components/Education'
import Footer2 from '../components/MyFooter'

import {education} from '../typings'
interface Props{
  education : [education]
}

export default function HomePage ({education}:Props) {
  return (
    // <div className="flex min-h-screen flex-col items-center justify-center bg-blue-300">
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Utkarsh Minhas</title>
        <link rel="icon" href="/favicon.ico" />
        {/* TODO : find a favicon */}
      </Head>

      {/* <Header2/> */}
      {/* placeholder navbar below */}
      <div className='h-16 w-full bg-neutral-700'></div>

      <main className="flex w-full flex-1 flex-col p-5">
        <Home/>
        <Education education={education}/>
      </main>

      <Footer2/>
    </div>
  )
}

export const getServerSideProps = async()=>{

  var query =  `*[_type =='education']{
    institution_name,
    brief,
    description,
    time_period,
    location,
    gpa,
    Percentage,
    "imageUrl": image.asset->url,
  }`
  const education = await sanityClient.fetch(query)
  
  return {
    props:{
      education,
    }
  }
}
