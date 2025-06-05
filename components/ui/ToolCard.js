// components/ui/ToolCard.js
import React from 'react';

const ToolCard = ({ tool }) => (
  <div className="bg-slate-50/50 p-4 rounded-lg border border-slate-200 fade-in h-full flex flex-col">
    <h5 className="font-bold text-slate-800">{tool.name}</h5>
    <p className="text-sm text-slate-600 flex-grow">{tool.description}</p>
    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium mt-2 px-2.5 py-0.5 rounded-full self-start">{tool.category}</span>
  </div>
);
export default ToolCard;