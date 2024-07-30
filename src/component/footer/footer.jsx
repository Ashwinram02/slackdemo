import React from 'react';
import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaTiktok, FaGlobe, FaArrowDown } from 'react-icons/fa';
import Link from 'next/link';

const footerData = [
  {
    section: "Product",
    links: [
      { text: "Watch demo", href: "#" },
      { text: "Pricing", href: "#" },
      { text: "Paid vs Free", href: "#" },
      { text: "Accessibility", href: "#" },
      { text: "Featured releases", href: "#" },
      { text: "Change log", href: "#" },
      { text: "Status", href: "#" },
    ],
  },
  {
    section: "Features",
    links: [
      { text: "Channels", href: "#" },
      { text: "Slack Connect", href: "#" },
      { text: "Workflow Builder", href: "#" },
      { text: "Messaging", href: "#" },
      { text: "Huddles", href: "#" },
      { text: "Canvas", href: "#" },
      { text: "Lists", href: "#" },
      { text: "Clips", href: "#" },
      { text: "Search", href: "#" },
      { text: "Apps & integrations", href: "#" },
      { text: "File sharing", href: "#" },
      { text: "Slack AI", href: "#" },
      { text: "Security", href: "#" },
      { text: "Enterprise Key Management", href: "#" },
      { text: "Slack Atlas", href: "#" },
    ],
  },
  {
    section: "Solutions",
    links: [
      { text: "Engineering", href: "#" },
      { text: "IT", href: "#" },
      { text: "Customer service", href: "#" },
      { text: "Sales", href: "#" },
      { text: "Project management", href: "#" },
      { text: "Marketing", href: "#" },
      { text: "Security", href: "#" },
      { text: "Technology", href: "#" },
      { text: "Media", href: "#" },
      { text: "Financial services", href: "#" },
      { text: "Retail", href: "#" },
      { text: "Public sector", href: "#" },
      { text: "Education", href: "#" },
      { text: "Health and life sciences", href: "#" },
      { text: "See all solutions", href: "#" },
    ],
  },
  {
    section: "Resources",
    links: [
      { text: "Help Centre", href: "#" },
      { text: "What’s new", href: "#" },
      { text: "Resources library", href: "#" },
      { text: "Slack blog", href: "#" },
      { text: "Community", href: "#" },
      { text: "Customer stories", href: "#" },
      { text: "Events", href: "#" },
      { text: "Developers", href: "#" },
      { text: "Partners", href: "#" },
      { text: "Partner offers", href: "#" },
      { text: "App Directory", href: "#" },
      { text: "Slack Certified", href: "#" },
    ],
  },
  {
    section: "Company",
    links: [
      { text: "About us", href: "#" },
      { text: "News", href: "#" },
      { text: "Media kit", href: "#" },
      { text: "Brand centre", href: "#" },
      { text: "Careers", href: "#" },
      { text: "Slack shop", href: "#" },
      { text: "Engineering blog", href: "#" },
      { text: "Design blog", href: "#" },
      { text: "Contact us", href: "#" },
    ],
  },
];

const whySlackData = [
  { text: "Slack vs email", href: "#" },
  { text: "Enterprise", href: "#" },
  { text: "Small business", href: "#" },
  { text: "Productivity", href: "#" },
  { text: "Task management", href: "#" },
  { text: "Scale", href: "#" },
  { text: "Trust", href: "#" },
];

const socialMediaLinks = [
  { href: "#", icon: <FaLinkedin />, label: "LinkedIn" },
  { href: "#", icon: <FaInstagram />, label: "Instagram" },
  { href: "#", icon: <FaFacebook />, label: "Facebook" },
  { href: "#", icon: <FaTwitter />, label: "Twitter" },
  { href: "#", icon: <FaYoutube />, label: "YouTube" },
  { href: "#", icon: <FaTiktok />, label: "TikTok" },
];

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="px-4 md:px-10 py-8 bg-purple-900 text-white">
        <h2 className="text-3xl font-bold text-center mb-4">Where the future works</h2>
        <div className="flex justify-center space-x-4 mb-8">
        <button className="text-sm bg-white text-purple-900 border rounded px-6 py-3 hover:bg-purple-950 transition duration-300">TALK TO SALES</button>
        <button className="text-sm text-white border-white border rounded px-6 py-3 hover:bg-gray-200 transition duration-300">WATCH DEMO </button>
        </div>
      </div>
      <div className="bg-white">
        <div className="flex justify-between items-center py-4 px-4 md:px-10 border-t border-gray-200">
          <div className="flex items-center space-x-2 text-black">
            <i className="text-xl text-gray-700"><FaGlobe /></i>
            <Link href="#" className="hover:text-blue-500">Change region</Link>
          </div>
          <div className="flex space-x-6">
            {socialMediaLinks.map((link, index) => (
              <Link key={index} href={link.href} className="text-black hover:text-blue-500" aria-label={link.label}>
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap justify-between px-4 md:px-10 py-8">
          <div className="w-full md:w-auto mb-6">
            <Image width={50} height={30} src="/images/logo.png" alt="Logo" />
          </div>
          <div className="w-1/2 md:w-1/6 mb-6 px-4">
            <h4 className="text-lg text-black font-semibold">Product</h4>
            <ul>
              {footerData[0].links.map((link, idx) => (
                <li key={idx} className="mb-2">
                  <Link href={link.href} className="text-black hover:text-blue-500">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-lg text-black font-semibold mt-4">WHY SLACK?</h4>
            <ul>
              {whySlackData.map((link, idx) => (
                <li key={idx} className="mb-2">
                  <Link href={link.href} className="text-black hover:text-blue-500">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {footerData.slice(1).map((section, index) => (
            <div key={index} className="w-1/2 md:w-1/6 mb-6 px-4">
              <h4 className="text-lg text-black font-semibold">{section.section}</h4>
              <ul>
                {section.links.map((link, idx) => (
                  <li key={idx} className="mb-2">
                    <Link href={link.href} className="text-black hover:text-blue-500">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center py-4 px-4 md:px-10 border-t border-gray-200">
          <div className="flex items-center space-x-2 text-black">
            <Link href="#" className="hover:text-blue-500 flex items-center space-x-1">
              <span>Download Slack</span>
              <FaArrowDown className="text-lg" />
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="text-black hover:text-blue-500">Privacy</Link>
            <Link href="#" className="text-black hover:text-blue-500">Terms</Link>
            <Link href="#" className="text-black hover:text-blue-500">Cookie preferences</Link>
            <Link href="#" className="text-black hover:text-blue-500">Your privacy choices</Link>
          </div>
          <div className="text-black text-sm">
            ©2024 Slack Technologies, LLC, a Salesforce company. All rights reserved. <p>Various trademarks held by their respective owners.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
