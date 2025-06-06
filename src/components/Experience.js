import React from 'react'
import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'
import LiIcon from './LiIcon'

const Details = ({position, company, time}) => {
    const ref = useRef(null)
    return (
        <li ref = {ref}
        className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between md:w-[80%]'>
            <LiIcon reference={ref} />
            <div>
                <h3 className='capitalize font-bold text-xl sm:text-xl xs-text-lg'>
                    {position}&nbsp;<a className='text-navBlue'>@{company}</a>
                </h3>
                <span className='capitalize font-medium text-dark/75 xs:text-sm'>
                    {time}
                </span>
            </div>
        </li>
    )
}

const Experience = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })

  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center
        md:!text-6xl xs:text-4xl md:mb-16'>
            Experience
        </h2>
        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

            <motion.div
            style={{scaleY: scrollYProgress}}
            className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
            md:w-[2px] md:left-[30px] xs:left-[20px]'/>

            <ul className='w-full flex flex-col items-center justify-between ml-4 xs:ml-2'>
                <Details
                position="Software Developer"
                company="AutoID Solutions"
                time="Oct 2023 - Present"
                />
                <Details
                position="Web Developer"
                company="Freelance Job"
                time="May 2023"
                />
                <Details
                position="HSKP Order Taker"
                company="JW Marriott Hotel"
                time="Sept 2022 - Dec 2022"
                />
                <Details
                position="Estate Agent"
                company="Joy Property"
                time="Mar 2022 - Jul 2022"
                />
                <Details
                position="Laundry Order Taker"
                company="JW Marriott Hotel"
                time="Jul 2019 - Mar 2022"
                />
                <Details
                position="HSKP"
                company="JW Marriott Hotel"
                time="Jul 2017 - Jun 2019"
                />
                <Details
                position="Waiter & Supervisor"
                company="Korean House"
                time="Nov 2015 - Apr 2016"
                />
                <Details
                position="Bartender"
                company="AT Bar and Restaurant"
                time="Nov 2014 - Mar 2015"
                />
            </ul>
        </div>
    </div>
  )
}

export default Experience