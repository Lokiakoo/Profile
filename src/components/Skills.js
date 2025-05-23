import React from 'react'
import {motion} from 'framer-motion'

const Skill = ({name, x, y}) => {
    return (
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
        py-3 px-6 shadow-dark absolute dark:text-dark dark:bg-light 
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md-px-3
        xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-blod'
        whileHover={{scale:1.05}}
        initial={{x:0, y:0}}
        whileInView={{x:x, y:y , transition:{duration: 3} }}
        viewport={{once: true}}
        >
            {name}
        </motion.div>    
    )
}

const Skills = () => {
  return (
    <>
        <h2 className='font-bold text-8xl mt-64 w-full text-center
        md:!text-6xl md:mt-32'>Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
        lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
        lg:bg-circularLightLg lg:dark:bg-circularDarkLg
        md:bg-circularLightMd md:dark:bg-circularDarkMd
        sm:bg-circularLightSm sm:dark:bg-circularDarkSm'>
            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
            p-8 shadow-dark dark:text-dark dark:bg-light
            lg:py-2 lg:px-4 md:text-sm md:py-1.5 md-px-3 
            xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-blod'
            whileHover={{scale:1.05}}>
                Web
            </motion.div>
            <Skill name="HTML5" x="-18vw" y="-8vw" />
            <Skill name="CSS" x="-5vw" y="-8vw" />
            <Skill name="MongoDB" x="-32vw" y="-12vw" />
            <Skill name="Express" x="7vw" y="-16vw" />
            <Skill name="ReactJS" x="20vw" y="-20vw" />
            <Skill name="NodeJS" x="-5vw" y="-21vw" />
            <Skill name="TypeScript" x="-8vw" y="-12vw" />
            <Skill name="Python" x="-12vw" y="-20vw" />
            <Skill name="AWS" x="-18vw" y="-22vw" />
            <Skill name="Alibaba Cloud" x="-19vw" y="-15vw" />
            <Skill name="React Native" x="19vw" y="5vw" />
            <Skill name="VueJS" x="16vw" y="-3vw" />
            <Skill name="Github" x="20vw" y="17vw" />
            <Skill name="CI/CD" x="25vw" y="12vw" />
            <Skill name="IoT" x="25vw" y="-12vw" />
            <Skill name="MQTT" x="18vw" y="-10vw" />
            <Skill name="NextJS" x="-5vw" y="9vw" />
            <Skill name="JavaScript" x="-22vw" y="10vw" />
            <Skill name="MySQL" x="-30vw" y="-1vw" />
            <Skill name="API" x="-15vw" y="18vw" />
            <Skill name="Tailwind CSS" x="4vw" y="20vw" />
        </div>
    </>
  )
}

export default Skills