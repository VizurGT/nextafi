// data/pageData.js
export const pageData = {
  inversion: {
    labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    data: [26.2, 32.5, 44.8, 47.3, 48.3, 48.5, 58]
  },
  canales: {
    labels: ['Redes Sociales', 'SEM (Buscadores)', 'Video Online', 'Display (Banners)', 'Marketing Influencers', 'Retail Media', 'In-App'],
    data: [311, 283, 275, 284, 56, 1, 377] // En MM USD para el gráfico
  },
  trends: [
    {
      icon: '🧠',
      title: 'Inteligencia Artificial',
      summary: 'La IA se vuelve un pilar para la microsegmentación, creación de contenido y optimización de campañas en tiempo real.',
      details: 'La IA generativa (GenAI) como Gemini facilitará la creación rápida de textos, imágenes y videos para anuncios, optimizando costos. Permitirá la optimización en tiempo real de las campañas, ajustando pujas y creatividades para maximizar el ROAS. Se espera que más del 70% de la publicidad digital en Chile se gestione mediante plataformas automatizadas en 2025.',
      color: 'primary'
    },
    {
      icon: '📱',
      title: 'Video Corto e Inteligente',
      summary: 'El formato de TikTok y Reels seguirá dominando, evolucionando hacia experiencias "shoppable" y contenido inmersivo.',
      details: 'La publicidad en video digital creció un 15% en 2024. Las generaciones más jóvenes prefieren este formato, y las marcas que logren integrar opciones de compra directa en sus videos (video "shoppable") tendrán una ventaja competitiva.',
      color: 'secondary'
    },
    {
      icon: '🌐',
      title: 'Realidad Aumentada (AR/VR)',
      summary: 'Ofrecerán experiencias de marca más inmersivas y memorables, como pruebas virtuales de productos ("try-on").',
      details: 'Aunque su adopción masiva aún está en desarrollo, la AR y VR tienen un potencial enorme para publicidad experiencial, permitiendo a los usuarios interactuar con productos desde sus casas de una manera completamente nueva.',
      color: 'tertiary'
    },
    {
      icon: '💬',
      title: 'Marketing Conversacional',
      summary: 'La interacción instantánea y personalizada a través de chatbots y asistentes virtuales se volverá más común.',
      details: 'Los chatbots impulsados por IA mejoran la atención al cliente 24/7 y la cualificación de leads, liberando tiempo a los emprendedores y ofreciendo respuestas inmediatas a los consumidores.',
      color: 'quaternary'
    },
    {
      icon: '🛡️', // Corregido el ícono que era un placeholder
      title: 'Privacidad y First-Party Data',
      summary: 'Ante el fin de las cookies de terceros, las estrategias de datos de origen y la publicidad contextual ganan protagonismo.',
      details: 'Las empresas deberán fortalecer la recopilación y gestión de datos de origen (first-party data) con consentimiento explícito. La transparencia en el uso de datos será crucial para mantener la confianza del consumidor.',
      color: 'quinary'
    },
    {
      icon: '🛒',
      title: 'Retail Media',
      summary: 'La publicidad en plataformas de e-commerce como Mercado Libre y Falabella continuará su expansión acelerada.',
      details: 'Ofrece a las marcas la oportunidad de llegar a los consumidores en el punto exacto de compra. Se proyecta que este segmento triplique su inversión en Chile hacia 2028.',
      color: 'senary'
    }
  ],
  tabs: [
    {
      id: 'primerosPasos',
      title: 'Primeros Pasos',
      content: `
        <h4 class="text-2xl font-bold mb-4">Superando la Barrera de la "Nula Presencia Online"</h4>
        <p class="mb-6 text-slate-600">Para emprendimientos que parten de cero, el objetivo es establecer una base sólida de forma rápida y eficiente. La IA puede ser tu gran aliada.</p>
        <ul class="space-y-4 text-slate-700">
            <li class="flex items-start"><span class="bg-blue-100 text-blue-600 font-bold rounded-full h-6 w-6 text-center mr-4 flex-shrink-0">1</span><div><strong class="font-semibold block">Creación Rápida de Perfiles Esenciales:</strong> Optimiza tu "Google Business Profile" para visibilidad local y elige 1-2 redes sociales clave (ej. Instagram para productos visuales). Usa IA como Gemini para redactar biografías atractivas.</div></li>
            <li class="flex items-start"><span class="bg-blue-100 text-blue-600 font-bold rounded-full h-6 w-6 text-center mr-4 flex-shrink-0">2</span><div><strong class="font-semibold block">Genera un "Kit de Contenido Inicial" con IA:</strong> Supera el "bloqueo de la página en blanco". Pídele a Gemini ideas y borradores para tus primeras 10-15 publicaciones. Usa Canva para crear plantillas visuales consistentes.</div></li>
            <li class="flex items-start"><span class="bg-blue-100 text-blue-600 font-bold rounded-full h-6 w-6 text-center mr-4 flex-shrink-0">3</span><div><strong class="font-semibold block">Define tu Público Objetivo:</strong> Describe a tu cliente ideal y usa IA para refinar y estructurar un perfil de "buyer persona". Esto te guiará para crear contenido relevante.</div></li>
            <li class="flex items-start"><span class="bg-blue-100 text-blue-600 font-bold rounded-full h-6 w-6 text-center mr-4 flex-shrink-0">4</span><div><strong class="font-semibold block">Automatiza Tareas Repetitivas:</strong> Configura respuestas automáticas básicas en redes sociales o un chatbot sencillo (ej. Tidio) para gestionar consultas iniciales y dar una imagen profesional.</div></li>
        </ul>
      `
    },
    {
      id: 'ia',
      title: 'Potencia con IA',
      content: `
        <h4 class="text-2xl font-bold mb-4">Empoderando a Emprendedores con IA y Herramientas Digitales</h4>
        <p class="mb-6 text-slate-600">La consultora debe enseñar a los emprendedores a utilizar herramientas de IA accesibles para que gestionen su marketing de forma autónoma y efectiva.</p>
          <ul class="space-y-4 text-slate-700">
            <li class="flex items-start"><span class="text-2xl mr-3">💡</span><div><strong class="font-semibold block">Creación de Contenido:</strong> Usa Gemini para generar borradores de posts, blogs y emails. Usa Canva con IA para crear imágenes y videos simples.</div></li>
            <li class="flex items-start"><span class="text-2xl mr-3">🎯</span><div><strong class="font-semibold block">Análisis de Audiencia:</strong> Pídele a Gemini que analice comentarios de redes sociales para identificar temas recurrentes y el sentimiento general.</div></li>
            <li class="flex items-start"><span class="text-2xl mr-3">🚀</span><div><strong class="font-semibold block">Optimización de Anuncios:</strong> Genera múltiples variaciones de textos para anuncios en Google o Meta con IA para realizar pruebas A/B de forma más eficiente.</div></li>
            <li class="flex items-start"><span class="text-2xl mr-3">📚</span><div><strong class="font-semibold block">Capacitación Práctica:</strong> Ofrece talleres sobre cómo formular "prompts" efectivos en Gemini y cómo usar herramientas freemium para maximizar resultados con bajo presupuesto.</div></li>
        </ul>
      `
    },
    {
      id: 'comunidad',
      title: 'Crea tu Comunidad',
      content: `
        <h4 class="text-2xl font-bold mb-4">Estrategias para Construir una Comunidad Activa</h4>
        <p class="mb-6 text-slate-600">Una comunidad leal es el activo más valioso de un emprendimiento. Fomenta la participación y el sentido de pertenencia con estas tácticas.</p>
          <ul class="space-y-4 text-slate-700">
            <li class="flex items-start"><span class="text-2xl mr-3">✍️</span><div><strong class="font-semibold block">Contenido de Valor y Relevancia Local:</strong> Crea contenido que resuene con el público chileno. Responde preguntas, ofrece soluciones y usa temáticas locales (Fiestas Patrias, modismos). La autenticidad conecta.</div></li>
            <li class="flex items-start"><span class="text-2xl mr-3">💰</span><div><strong class="font-semibold block">Publicidad de Bajo Costo y Alta Segmentación:</strong> Usa Meta Ads (Facebook/Instagram) para llegar a tu nicho específico con presupuestos controlados. Enfócate en campañas de interacción para crecer tu comunidad.</div></li>
            <li class="flex items-start"><span class="text-2xl mr-3">🤝</span><div><strong class="font-semibold block">Colabora con Micro-Influencers:</strong> Identifica nano y micro-influencers chilenos en tu nicho. Suelen tener audiencias más comprometidas y tarifas más accesibles.</div></li>
            <li class="flex items-start"><span class="text-2xl mr-3">📸</span><div><strong class="font-semibold block">Fomenta el Contenido Generado por Usuario (CGU):</strong> Invita a tus clientes a compartir sus experiencias usando un hashtag. Compartir este contenido humaniza tu marca y construye prueba social.</div></li>
              <li class="flex items-start"><span class="text-2xl mr-3">📊</span><div><strong class="font-semibold block">Mide lo que Importa:</strong> Enfócate en la tasa de interacción, comentarios y sentimiento de la comunidad, no solo en el número de seguidores. Usa la IA para analizar el sentimiento de los comentarios y entender el "pulso" de tu comunidad.</div></li>
        </ul>
      `
    },
    {
      id: 'herramientas',
      title: 'Herramientas',
      content: '' // El contenido se genera por ToolsGrid
    }
  ],
  tools: [
    { name: 'Gemini', category: 'IA', description: 'Para redacción, ideas, resúmenes e investigación.' },
    { name: 'Canva', category: 'Diseño', description: 'Diseño gráfico fácil, con funciones de IA para texto e imagen.' },
    { name: 'CapCut', category: 'Diseño', description: 'Editor de video gratuito y popular, ideal para Reels y TikTok.' },
    { name: 'Meta Business Suite', category: 'Gestión', description: 'Gestiona y programa posts en Facebook e Instagram gratis.' },
    { name: 'Tidio', category: 'Marketing', description: 'Plan gratuito para chat en vivo y chatbots básicos en tu web.' },
    { name: 'Mailchimp', category: 'Marketing', description: 'Plan gratuito para empezar con email marketing y newsletters.' },
    { name: 'Trello', category: 'Gestión', description: 'Organiza tareas y proyectos de marketing de forma visual.' },
    { name: 'Google Analytics', category: 'Marketing', description: 'Análisis web gratuito para entender a tus visitantes.' },
    { name: 'ChatGPT', category: 'IA', description: 'Alternativa potente para generación de texto e ideas.' },
    { name: 'HubSpot CRM', category: 'Gestión', description: 'Plan gratuito para gestión de clientes y automatización.' }
  ]
};