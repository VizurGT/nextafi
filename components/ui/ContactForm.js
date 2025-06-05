// components/ui/ContactForm.js
import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(''); // 'success', 'error', 'loading', ''

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    if (!name || !email || !message) {
      setStatus('error');
      // Podrías añadir mensajes de error más específicos por campo
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        const errorData = await response.json();
        console.error("Error en el envío del formulario:", errorData.message);
        setStatus('error');
      }
    } catch (error) {
      console.error("Error de red o excepción:", error);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700">
          Nombre Completo
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700">
          Correo Electrónico
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-slate-400"
        >
          {status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
        </button>
      </div>
      {status === 'success' && (
        <p className="text-sm text-green-600 bg-green-50 p-3 rounded-md">
          ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
        </p>
      )}
      {status === 'error' && (
        <p className="text-sm text-red-600 bg-red-50 p-3 rounded-md">
          Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo o verifica tus datos.
        </p>
      )}
    </form>
  );
};

export default ContactForm;