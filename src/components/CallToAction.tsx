import React from 'react';
import { Link } from 'react-router-dom';

interface CTAButton {
  text: string;
  href: string;
  primary?: boolean;
}

interface CallToActionProps {
  title: string;
  description: string;
  buttons: CTAButton[];
  backgroundColor?: string;
  borderColor?: string;
}

const CallToAction = ({
  title,
  description,
  buttons,
  backgroundColor = 'bg-[#2D6AA3] bg-opacity-5',
  borderColor = 'border-[#2D6AA3] border-opacity-20'
}: CallToActionProps) => {
  return (
    <div className={`${backgroundColor} border-2 ${borderColor} rounded-xl p-8 text-center`}>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        {title}
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        {description}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {buttons.map((button, index) => (
          <Link
            key={index}
            to={button.href}
            className={`px-8 py-3 rounded-lg font-semibold transition-colors duration-200 text-center focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              button.primary
                ? 'bg-[#2D6AA3] hover:bg-[#1e4d73] text-white focus:ring-[#2D6AA3]'
                : 'border-2 border-[#2D6AA3] text-[#2D6AA3] hover:bg-[#2D6AA3] hover:text-white focus:ring-[#2D6AA3]'
            }`}
          >
            {button.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CallToAction;