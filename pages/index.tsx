import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import { About } from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import { Projects } from '../components/Projects'
import Contact from '../components/Contact'
import Link from 'next/link'
import type { Experience, PageInfo, Project, Technology, Social } from '../typings'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchTechnologies } from '../utils/fetchTechnologies'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSocials } from '../utils/fetchSocials'

type Props = {
  pageInfo: PageInfo,
  experiences: Experience[],
  technologies: Technology[],
  projects: Project[],
  socials: Social[];
}

const Home = ({ pageInfo, experiences, technologies, projects, socials }: Props) => {
  return (
    <div className='bg-[#000] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thumb-rounded-lg' >
      <Head>
        <title>Grover&apos;s portfolio</title>
        <meta name="description" content="Grover Toledo's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header socials={socials} />

      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo} />
      </section>

      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>
      
      <section id='experience' className='snap-center'>
        <WorkExperience experiences={experiences} />
      </section>

      <section id='skills' className='snap-start'>
        <Skills skills={technologies} />
      </section>

      <section id='projects' className='snap-start'>
        <Projects projects={projects} />
      </section>

      <section id='contact' className='snap-start'>
        <Contact />
      </section>

      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img
              src="https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png"
              className='h-10 w-10 filter grayscale hover:grayscale-0'
            />
            <p>Go top</p>
          </div>
        </footer>
      </Link>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const technologies: Technology[] = await fetchTechnologies();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      technologies,
      projects,
      socials,
    },
    revalidate: 10,
  }
}