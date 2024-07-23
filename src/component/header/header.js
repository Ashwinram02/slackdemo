import React, { useState } from 'react';
import Link from 'next/link';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="flex items-center justify-between p-4 border-b bg-white text-black">
      <div className="flex items-center space-x-4">
        <img src="/images/slack-salesforce-logo-nav-black.png" alt="Slack Logo" className="h-12" />
      </div>
      <nav className="flex items-center space-x-6 relative">
        <div className="relative">
          <button className="text-sm font-medium hover:text-blue-600 transition duration-300" onClick={toggleDropdown}>
            Features
          </button>
          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-[600px] bg-white border rounded shadow-lg grid grid-cols-4 p-4 gap-4">
                <div>
                <h3 className="flextext-xs font-bold uppercase mb-2">COLLABORATION</h3>
                <Link href="https://slack.com/intl/en-in/features/channels" className="block text-sm px-4 py-2 text-black hover:bg-gray-100">Channels
                <p classname="text-sm">Organize teams and work</p></Link>
                <Link href="https://slack.com/intl/en-in/connect" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Slack Connect
                <p classname="text-sm">Work with external partners</p></Link>
                <Link href="https://slack.com/intl/en-in/team-chat" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Messaging
                <p classname="text-sm">Chat with your team</p></Link>
                <Link href="https://slack.com/intl/en-in/features/huddles" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Huddles
                <p classname="text-sm">Meet using audio and video</p></Link>
                <Link href="https://slack.com/intl/en-in/features/clips" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Clips
                <p classname="text-sm">Record and share updates</p></Link>
              </div>
              <div>
                <h3 className="flextext-xs font-bold uppercase mb-2">AUTOMATION</h3>
                <Link href="https://slack.com/intl/en-in/features/workflow-automation" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Workflow Builder
                <p classname="text-sm">Automate everyday tasks</p></Link>
                <Link href="https://slack.com/intl/en-in/integrations" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Apps & Integrations
                <p classname="text-sm">bring your tools to stack</p></Link>
                <h3 className="flextext-xs font-bold uppercase mb-2">KNOWLEDGE</h3>
                <Link href="https://slack.com/intl/en-in/integrations" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Search
                <p classname="text-sm">Seek shared knowledge</p></Link>
                <Link href="https://slack.com/intl/en-in/features/canvas" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Canvas
                <p classname="text-sm">Create rich, flexible </p></Link>
                <Link href="https://slack.com/intl/en-in/document-sharing" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">File Sharing
                <p classname="text-sm">Bring files into the flow of work</p></Link>
                <Link href="https://slack.com/intl/en-in/features/task-list" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Lists
                <p classname="text-sm">Organise,track and manage projects</p></Link>
              </div>
              <div>
                <h3 className="flextext-xs font-bold uppercase mb-2">INTELLIGENCE</h3>
                <Link href="https://slack.com/intl/en-in/features/ai" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Slack AI
                <p classname="text-sm">Save time and work smarter with powerfully simple AI</p></Link>
                <h3 className="flextext-xs font-bold uppercase mb-2">ENTERPRISE PLATFORM</h3>
                <Link href="https://slack.com/intl/en-in/trust/security" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Security
                <p classname="text-sm">Protect data, ensure compliance</p></Link>
                <Link href="https://slack.com/intl/en-in/enterprise-key-management" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Enterprise Key Management
                <p classname="text-sm">Monitor and revoke access</p></Link>
                <Link href="https://slack.com/intl/en-in/atlas" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Slack Atlas
                <p classname="text-sm">Discover rich profiles and org chats</p></Link>
              </div>
            </div>
          )}
        </div>
        <Link href="#" className="text-sm font-medium hover:text-blue-600 transition duration-300">
          Solutions
        </Link>
        <Link href="#" className="text-sm font-medium hover:text-blue-600 transition duration-300">
          Enterprise
        </Link>
        <Link href="#" className="text-sm font-medium hover:text-blue-600 transition duration-300">
          Resources
        </Link>
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
