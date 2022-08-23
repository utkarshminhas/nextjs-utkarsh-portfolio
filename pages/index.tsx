import type { NextPage } from 'next'
import { sanityClient,urlFor } from '../sanity'
import Head from 'next/head'
import Image from 'next/image'
import Home from '../components/Home'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Certifications from '../components/Certifications'
import Footer2 from '../components/MyFooter'

import {education,job_and_intern_exp,certification,research_exp} from '../typings'
// import Experience from '../older_components/Experience'
interface Props{
  education : [education]
  intern_exp : [job_and_intern_exp],
  job_exp : [job_and_intern_exp],
  certifications : [certification]
  research_exps : [research_exp]
}

export default function HomePage ({education,intern_exp,job_exp,certifications,research_exps}:Props,) {
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
        <Experience exp={intern_exp} type="Intern" />
        <Experience exp={job_exp} type="Job" />
        <Certifications certifications={certifications} />

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
    percentage,
    "imageUrl": image.asset->url,
  }`
  const education = await sanityClient.fetch(query)

  query =  `*[_type =='intern_exp']{
    company_name,
    company_location,
    description,
    start_time,
    end_time,
    "company_image_url" : company_image.asset->url,
  }`
  const intern_exp = await sanityClient.fetch(query)

  query =  `*[_type =='job_exp']{
    company_name,
    company_location,
    description,
    start_time,
    end_time,
    "company_image_url" : company_image.asset->url,
  }`
  const job_exp = await sanityClient.fetch(query)

  query = `*[_type =='certifications']{
    certification_name,
    issued_by_name,
    date_of_issue,
    certificate_url,
    "issued_by_image_url" : issued_by_image.asset->url,
  }`

  const certifications = await sanityClient.fetch(query)

  query = `*[_type =='research_exp']{
    paper_name,
    published_on,
    first_online,
    publisher,
    conference_name,
    conference_subtitle,
    conference_dates,
    paper_description,
    link,
    all_authors,
    "conference_image_url" : conference_image.asset->url
    }`

  const research_exps = await sanityClient.fetch(query)  
  return {
    props:{
      education,
      intern_exp,
      job_exp,
      certifications,
      research_exps
    }
  }
}
