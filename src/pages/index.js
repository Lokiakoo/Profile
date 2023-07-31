import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from '../../public/images/profile/pro1-preview.png'
import AnimatedText from '../components/AnimatedText'
import Link from 'next/link'
import HireMe from '@/components/HireMe'
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className=''>
              <Image src={profilePic} alt="Me" width={700} height={700} className='lg:hidden md:inline-grid '
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text="Coding and Designer Thinking" className='!text-left
              xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl' />
              <p className='my-4 text-base font-medium md:text-sm sm:text-sm'>
                A passionate junior web developer eager to learn and grow in the field of software development.
                I am always looking for opportunities to challenge myself and expand my skillset.
                I enjoy working collaboratively with others to solve complex problems and bring innovative ideas to life.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                {/* if Resume, add "download={true}" to className,add "Resume <LinkArrow className={"w-6 ml-1"}" in Link */}
                <Link href='mailto:koobuka@gmail.com' target={"_blank"}
                className='flex items-center bg-black text-light p-2.5 px-6 rounded-lg text-lg font-semibold 
                border-2 border-solid border-transparent
                hover:bg-light hover:text-dark hover:border-dark
                dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                md:text-sm'
                >Contact</Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
          <Image src={lightBulb} alt="lightBuld" className='w-full h-auto'></Image>
        </div>
      </main>
    </>
  )
}