// components/sections/FutureTrendsSection.js
import React from 'components/sections/FutureTrendsSection';
import TrendCard from 'components/ui/TrendCard';

const FutureTrendsSection = ({ trendsData }) => (
  <section id="futuro" className="mb-16 scroll-mt-24">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-extrabold text-dark">Navegando el Futuro Digital en Chile</h2>
      <p className="mt-4 text-lg max-w-3xl mx-auto">
        Estas son las tendencias emergentes que definirán la publicidad digital en Chile los próximos años. Prepárate para capitalizarlas.
      </p>
    </div>
    <div id="trends-container" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 rounded-lg">
      {trendsData.map(trend => <TrendCard key={trend.title} trend={trend} />)}
    </div>
  </section>
);
export default FutureTrendsSection;