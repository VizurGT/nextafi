// pages/index.js
import Head from 'next/head';
import { Inter } from 'next/font/google';
import { pageData } from 'data/pageData';

import AppHeader from 'components/layout/AppHeader';
import AppFooter from 'components/layout/AppFooter';
import MarketPulseSection from 'components/sections/MarketPulseSection';
import FutureTrendsSection from 'components/sections/FutureTrendsSection';
import RoadmapSection from 'components/sections/RoadmapSection';
import ContactSection from 'components/sections/ContactSection'; // Importar la nueva sección

// Configuración de la fuente Inter con next/font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter', // Para usar como variable CSS si se desea
});

export default function HomePage() {
  const siteTitle = "AFI Smart: Publicidad, IA y Estrategias para Pymes";
  const siteDescription = "Análisis del mercado de publicidad digital en Chile 2024, tendencias con IA, y hoja de ruta con herramientas para potenciar tu pyme o emprendimiento chileno.";
  // ¡IMPORTANTE! Reemplaza 'https://www.afiempresas.cl' con tu dominio real cuando lo tengas
  const siteUrl = "https://www.afiempresas.cl";
  const siteImage = `${siteUrl}/og-image.jpg`; // Debes crear esta imagen (ej. 1200x630px) y ponerla en /public
  const siteLogo = `${siteUrl}/logo.png`; // Debes crear este logo y ponerlo en /public

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": siteUrl
    },
    "headline": siteTitle,
    "description": siteDescription,
    "image": siteImage,
    "author": {
      "@type": "Organization",
      "name": "AFI Smart"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AFI Smart",
      "logo": {
        "@type": "ImageObject",
        "url": siteLogo
      }
    },
    "datePublished": "2025-06-04", // Actualiza esta fecha según corresponda
    "dateModified": "2025-06-04",  // Actualiza esta fecha según corresponda
    "keywords": "publicidad digital chile, marketing digital pymes chile, ia para negocios chile, estrategias digitales chile, herramientas marketing digital, contacto pymes chile",
    "inLanguage": "es-CL",
    "potentialAction": {
        "@type": "ReadAction",
        "target": [siteUrl]
    }
  };

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <link rel="icon" href="/favicon.ico" />

        {/* SEO para Chile y General */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={structuredData.keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={siteUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={siteImage} />
        <meta property="og:locale" content="es_CL" />
        <meta property="og:site_name" content="AFI Smart" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={siteUrl} />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={siteImage} />
        {/* <meta name="twitter:site" content="@TuUsuarioTwitter" /> Opcional */}

        {/* Datos Estructurados JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      {/* Aplicar la clase de la fuente globalmente */}
      <div className={`${inter.variable} font-sans`}>
        <AppHeader />
        <main> {/* Contenedor principal del contenido semántico */}
          <div className="container mx-auto px-6 py-8 md:py-12"> {/* Contenedor para el padding común */}
            <MarketPulseSection
              inversionData={pageData.inversion}
              canalesData={pageData.canales}
              fullCanalesLabels={pageData.canales.labels}
            />
            <FutureTrendsSection trendsData={pageData.trends} />
            <RoadmapSection tabsData={pageData.tabs} toolsData={pageData.tools} />
          </div>
          {/* La sección de contacto puede ir fuera del padding común si tiene su propio fondo y padding */}
          <ContactSection />
        </main>
        <AppFooter />
      </div>
    </>
  );
}