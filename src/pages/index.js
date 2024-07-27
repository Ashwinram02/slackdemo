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
  const certlogo = [
    { src: '/images/logo-cert-finra.png', alt: 'Finra Logo'},
    { src: '/images/logo_hipaa.png', alt: 'Hipaa Logo'},
    { src: '/images/logo-Fedramp.png', alt: 'Fedramp Log'},
    { src: '/images/logo-gdpr.png', alt: 'Gdpr Logo'},
    { src: '/images/logo-aicpa-soc.png', alt: 'Aicpa Logo'},
    { src: '/images/logo-iso-27001.png', alt: 'Iso Logo'},
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
      <footer className="flex items-center justify-center p-8 space-x-9 bg-white ">
      {logos.map((logo, index) => (
        <button key={index}>
        <Link href={logo.href} target="_blank" rel="noopener noreferrer">
          <Image width={100} height={100} src={logo.src} alt={logo.alt} className="logo"/>
        </Link>
        </button>
      ))}
    </footer>
    </div>
      <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex  w-full mx-auto lg:max-w-7xl ">
         <div>
            <h2 className="text-sm font-semibold text-gray-900">PRODUCTIVITY AT SCALE</h2>
            <h2 className="text-4xl font-bold text-black">
              Meet the needs of your organisation with powerful productivity tools
            </h2>
            <ul className="mt-4 space-y-4 text-left text-lg text-black lg:mx-auto">
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
              &ldquo;Slack has been the hammer that has helped us tear down the walls of silos. It has enabled us to position Slack as the operating system of collaboration across 194 countries and 171 offices, pulling us together like nothing else has.&rdquo;</p>
          </blockquote>
          <figcaption className="mt-3 text-sm text-black-500">
          <Image width={50} height={50} src="/images/fox.png" alt="Slack Illustration"className=" max-w-md"/>
          <strong>Jeff Dow, Executive Vice President, Media and Broadcast Operations</strong>
          </figcaption>
        </div>
            </div>
            <Image width={500} height={500} src="/images/Slack for enterprises.gif" alt="Slack Illustration" className=""unoptimized />
          </div>
      </div>
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="flex  w-full mx-auto lg:max-w-7xl ">
        <div>
        <h2 className="text-sm font-semibold text-gray-900">SECURITY</h2>
        <h2 className="text-4xl font-bold text-black">Ensure company-wide safety and compliance</h2>
        <ul className="mt-4 space-y-4 text-left text-lg text-black lg:mx-auto">
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
            <p className="font-medium text-gray-900">
              &ldquo;With the introduction of Slack Enterprise Key Management as an added security feature, we immediately saw its value in giving us total control of our data and the assurance that we’re protected in the event of a security threat in our supply chain.&rdquo;
            </p>
          <figcaption className="mt-3 text-sm text-black-500">
          <Image width={150} height={150} src="/images/crowdstrike.png" alt="Slack Illustration"className=" max-w-md"/>
            <strong>Colin Black, Chief Operating Officer, CrowdStrike</strong>
          </figcaption>
        </div>
        </div>
        <Image width={500} height={500} src="/images/security.IN.gif" alt="Slack Illustration" className="max-w-md"unoptimized/>
       </div>  
       <footer className="flex items-center justify-center p-8 space-x-9">
       {certlogo.map((logo, index) => (
        <Image key={index} width={100} height={100} src={logo.src} alt={logo.alt} className=""/>
       ))}
       </footer>
      </div>
      <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex  w-full mx-auto lg:max-w-7xl ">
       <div>
        <h2 className="text-sm font-semibold text-gray-900">PLATFORM</h2>
        <h2 className="text-4xl font-bold text-black">Customise Slack to work the way that you do</h2>
        <ul className="mt-4 space-y-4 text-left text-lg text-black lg:mx-auto">
          <li className="flex items-center">
            <svg
              className="flex-shrink-0 w-6 h-6 text-indigo-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Choose from over 2,600 apps to help bring all your tools together</span>
          </li>
          <li className="flex items-center">
            <svg
              className="flex-shrink-0 w-6 h-6 text-indigo-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Build time-saving automations and integrate your favourite apps</span>
          </li>
          <li className="flex items-center">
            <svg
              className="flex-shrink-0 w-6 h-6 text-indigo-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Integrate internal tools, processes and data with ease</span>
          </li>
        </ul>
        <div className="mt-5 flex items-center">
          <Link href="/apps-integrations" className="text-blue-500 ml-2">
            Learn more about apps and integrations
          </Link>
          <i className="flex text-blue-500">
            <FaArrowRight />
          </i>
        </div>
        <div className="flex p-8 space-x-8 ">
          <Image width={50} height={50} src="/images/icon-zoom.png" alt="Zoom Logo" />
          <Image width={50} height={50} src="/images/icon-outlook.png" alt="Outlook Logo" />
          <Image width={50} height={50} src="/images/icon-jira.png" alt="Jira Logo" />
          <Image width={50} height={50} src="/images/icon-onedrive.png" alt="OneDrive Logo" />
          <Image width={50} height={50} src="/images/icon-drive.png" alt="Google Drive Logo" />
          <Image width={50} height={50} src="/images/icon-salesforce.png" alt="Salesforce Logo" />
          <Image width={50} height={50} src="/images/icon-gmail.png" alt="Gmail Logo" />
          <Image width={50} height={50} src="/images/icon-dropbox.png" alt="Dropbox Logo" />
        </div>
        </div>
        <Image width={500} height={500} src="/images/4-illo-platform.IN.gif" alt="Platform Illustration" unoptimized/>
        </div>
       </div>
       <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black">Ready to take the next step with Slack for your enterprise?</h2>
          <Link href="/contact-sales" className="text-blue-500 mt-4 inline-block">Chat with sales to get started <FaArrowRight className="inline-block ml-2" /></Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Image width={50} height={50} src="/images/Warehouse_management.png" alt="Enterprise-level everything" />
            <h3 className="mt-4 text-xl font-semibold text-black">Enterprise-level everything</h3>
            <p className="mt-2 text-black">Power productivity at scale by making processes easier and bringing all your workspaces together.</p>
          </div>
          <div className="text-center">
            <Image width={50} height={50} src="/images/lock-icon.png" alt="Company-wide compliance" />
            <h3 className="mt-4 text-xl font-semibold text-black">Company-wide compliance</h3>
            <p className="mt-2 text-black">Sure up security across your organisation by managing access to your most important information.</p>
          </div>
          <div className="text-center">
            <Image width={50} height={50} src="/images/Analytics.png" alt="Analytics for all" />
            <h3 className="mt-4 text-xl font-semibold text-black">Analytics for all</h3>
            <p className="mt-2 text-black">Measure and maximise tech stack adoption with enterprise-grade analytics.</p>
          </div>
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
