import React from 'react';
import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaTiktok } from 'react-icons/fa';

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
  {
    section: "WHY SLACK?",
    links: [
      { text: "Slack vs email", href: "#" },
      { text: "Enterprise", href: "#" },
      { text: "Small business", href: "#" },
      { text: "Productivity", href: "#" },
      { text: "Task management", href: "#" },
      { text: "Scale", href: "#" },
      { text: "Trust", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-white py-10">
      <div className=" px-4 md:px-10">
        <div className="flex flex-wrap justify-between">
        <Image width={100} height={100} src="/images/logo.png" alt="Logo" className="mb-4"/>
          {footerData.map((section, index) => (
            <div key={index} className=" md:w-1/5 mb-6 ">
              <h4 className="text-lg font-semibold">{section.section}</h4>
              <ul>
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="text-gray-600 hover:text-blue-900">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10 space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-900"><FaLinkedin /></a>
          <a href="#" className="text-gray-600 hover:text-gray-900"><FaInstagram /></a>
          <a href="#" className="text-gray-600 hover:text-gray-900"><FaFacebook /></a>
          <a href="#" className="text-gray-600 hover:text-gray-900"><FaTwitter /></a>
          <a href="#" className="text-gray-600 hover:text-gray-900"><FaYoutube /></a>
          <a href="#" className="text-gray-600 hover:text-gray-900"><FaTiktok /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
