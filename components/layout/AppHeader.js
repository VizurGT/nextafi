// components/layout/AppHeader.js
import React from 'react';

const AppHeader = () => {
  const handleMobileNavChange = (e) => {
    const sectionId = e.target.value;
    if (sectionId) {
      const section = document.querySelector(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="bg-white/50 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo o Título del Sitio */}
        <a href="#" className="text-xl md:text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors" aria-label="Ir al inicio de Impulso Digital Chile">
          <span className="text-blue-600">AFI</span> Smart
        </a>

        {/* Navegación Desktop */}
        <div className="hidden md:flex space-x-5 lg:space-x-6 text-slate-700 font-medium">
          <a href="#mercado" className="hover:text-blue-600 transition-colors">Pulso del Mercado</a>
          <a href="#futuro" className="hover:text-blue-600 transition-colors">Navegando el Futuro</a>
          <a href="#hoja-de-ruta" className="hover:text-blue-600 transition-colors">Hoja de Ruta</a>
          <a href="#contacto" className="hover:text-blue-600 transition-colors">Contacto</a> {/* Nuevo Enlace */}
        </div>

        {/* Navegación Móvil */}
        <div className="md:hidden">
          <select
            id="mobile-nav"
            aria-label="Navegación principal móvil"
            onChange={handleMobileNavChange}
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            defaultValue="" // Para que el placeholder "Navegar..." sea seleccionado por defecto
          >
            <option value="" disabled>Navegar a...</option>
            <option value="#mercado">Pulso del Mercado</option>
            <option value="#futuro">Navegando el Futuro</option>
            <option value="#hoja-de-ruta">Hoja de Ruta</option>
            <option value="#contacto">Contacto</option> {/* Nueva Opción */}
          </select>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;