import React from 'react';
import Link from "next/link"
import Image from 'next/image';
import Header from '@/component/header/header';
import { FaArrowRight } from 'react-icons/fa';
import Footer from '@/component/footer/footer';

export default function Component() {
  const logos = [
    { src: '/images/logo-openai.png', alt: 'OpenAI Logo', href: 'https://openai.com' },
    { src: '/images/manomano-logo.png', alt: 'ManoMano Logo', href: 'https://manomano.com' },
    { src: '/images/vodafone-logo.png', alt: 'Vodafone Logo', href: 'https://vodafone.com' },
    { src: '/images/logo-canva.png', alt: 'Canva Logo', href: 'https://canva.com' },
    { src: '/images/bbc.png', alt: 'BBC Logo', href: 'https://bbc.com' },
    { src: '/images/ocado-logo.png', alt: 'Ocado Technology Logo', href: 'https://ocado.com' },
  ];
  return (
    <><div>
      <Header/>
      <main className="bg-white flex  items-center md:flex-row md:space-y-0 md:space-x-10">
        <div className="max-w-lg space-y-4 mx-auto">
          <h2 className="text-sm font-semibold text-black">ENTERPRISE</h2>
          <h1 className="text-4xl font-bold text-black">Performance and productivity for every level of your enterprise</h1>
          <p className="text-lg text-muted-foreground text-black">
            Scale your processes, ensure company-wide compliance and maximise tech stack adoption - all with the power
            of Slack.
          </p>
          <div className="flex space-x-4">
            <button className="text-sm bg-purple-900 text-white border rounded px-6 py-3 hover:bg-purple-950 transition duration-300">TALK TO SALES</button>
            <button className="text-sm bg-white text-purple-900 border-purple-900 border rounded px-6 py-3 hover:bg-gray-200 transition duration-300">
              WATCH DEMO 
            </button>
          </div>
        </div>
        <Image width={400} height={400} src="/images/Hero-illo-enterprise-page.IN.png" alt="Slack Illustration" className="w-full max-w-md" />
      </main>
      <footer className="flex items-center justify-center p-8 space-x-8 bg-white ">
      {logos.map((logo, index) => (
        <Link key={index} href={logo.href} target="_blank" rel="noopener noreferrer">
          <Image width={100} height={100} src={logo.src} alt={logo.alt} className="hover:text-blue-500" />
        </Link>
      ))}
    </footer>
    </div>
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-">
      <div className="flex  w-full mx-auto lg:max-w-7xl ">
         <div>
            <h2 className="text-sm font-semibold text-gray-900">PRODUCTIVITY AT SCALE</h2>
            <h2 className="text-4xl font-bold text-black">
              Meet the needs of your organisation with powerful productivity tools
            </h2>
            <ul className="mt-4 space-y-4 text-left text-lg text-gray-700 lg:mx-auto">
              <li className="flex items-center">
                <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="">Automate everyday tasks and get more time back for what’s most important</span>
              </li>
              <li className="flex items-center">
                <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="">Get a glimpse of your entire org with ease using <a href="https://slack.com/atlas" className="text-indigo-600">Slack Atlas</a>, our built-in team directory tool</span>
              </li>
              <li className="flex items-center">
                <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="">Visualise team productivity and measure tech stack adoption with advanced analytics</span>
              </li>
            </ul>
            <div className="mt-5 flex items-center ">
             <Link href="/slack-enterprise-solutions" className="text-blue-500 ml-2 ">Learn more about Slack at scale </Link> 
             <i className="flex text-blue-500"><FaArrowRight /></i>
            </div>
            <div className="mt-12 mx-auto max-w-2xl lg:max-w-7xl ">
          <blockquote className="mt-10">
            <p className=" font-medium text-gray-900">
              &ldquo;<strong>Slack has been the hammer that has helped us tear down the walls of silos. It has enabled us to position Slack as the operating system of collaboration across 194 countries and 171 offices, pulling us together like nothing else has.&rdquo;
              </strong></p>
          </blockquote>
          <figcaption className="mt-3 text-sm text-black-500">
            Jeff Dow, Executive Vice President, Media and Broadcast Operations
          </figcaption>
        </div>
            </div>
            <Image width={500} height={500} src="/images/Slack for enterprises.gif" alt="Slack Illustration" className="w-full max-w-md"unoptimized />
          </div>
       
      </div>
      <div className="bg-white py-16 mx-auto max-w-2xl lg:max-w-7xl">
        <h2 className="text-sm font-semibold text-gray-900">SECURITY</h2>
        <h2 className="text-4xl font-bold text-black">
          Ensure company-wide safety and compliance
        </h2>
        <ul className="mt-4 space-y-4 text-left text-lg text-gray-700 lg:mx-auto">
          <li className="flex items-center">
            <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="">Consider compliance needs met, including requirements like FINRA, HIPAA and FedRAMP</span>
          </li>
          <li className="flex items-center">
            <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="">Protect sensitive information and resources with native data-loss prevention</span>
          </li>
          <li className="flex items-center">
            <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="">Take control of data using your own encryption keys with <a href="https://slack.com/enterprise-key-management" className="text-indigo-600">Slack Enterprise Key Management</a></span>
          </li>
        </ul>
        <div className="mt-5 flex items-center">
          <Link href="/slack-security" className="text-blue-500 ml-2">Learn more about security</Link>
          <i className="flex text-blue-500"><FaArrowRight /></i>
        </div>
        <div className="mt-12 mx-auto max-w-2xl lg:max-w-7xl">
          <blockquote className="mt-10">
            <p className="font-medium text-gray-900">
              &ldquo;<strong>With the introduction of Slack Enterprise Key Management as an added security feature, we immediately saw its value in giving us total control of our data and the assurance that we’re protected in the event of a security threat in our supply chain.&rdquo;</strong>
            </p>
          </blockquote>
          <figcaption className="mt-3 text-sm text-black-500">
            Colin Black, Chief Operating Officer, CrowdStrike
          </figcaption>
        </div>
        <div>
        <Image width={500} height={500} src="/images/security.IN.gif" alt="Slack Illustration" className="w-full max-w-md"unoptimized/> 
        </div>
        
      </div>
      <div>
        <Footer/>
      </div>
     </>
  )
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
    
  )
  
}
