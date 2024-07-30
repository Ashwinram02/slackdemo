import React, { useState } from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

const FAQs = () => {
    const [openQuestion, setOpenQuestion] = useState(null);

    const handleToggle = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    const faqData = [
        {
            question: 'What is Slack Enterprise Grid?',
            answer: (
                <>
                    <p>When companies need to drive growth and get more efficient, there&apos;s{' '}
                        <Link href="https://slack.com/enterprise-grid" className="text-blue-500 hover:underline">
                            Slack Enterprise Grid
                        </Link>. It&apos;s designed so companies like yours can coordinate, automate, and measure large-scale, cross-functional work, all while meeting strict compliance and security requirements.
                    </p>
                    <p>If it involves complex data and people management, it&apos;s probably a job for Slack Enterprise Grid. Using data, AI and CRM, it boosts productivity and helps organisations overcome their unique challenges.{' '}
                        <Link href="https://slack.com/contact-sales" className="text-blue-500 hover:underline">
                            Contact our sales team
                        </Link> to get started.
                    </p>
                </>
            ),
        },
        {
            question: 'Is there a difference between Slack and Slack Enterprise Grid?',
            answer: (
                <>
                <p>There is! Slack is an AI-powered productivity platform built for organisations of every size. It makes collaboration easier by giving teams access to shared knowledge, new ways of working and tools for adding clarity to complex organisational structures. It also lets teams create automations that take care of everyday tasks, giving them more time back to focus on what&apos;s most important.</p>
                <p>Slack Enterprise Grid is all of this and more, made just for enterprise-level organisations.{' '}
                   <Link href="https://slack.com/intl/en-in/pricing" className="text-blue-500 hover:underline">
                   Compare our pricing plans
                   </Link>to see which works best for your business.
                </p>
                </>
            ),
        },
        {
            question: 'How do I migrate to Enterprise Slack?',
            answer: (
                <>
                    <p>Our team is happy to help you migrate to the right instance of Slack. Before transitioning to an enterprise workspace, you’ll need to be signed up for an Enterprise Grid subscription by{' '}
                        <Link href="https://slack.com/contact-sales" className="text-blue-500 hover:underline">
                        contacting our Sales team.
                        </Link>When you’re ready to get started, contact your Account Executive to plan your migration.
                    </p>
                    <p>Curious how it all works? Admins can{' '}
                        <Link href="https://slack.com/intl/en-in/help/articles/115002532808-Migrate-workspaces-to-Enterprise-Grid" className="text-blue-500 hover:underline">
                        explore what to expect 
                        </Link>before, during and after the migration.
                    </p>
                </>
            ),
        },
        {
            question: 'How secure is Slack?',
            answer: (
                <>
                    <p>Very. You can securely share confidential information in Slack. Our platform offers multiple ways to ensure that information, conversations and files stay safe, delivering enterprise-grade security at every layer and adhering to multiple compliance certifications, including SOC 2, SOC 3, ISO/IEC 27001 and more. Slack is GDPR-compliant and can be configured for HIPAA and FINRA compliance. It is FedRAMP Moderate authorised.
                    </p>
                    <p>Slack also has features like Enterprise Key Management that allow admins fine-grained control over data encryption, as well as Native Data Loss Prevention to help manage the protection of sensitive information and confidential resources. Learn more about{' '}
                        <Link href="https://slack.com/intl/en-in/trust/security" className="text-blue-500 hover:underline">
                        Slack’s commitment to security.
                        </Link>
                    </p>
                </>
            ),
        },
    ];

    return (
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col  justify-between items-center w-full mx-auto lg:max-w-7xl space-y-10 lg:space-y-0">
                <div className="lg:w-1/2">
                    <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqData.map((faq, index) => (
                            <div key={index} className="border-b">
                                <button
                                    onClick={() => handleToggle(index)}
                                    className="w-full flex justify-between items-center py-4 text-left text-xl font-medium text-gray-900">
                                    <span>{faq.question}</span>
                                    <FaArrowRight className={`transform transition-transform ${openQuestion === index ? 'rotate-90' : ''}`} />
                                </button>
                                {openQuestion === index && <div className="mt-2 text-gray-700">{faq.answer}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQs;
