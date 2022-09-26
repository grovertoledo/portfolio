import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Grover&apos;s portfolio</title>
        <meta name="description" content="Grover Toledo's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {/* Hero */}
      <section id='hero' className='snap-center'>
        <Hero />
      </section>      
      {/* About */}

      {/* Experience */}

      {/* Skill */}

      {/* Projects */}

      {/* Contact me */}

    </div>
  )
}

export default Home
