// components/sections/MarketPulseSection.js
import React from 'components/sections/MarketPulseSection';
import InvestmentChart from 'components/charts/InvestmentChart';
import ChannelsChart from 'components/charts/ChannelsChart';

const MarketPulseSection = ({ inversionData, canalesData, fullCanalesLabels }) => (
  <section id="mercado" className="mb-16 scroll-mt-24">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Pulso del Mercado de Publicidad Digital en Chile</h2>
      <p className="mt-4 text-lg max-w-3xl mx-auto">
        Un vistazo a la evolución, tamaño y distribución de la inversión publicitaria digital en Chile. Comprende el terreno sobre el que construirás tu estrategia digital.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      <div className="bg-white/25 p-6 rounded-xl shadow-md text-center">
        <h3 className="text-slate-500 font-medium">Inversión Digital Chile 2024</h3>
        <p className="text-4xl font-bold text-blue-600 mt-2">$620,8 MM CLP</p>
        <p className="text-sm text-slate-400 mt-1">aproximadamente</p>
      </div>
      <div className="bg-white/25 p-6 rounded-xl shadow-md text-center">
        <h3 className="text-slate-500 font-medium">Crecimiento Digital Chile 2024</h3>
        <p className="text-4xl font-bold text-green-600 mt-2">+12,8%</p>
        <p className="text-sm text-slate-400 mt-1">respecto a 2023</p>
      </div>
      <div className="bg-white/25 p-6 rounded-xl shadow-md text-center">
        <h3 className="text-slate-500 font-medium">Cuota Digital sobre Total Medios en Chile</h3>
        <p className="text-4xl font-bold text-blue-600 mt-2">58%</p>
        <p className="text-sm text-slate-400 mt-1">en 2024</p>
      </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
      <div className="lg:col-span-3 bg-white/40 p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-bold text-slate-800 mb-4">Evolución de la Inversión Digital en Chile (% del Total)</h3>
        <InvestmentChart data={inversionData} />
      </div>
      <div className="lg:col-span-2 bg-white/40 p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-bold text-slate-800 mb-4">Inversión por Canal en Chile (Proyección 2025)</h3>
        <ChannelsChart data={canalesData} fullLabels={fullCanalesLabels} />
      </div>
    </div>
  </section>
);
export default MarketPulseSection;