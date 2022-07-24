import type { NextPage } from 'next'
import { sanityClient,urlFor } from '../sanity'
import Head from 'next/head'
import Image from 'next/image'
import Home from '../components/Home'
import Footer2 from '../components/MyFooter'

export default function HomePage () {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-blue-300">
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
      </main>

      <Footer2/>
    </div>
  )
}
