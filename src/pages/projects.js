import React from 'react'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import BGEIndex from '../../public/images/profile/BGEIndex.png'
import AutoIDSIndex from '../../public/images/profile/AutoIDSIndex.png'
import Pending from '../../public/images/profile/Pending.jpg'
import Smart_Watch from '../../public/images/profile/SW_SNR.png'
import Electral_box from '../../public/images/profile/electral_box_snr.png'
import Confined_Space from '../../public/images/profile/ConfinedSpace.png'
import Environment_sensor from '../../public/images/profile/Environment_sensor.png'
import SSW_DWSS_report from '../../public/images/profile/SSW_DWSS_report.png'

const JobsProjects = ({ type, title, img, link, summary, github, code}) => {
    return (        
        <article className='w-full mt-3 flex items-center justify-between relative
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
        <div className='absolute top-2 -right-3 -z-10 w-[100%] h-[100%] rounded-xl rounded-br-3xl bg-dark
         dark:bg-light '/>
            <Link href={link} target={"_blank"}
            className='w-2/3 cursor-pointer overflow-hidden rounded-lg md:w-full'>
                <Image src={img} alt={title} className="w-full h-auto"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
            </Link>
            <div className='w-1/3 flex flex-col justify-between pl-6 md:w-[80%] xs:items-center'>
                <span className='text-navBlue font-medium text-xl dark:text-light/75'>{type}</span>
                <h2 className='my-2 w-full text-left text-3xl font-bold hover:underline dark:text-light xs:text-center'>{title}</h2>
                <p className='my2 font-medium text-dark dark:text-light/75'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    {code && <Link href={code} target={"_blank"} className='mr-4 mt-6 items-center bg-black text-light p-2 px-6 rounded-lg text-lg 
                    font-semibold border-2 border-solid border-transparent
                    hover:bg-light hover:text-dark hover:border-dark
                    dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:dark:border-light'
                    >Code</Link>}
                    {github && <Link href={github} target={"_blank"} className='mr-4 mt-6 w-9
                    dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:dark:border-light'
                    ><GithubIcon /></Link>}
                    <Link href={link} target={"_blank"} 
                    className='mt-6 items-center bg-black text-light p-2 px-6 rounded-lg text-lg 
                    font-semibold border-2 border-solid border-transparent
                    hover:bg-light hover:text-dark hover:border-dark
                    dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                    xs:text-sm'
                    >Visit Project</Link>
                </div>
            </div>
        </article>
    )
}
//grid-cols-12 > grid-cols + col-span-12 > col-span
const projects = () => {
  return (
    <>
        <Head>
            <title>Projects Page</title>
            <meta name='description'  content='Projects Page'/>
        </Head>
        <main className='w-full mb-16 flex flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText className='xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'
                text='Projects | Jobs'/>
                {/* grid-cols-12 control the size */}
                <div className='grid grid-cols-12 gap-24 xl:gap-x-16'>
                    <div className='col-span-12'>
                        <JobsProjects
                        type="Client Projects"
                        title="Smart Watch Dashboard"
                        img={Smart_Watch}
                        summary="HTML5, CSS3, JavaScript, NodeJS, MongoDB, Alibaba Cloud"
                        link="https://smart-watch-dashboard.web.app/snr/"
                        />                        
                    </div>
                    <div className='col-span-6'>
                        <JobsProjects
                        type="Client Projects"
                        title="Smart Electrial Box Dashboard"
                        img={Electral_box}
                        summary="HTML5, CSS3, JavaScript, NodeJS, MongoDB, AWS, Alibaba Cloud"
                        link=""
                        />                        
                    </div>
                    <div className='col-span-6'>
                        <JobsProjects
                        type="Client Projects"
                        title="Gas Sensor Intergration"
                        img={Confined_Space}
                        summary="API Intergration, NodeJS, MongoDB, AWS, Alibaba Cloud"
                        link="http://94.190.218.197:7002/SiteMonitoring_Web/SiteMonitor/ConfinedSpaceRealTimeState"
                        />                        
                    </div>
                    <div className='col-span-12'>
                        <JobsProjects
                        type="Client Projects"
                        title="Environment Sensor Intergration"
                        img={Environment_sensor}
                        summary="API Intergration, NodeJS, MongoDB, AWS, Alibaba Cloud"
                        link="http://94.190.218.197:7002/SiteMonitoring_Web/EnvironmentMonitor/DataStatistics"
                        />                        
                    </div>
                    <div className='col-span-12'>
                        <JobsProjects
                        type="Client Projects"
                        title="DWSS - Digital Works Supervision System Intergration"
                        img={SSW_DWSS_report}
                        summary="API, React, React Bootstrap, Material Design, JavaScript"
                        link="https://ssw-dwss-integration.web.app/"
                        />                        
                    </div>
                    <div className='col-span-12'>
                        <JobsProjects
                        type="Freelance Job"
                        title="BGE Blog"
                        img={BGEIndex}
                        summary="Word Press"
                        link="https://blog.bg.exchange/"
                        />                        
                    </div>
                    <div className='col-span-12'>
                        <JobsProjects
                        type="Freelance Job"
                        title="Auto-ID Solution"
                        img={AutoIDSIndex}
                        summary="Word Press"
                        link="https://autoidsolution.com.hk/"
                        /> 
                    </div>
                </div>
            </Layout>
        </main>
    </>
  )
}

export default projects