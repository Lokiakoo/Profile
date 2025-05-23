import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light'>
        <Layout className='py-8 flex items-center justify-center'>
            <span>Copyright &copy; {new Date().getFullYear()} Louis Koo. All Rights Reserved</span>
        </Layout>
    </footer>
  )
}

export default Footer