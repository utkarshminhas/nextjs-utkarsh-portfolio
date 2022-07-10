import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/MyFooter'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Utkarsh Minhas</title>
        <link rel="icon" href="/favicon.ico" />
        {/* TODO : find a favicon */}
      </Head>
      
      
      <Header/>
      
      <main className="flex w-full flex-1">
      {/* <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center"> */}
        <h1 className="text-6xl font-bold">
          Hi! I am {' '}
          <span className="text-blue-600">
            Utkarsh Minhas
          </span>
        </h1>
        

      </main>

      <Footer/>
    </div>
  )
}

export default Home
