// components/charts/InvestmentChart.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const InvestmentChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (!data || !data.labels || !data.data) return;

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: data.labels,
          datasets: [{
            label: '% de Inversión Digital sobre Total Medios',
            data: data.data,
            borderColor: '#2563EB',
            backgroundColor: 'rgba(37, 99, 235, 0.1)',
            fill: true,
            tension: 0.4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: { y: { beginAtZero: true, ticks: { callback: value => value + '%' } } },
          plugins: { tooltip: { callbacks: { label: context => `${context.dataset.label}: ${context.formattedValue}%` } } }
        }
      });
    }
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return <div className="chart-container"><canvas ref={chartRef}></canvas></div>;
};
export default InvestmentChart;