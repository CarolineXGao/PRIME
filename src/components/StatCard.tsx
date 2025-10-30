import React from 'react';

interface StatCardProps {
  value: string;
  description: string;
  color: string;
  href?: string;
  source?: string;
}

const StatCard = ({ value, description, color, href, source }: StatCardProps) => {
  const cardContent = (
    <div 
      className={`text-center p-6 text-white rounded-xl hover:brightness-105 transition ${href ? 'cursor-pointer' : ''}`}
      style={{ backgroundColor: color }}
    >
      <div className="text-4xl font-bold mb-2">{value}</div>
      <p>{description}</p>
      {source && (
        <p className="text-xs mt-2 opacity-80">Source: {source}</p>
      )}
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="block focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 rounded-xl"
        aria-label={`${description}: ${value}. Opens in new tab.`}
      >
        {cardContent}
      </a>
    );
  }

  return cardContent;
};

export default StatCard;