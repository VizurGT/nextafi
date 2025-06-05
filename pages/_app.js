// pages/_app.js
import 'styles/globals.css'; // Importa tus estilos globales y de Tailwind

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;