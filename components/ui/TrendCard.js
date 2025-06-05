// components/ui/TrendCard.js
import React, { useState } from 'react';

const TrendCard = ({ trend }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div
      className="bg-white/35 p-6 rounded-xl shadow-md cursor-pointer transition-all hover:shadow-lg hover:scale-[1.03]"
      onClick={() => setIsExpanded(!isExpanded)}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => (e.key === 'Enter' || e.key === ' ') && setIsExpanded(!isExpanded)}
      aria-expanded={isExpanded}
      aria-controls={`trend-details-${trend.title.replace(/\s+/g, '-')}`}
    >
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-4" aria-hidden="true">{trend.icon}</span>
        <h4 className="text-xl font-bold text-slate-800">{trend.title}</h4>
      </div>
      <p className={`text-slate-600 ${isExpanded ? 'hidden' : 'block'}`}>{trend.summary}</p>
      {isExpanded && (
        <div id={`trend-details-${trend.title.replace(/\s+/g, '-')}`} className="text-slate-600 mt-2 fade-in">
          {trend.details}
        </div>
      )}
    </div>
  );
};
export default TrendCard;