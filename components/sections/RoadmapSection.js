// components/sections/RoadmapSection.js
import React, { useState } from 'react';
import ToolsGrid from 'components/ui/ToolsGrid';

const RoadmapSection = ({ tabsData, toolsData }) => {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);
  const activeTabData = tabsData.find(t => t.id === activeTab);

  return (
    <section id="hoja-de-ruta" className="scroll-mt-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Tu Hoja de Ruta al Éxito Digital en Chile</h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Desde cómo dar el primer impulso a tu emprendimiento en Chile hasta cómo construir una comunidad activa con la ayuda de la IA. Aquí encontrarás estrategias, tácticas y herramientas.
        </p>
      </div>
      <div>
        <div id="tabs-container" className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 p-4 rounded-lg" role="tablist" aria-label="Hoja de Ruta Estratégica">
          {tabsData.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`font-medium py-2 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 ${activeTab === tab.id ? 'bg-blue-600/90 text-white' : 'bg-gray-200/30 text-gray-700 hover:bg-gray-300'}`}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`tab-panel-${tab.id}`}
              id={`tab-button-${tab.id}`}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div id="tab-content-container" className="bg-white/30 p-6 md:p-8 rounded-xl shadow-md min-h-[400px]">
          {activeTabData && (
            <div
              role="tabpanel"
              id={`tab-panel-${activeTabData.id}`}
              aria-labelledby={`tab-button-${activeTabData.id}`}
              className="fade-in"
            >
              {activeTab === 'herramientas' ? (
                <ToolsGrid tools={toolsData} />
              ) : (
                <div dangerouslySetInnerHTML={{ __html: activeTabData.content }} />
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default RoadmapSection;