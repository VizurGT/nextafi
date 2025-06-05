// components/ui/ToolsGrid.js
import React, { useState } from 'react';
import ToolCard from './ToolCard';

const ToolsGrid = ({ tools }) => {
  const [filter, setFilter] = useState('all');
  const filteredTools = filter === 'all' ? tools : tools.filter(t => t.category === filter);

  const filters = ['all', 'IA', 'Diseño', 'Gestión', 'Marketing'];

  return (
    <div>
      <div className="mb-6">
        <h4 className="text-2xl font-bold mb-2">Caja de Herramientas del Emprendedor Digital en Chile</h4>
        <p className="text-slate-600">Una selección de herramientas gratuitas o con planes accesibles (freemium) para impulsar tu negocio en el mercado chileno.</p>
        <div id="tool-filters" className="flex flex-wrap gap-2 mt-4">
          {filters.map(f => (
            <button
              key={f}
              data-filter={f}
              onClick={() => setFilter(f)}
              className={`tool-filter-btn px-3 py-1 text-sm rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 ${filter === f ? 'bg-blue-600/90 text-white' : 'bg-gray-200/30 text-gray-700 hover:bg-gray-300'}`}
              aria-pressed={filter === f}
            >
              {f === 'all' ? 'Todas' : f}
            </button>
          ))}
        </div>
      </div>
      <div id="tools-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTools.map(tool => <ToolCard key={tool.name} tool={tool} />)}
      </div>
    </div>
  );
};
export default ToolsGrid;