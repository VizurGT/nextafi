// components/charts/ChannelsChart.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

// Recibe todos los labels originales para el tooltip
const ChannelsChart = ({ data, fullLabels }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (!data || !data.labels || !data.data || !fullLabels) return;

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: data.labels.map(label => label.length > 20 ? label.substring(0, 18) + '...' : label), // Labels para el gráfico
          datasets: [{
            label: 'Inversión por Canal (Proy. 2025 en MM USD)',
            data: data.data,
            backgroundColor: ['#FFDEE9', '#B5FFFC', '#FEE140', '#FA709A', '#1E293B'], // primary to dark
            hoverOffset: 4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'bottom', labels: { boxWidth: 12, padding: 15 } },
            tooltip: {
              callbacks: {
                label: function(context) {
                  let label = fullLabels[context.dataIndex] || ''; // Usar fullLabels para el tooltip
                  if (label) { label += ': '; }
                  if (context.parsed !== null) {
                    label += new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(context.parsed * 1000000);
                  }
                  return label + ' (MM)';
                }
              }
            }
          }
        }
      });
    }
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, fullLabels]);

  return <div className="chart-container"><canvas ref={chartRef}></canvas></div>;
};
export default ChannelsChart;