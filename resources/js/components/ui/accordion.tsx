import React, { useState } from 'react';

const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border-b border-gray-200">
            <button
                className="w-full flex justify-between items-center py-4 px-6 text-left focus:outline-none"
                onClick={toggleAccordion}
            >
                <h3 className="text-lg font-medium">{title}</h3>
                <svg
                    className={`w-5 h-5 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    ></path>
                </svg>
            </button>
            {isOpen && <div className="px-6 pb-4">{content}</div>}
        </div>
    );
};

const Accordion = ({ items }) => {
    return (
        <div className="bg-white rounded-lg shadow-md">
            {items.map((item) => (
                <AccordionItem key={item.id} title={item.title} content={item.content} />
            ))}
        </div>
    );
};

export default Accordion;