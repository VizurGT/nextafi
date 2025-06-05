// components/layout/AppFooter.js
import React from 'react';

const AppFooter = () => (
  <footer className="bg-dark/90 text-primary mt-16">
    <div className="container mx-auto px-6 py-8 text-center">
      <p className="font-semibold">AFI Smart</p>
      <p className="text-sm text-slate-400 mt-2">
        Una visualización interactiva del informe sobre el mercado de publicidad digital en Chile, sus tendencias y estrategias para emprendedores. Creado para ayudar a Pymes y emprendedores chilenos.
      </p>
      <p className="text-xs text-slate-500 mt-4">
        © {new Date().getFullYear()} AFI Smart. Todos los derechos reservados.
      </p>
    </div>
  </footer>
);
export default AppFooter;