// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="es-CL"> {/* Establece el idioma para todo el documento */}
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}