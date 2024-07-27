import React, { useState } from 'react';
import Link from 'next/link';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
const featuresData = [
  {
    title: 'COLLABORATION',
    links: [
      { name: 'Channels', description: 'Organize teams and work' },
      { name: 'Slack Connect', description: 'Work with external partners' },
      { name: 'Messaging', description: 'Chat with your team' },
      { name: 'Huddles', description: 'Meet using audio and video' },
      { name: 'Clips', description: 'Record and share updates' },
    ],
  },
  {
    title: 'AUTOMATION',
    links: [
      { name: 'Workflow Builder', description: 'Automate everyday tasks' },
      { name: 'Apps & Integrations', description: 'Bring your tools to stack' },
    ],
  },
  {
    title: 'KNOWLEDGE',
    links: [
      { name: 'Search', description: 'Seek shared knowledge' },
      { name: 'Canvas', description: 'Create rich, flexible' },
      { name: 'File Sharing', description: 'Bring files into the flow of work' },
      { name: 'Lists', description: 'Organize, track, and manage projects' },
    ],
  },
  {
    title: 'INTELLIGENCE',
    links: [
      { name: 'Slack AI', description: 'Save time and work smarter with powerfully simple AI' },
    ],
  },
  {
    title: 'ENTERPRISE PLATFORM',
    links: [
      { name: 'Security', description: 'Protect data, ensure compliance' },
      { name: 'Enterprise Key Management', description: 'Monitor and revoke access' },
      { name: 'Slack Atlas', description: 'Discover rich profiles and org chats' },
    ],
  },
];
const solutionsData = [
  {
    title: 'BY DEPARTMENT',
    links: [
      { name: 'Engineering' },
      { name: 'IT' },
      { name: 'Customer Service' },
      { name: 'Sales' },
      { name: 'Project Management' },
      { name: 'Marketing' },
      { name: 'Human Resources' },
      { name: 'Security' },
    ],
  },
  {
    title: 'BY INDUSTRY',
    links: [
      { name: 'Technology' },
      { name: 'Media' },
      { name: 'Small Business' },
      { name: 'Financial Services' },
      { name: 'Retail' },
      { name: 'Education' },
      { name: 'Health and Life Sciences' },
    ],
  },
];
const resources = [
  {
    title: 'Resources library',
    href: '#',
  },
  {
    title: 'Events',
    href: '#',
  },
  {
    title: 'Customer stories',
    href: '#',
  },
  {
    title: 'Blog',
    href: '#',
  },
  {
    title: 'What’s new',
    href: '#',
  },
  {
    title: 'Developers',
    href: '#',
  },
  {
    title: 'Community',
    href: '#',
  },
  {
    title: 'App Directory',
    href: '#',
  },
  {
    title: 'Watch demo',
    href: '#',
  },
  {
    title: 'Partners',
    href: '#',
  },
  {
    title: 'Slack Certified',
    href: '#',
  },
];
const Header = () => {
  const [isFeaturesDropdownOpen, setIsFeaturesDropdownOpen] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);

  return (
    <header className="flex items-center justify-between p-4 border-b bg-white text-black">
      <div className="flex items-center space-x-4">
        <Image width={100} height={100} src="/images/slack-salesforce-logo-nav-black.png" alt="Slack Logo" className="h-12" />
      </div>
      <nav className="flex items-center space-x-6 relative">    
        <div className="relative"
         onMouseEnter={() => setIsFeaturesDropdownOpen(true)}
         onMouseLeave={() => setIsFeaturesDropdownOpen(false)}>
         <button className="text-sm font-medium hover:text-blue-600 transition duration-300">Features</button>
     {isFeaturesDropdownOpen && (
     <div className="absolute top-full left-0 w-[600px] bg-white border rounded shadow-lg grid grid-cols-3 p-4 gap-4">
      {featuresData.map((section, index) => (
        <div key={index}>
          <h3 className="text-xs font-bold uppercase mb-2">{section.title}</h3>
          {section.links.map((link, linkIndex) => (
            <Link key={linkIndex} href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">
              {link.name}
              <p className="text-sm">{link.description}</p>
            </Link>
          ))}
        </div>
      ))}
     </div>
   )}
    </div>
        <div className="relative"
        onMouseEnter={() => setIsSolutionsDropdownOpen(true)}
        onMouseLeave={() => setIsSolutionsDropdownOpen(false)}>
          <button className="text-sm font-medium hover:text-blue-600 transition duration-300">Solutions</button>
  {isSolutionsDropdownOpen && (
    <div className="absolute top-full left-0 w-[600px] bg-white border rounded shadow-lg grid grid-cols-2 p-4 gap-4">
      {solutionsData.map((section, index) => (
        <div key={index}>
          <h3 className="text-xs font-bold uppercase mb-2">{section.title}</h3>
          {section.links.map((link, linkIndex) => (
            <Link key={linkIndex} href="#" className="block text-sm px-4 py-2 text-black hover:bg-gray-100">
              {link.name}
            </Link>
          ))}
        </div>
      ))}
    </div>
   )}
 </div>
        <Link href="#" className="text-sm font-medium hover:text-blue-600 transition duration-300">
          Enterprise
        </Link>
        <div className="relative"
          onMouseEnter={() => setIsResourcesDropdownOpen(true)}
          onMouseLeave={() => setIsResourcesDropdownOpen(false)}>
          <button className="text-sm font-medium hover:text-blue-600 transition duration-300">Resources</button>
     {isResourcesDropdownOpen && (
         <div className="absolute top-full left-0 w-[600px] bg-white border rounded shadow-lg grid grid-cols-3 p-4 gap-4">
          {resources.slice(0, 4).map((resource, index) => (
            <Link key={index} href={resource.href} className="block text-sm px-4 py-2 text-black hover:bg-gray-100">
              {resource.title}
            </Link>
          ))}
          {resources.slice(4, 8).map((resource, index) => (
            <Link key={index} href={resource.href} className="block text-sm px-4 py-2 text-black hover:bg-gray-100">
              {resource.title}
            </Link>
          ))}
          {resources.slice(8, 11).map((resource, index) => (
            <Link key={index} href={resource.href} className="block text-sm px-4 py-2 text-black hover:bg-gray-100">
              {resource.title}
            </Link>
          ))}
        </div>
      )}
        </div>
        <Link href="#" className="text-sm font-medium hover:text-blue-600 transition duration-300">
          Pricing
        </Link>
      </nav>
      <div className="flex items-center space-x-4">
        <MagnifyingGlassIcon className="w-5 h-5 hover:text-blue-600 transition duration-300" />
        <Link href="#" className="text-sm font-medium hover:text-blue-600 transition duration-300">
          Sign in
        </Link>
        <button className="text-sm bg-white border-purple-900 text-purple-900 border rounded px-3 py-3 hover:bg-gray-200 transition duration-300">
          TALK TO SALES
        </button>
        <button className="text-sm bg-purple-900 text-white rounded px-3 py-3 hover:bg-purple-950 transition duration-300">
          GET STARTED
        </button>
      </div>
    </header>
  );
};

export default Header;
