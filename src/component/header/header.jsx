import React, { useState } from 'react';
import Link from 'next/link';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
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
          <button className="text-sm font-medium hover:text-blue-600 transition duration-300">
              Features</button> 
          {isFeaturesDropdownOpen && (
            <div className="absolute top-full left-0 w-[600px] bg-white border rounded shadow-lg grid grid-cols-3 p-4 gap-4">
                <div>
                <h3 className="flextext-xs font-bold uppercase mb-2">COLLABORATION</h3>
                <Link href="#" className="block text-sm px-4 py-2 text-black hover:bg-gray-100">Channels<p classname="text-sm">Organize teams and work</p></Link>
                <Link href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Slack Connect<p classname="text-sm">Work with external partners</p></Link>
                <Link href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Messaging<p classname="text-sm">Chat with your team</p></Link>
                <Link href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Huddles<p classname="text-sm">Meet using audio and video</p></Link>
                <Link href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Clips<p classname="text-sm">Record and share updates</p></Link>
                </div>
              <div>
                <h3 className="flextext-xs font-bold uppercase mb-2">AUTOMATION</h3>
                <Link href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Workflow Builder<p classname="text-sm">Automate everyday tasks</p></Link>
                <Link href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Apps & Integrations <p classname="text-sm">bring your tools to stack</p></Link>
                <h3 className="flextext-xs font-bold uppercase mb-2">KNOWLEDGE</h3>
                <Link href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Search<p classname="text-sm">Seek shared knowledge</p></Link>
                <Link href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Canvas<p classname="text-sm">Create rich, flexible </p></Link>
                <Link href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">File Sharing<p classname="text-sm">Bring files into the flow of work</p></Link>
                <Link href="#t" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Lists<p classname="text-sm">Organise,track and manage projects</p></Link>
              </div>
              <div>
                <h3 className="flextext-xs font-bold uppercase mb-2">INTELLIGENCE</h3>
                <Link href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Slack AI<p classname="text-sm">Save time and work smarter with powerfully simple AI</p></Link>
                <h3 className="flextext-xs font-bold uppercase mb-2">ENTERPRISE PLATFORM</h3>
                <Link href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Security<p classname="text-sm">Protect data, ensure compliance</p></Link>
                <Link href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Enterprise Key Management<p classname="text-sm">Monitor and revoke access</p></Link>
                <Link href="#s" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Slack Atlas<p classname="text-sm">Discover rich profiles and org chats</p></Link>
              </div>
            </div>
          )}
        </div>
        <div className="relative"
        onMouseEnter={() => setIsSolutionsDropdownOpen(true)}
        onMouseLeave={() => setIsSolutionsDropdownOpen(false)}>
          <button className="text-sm font-medium hover:text-blue-600 transition duration-300">
            Solutions
          </button>
          {isSolutionsDropdownOpen && (
            <div className="absolute top-full left-0 w-[600px] bg-white border rounded shadow-lg grid grid-cols-2 p-4 gap-4">
              <div>
                <h3 className="text-xs font-bold uppercase mb-2">BY DEPARTMENT</h3>
                <Link href="#" className="block text-sm px-4 py-2 text-black hover:bg-gray-100">Engineering</Link>
                <Link href="#" className="block text-sm px-4 py-2 text-black hover:bg-gray-100">IT</Link>
                <Link href="#" className="block text-sm px-4 py-2 text-black hover:bg-gray-100">Customer Service</Link>
                <Link href="#" className="block text-sm px-4 py-2 text-black hover:bg-gray-100">Sales</Link>
                <Link href="#" className="block text-sm px-4 py-2 text-black hover:bg-gray-100">Project Management</Link>
                <Link href="#" className="block text-sm px-4 py-2 text-black hover:bg-gray-100">Marketing</Link>
                <Link href="#" className="block text-sm px-4 py-2 text-black hover:bg-gray-100">Human Resources</Link>
                <Link href="#" className="block text-sm px-4 py-2 text-black hover:bg-gray-100">Security</Link>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase mb-2">BY INDUSTRY</h3>
                <Link href="#" className="block text-sm px-4 py-2 text-black hover:bg-gray-100">Technology</Link>
                <Link href="#" className="block text-sm px-4 py-2 text-black hover:bg-gray-100">Media</Link>
                <Link href="#" className="block text-sm px-4 py-2 text-black hover:bg-gray-100">Small Business</Link>
                <Link href="#" className="block text-sm px-4 py-2 text-black hover:bg-gray-100">Financial Services</Link>
                <Link href="#" className="block text-sm px-4 py-2 text-black hover:bg-gray-100">Retail</Link>
                <Link href="#" className="block text-sm px-4 py-2 text-black hover:bg-gray-100">Education</Link>
                <Link href="#" className="block text-sm px-4 py-2 text-black hover:bg-gray-100">Health and Life Sciences</Link>
              </div>
            </div>
          )}
        </div>
        <Link href="#" className="text-sm font-medium hover:text-blue-600 transition duration-300">
          Enterprise
        </Link>
        <div className="relative"
          onMouseEnter={() => setIsResourcesDropdownOpen(true)}
          onMouseLeave={() => setIsResourcesDropdownOpen(false)}>
          <button className="text-sm font-medium hover:text-blue-600 transition duration-300">
            Resources
          </button>
          {isResourcesDropdownOpen && (
            <div className="absolute top-full left-0  w-[600px] bg-white border rounded shadow-lg grid grid-cols-3 p-4 gap-4"> 
              <div>
                <Link href="#" className="block text-sm px-4 py-2 text-black hover:bg-gray-100">Resources library</Link>
                <Link href="#" className="block text-sm px-4 py-2 text-black hover:bg-gray-100">Events</Link>
                <Link href="#" className="block text-sm px-4 py-2 text-black hover:bg-gray-100">Customer stories</Link>
                <Link href="#" className="block text-sm px-4 py-2 text-black hover:bg-gray-100">Blog</Link>
              </div>
              <div>
                <Link href="#" className="block text-sm px-4 py-2 text-black hover:bg-gray-100">What’s new</Link>
                <Link href="#" className="block text-sm px-4 py-2 text-black hover:bg-gray-100">Developers</Link>
                <Link href="#" className="block text-sm px-4 py-2 text-black hover:bg-gray-100">Community</Link>
                <Link href="#" className="block text-sm px-4 py-2 text-black hover:bg-gray-100">App Directory</Link>
              </div>
              <div>
                <Link href="#" className="block text-sm px-4 py-2 text-black hover:bg-gray-100">Watch demo</Link>
                <Link href="#" className="block text-sm px-4 py-2 text-black hover:bg-gray-100">Partners</Link>
                <Link href="#" className="block text-sm px-4 py-2 text-black hover:bg-gray-100">Slack Certified</Link>
              </div>
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
