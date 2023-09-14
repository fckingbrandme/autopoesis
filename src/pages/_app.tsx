import { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>
        Autopoiesis || Autogestión emocional a través del arte y la magia
      </title>

      <link rel="icon" href="./favicon.ico" />
      <link rel="shortcut icon" href="./favicon.ico" />
      <link rel="apple-touch-icon" href="./favicon.ico" />

      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Fcking Brand Me" />
      <meta name="theme-color" content="#050917" />
      <meta
        name="keywords"
        content="Autopoiesis, art, tarot, carna natal, carta solar, astrologia, consultoria, sahumadora, sanación, espiritualidad, landingpage, Colombia, latinoamerica"
      />
      <meta
        name="description"
        content="Autopoiesis se enfoca en lograr que cada persona recuerde que es un ser capaz de autogestionar su vida, entrando en sus aguas profundas, reconectando con sus memorias y su intuición con el fin de poner la mente al servicio de su espíritu, para que tenga la capacidad de elegir desde el corazón y logre vivir en plenitud y armonía consigo mismo y su entorno."
        key="desc"
      />

      <meta
        property="og:title"
        content="Autopoiesis || Autonomía del ser"
        key="ogtitle"
      />
      <meta property="og:image" content="./favicon-32x32.png" />
      <meta
        property="og:description"
        content="Autopoiesis se enfoca en lograr que cada persona recuerde que es un ser capaz de autogestionar su vida, entrando en sus aguas profundas, reconectando con sus memorias y su intuición con el fin de poner la mente al servicio de su espíritu, para que tenga la capacidad de elegir desde el corazón y logre vivir en plenitud y armonía consigo mismo y su entorno."
        key="ogdescription"
      />
      <meta property="og:image:type" content="<generated>" />
      <meta property="og:image:width" content="<generated>" />
      <meta property="og:image:height" content="<generated>" />
      <meta property="og:image:alt" content="<generated>" />
    </Head>

    <Component {...pageProps} />
  </>
);

export default MyApp;
