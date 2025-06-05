// components/sections/ContactSection.js
import React from 'react';
import ContactForm from 'components/ui/ContactForm'; // Asegúrate que la ruta sea correcta

const ContactSection = () => {
  return (
    <section id="contacto" className="py-12 lg:py-16 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Conversemos
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            ¿Tienes alguna pregunta o quieres saber más sobre cómo podemos ayudarte? Completa el formulario y nos pondremos en contacto contigo.
          </p>
        </div>
        <div className="max-w-xl mx-auto bg-white/40 p-8 md:p-10 rounded-xl shadow-lg">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;