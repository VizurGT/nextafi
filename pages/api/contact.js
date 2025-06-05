// pages/api/contact.js
import { createClient } from '@supabase/supabase-js';

// Inicializa el cliente de Supabase FUERA del handler para reutilizarlo
// Asegúrate de que estas variables de entorno estén configuradas en tu .env.local
// y en tu plataforma de despliegue (Vercel, Netlify, etc.)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY; // Usar la service key para operaciones de backend

// Solo inicializa si las variables están presentes
const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

async function saveMessageToSupabase(name, email, message) {
  if (!supabase) {
    console.error("Variables de entorno de Supabase no configuradas.");
    throw new Error("Configuración de base de datos incompleta.");
  }

  const { data, error } = await supabase
    .from('mensajes_contacto') // Nombre de tu tabla
    .insert([
      { nombre: name, email: email, mensaje: message }, // los nombres de columna deben coincidir con tu tabla
    ])
    .select(); // Opcional: para obtener los datos insertados

  if (error) {
    console.error('Error de Supabase:', error);
    throw new Error(error.message);
  }
  return data;
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message || !email.includes('@')) {
      return res.status(400).json({ message: 'Campos inválidos o faltantes.' });
    }

    if (!supabase) {
        return res.status(500).json({ message: 'Servicio de base de datos no configurado.' });
    }

    try {
      const savedMessage = await saveMessageToSupabase(name, email, message);
      res.status(200).json({ message: 'Mensaje recibido y guardado con éxito', data: savedMessage });
    } catch (error) {
      console.error("Error al procesar el mensaje:", error.message);
      res.status(500).json({ message: 'Error interno del servidor al guardar el mensaje.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} No Permitido`);
  }
}