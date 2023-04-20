import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link
          rel="canonical"
          href="https://mrbanano.github.io/Curriculum-vitae-react/"
        />
        <meta name="author" content="Alvaro Castillo Carreño" />
        <link rel="manifest" href="assets/manifest.json" />
        <meta name="description" content="prueba de video " />
        <meta
          name="keywords"
          content="Alvaro,Castillo,Carreño,ingenerio,sistemas,react,html,css,js,cv,puebla,mexico,antesedentes"
        />
        {/*<!---caso 1 -->*/}
        <meta property="og:title" content="Título del video" />
        <meta property="og:description" content="Descripción del video" />
        <meta
          property="og:image"
          content="https://ejemplo.com/imagen-min.png"
        />
        <meta
          property="og:video"
          content="https://vod.api.video/vod/vi7k65j5G4OeEEWkGzvCwfUT/mp4/source.mp4"
        />
        <meta property="og:video:type" content="video/mp4" />
        <meta property="og:video:width" content="640" />
        <meta property="og:video:height" content="360" />
        <meta
          property="og:video:secure_url"
          content="https://vod.api.video/vod/vi7k65j5G4OeEEWkGzvCwfUT/mp4/source.mp4"
        />

        {/*<!---caso 2-->*/}

        <meta name="og:title" content="Título del video" />
        <meta name="og:description" content="Descripción del video" />
        <meta name="og:image" content="https://ejemplo.com/imagen-min.png" />
        <meta
          property="og:video"
          content="https://vod.api.video/vod/vi7k65j5G4OeEEWkGzvCwfUT/mp4/source.mp4"
        />
        <meta name="og:video:type" content="video/mp4" />
        <meta name="og:video:width" content="640" />
        <meta name="og:video:height" content="360" />
        <meta
          property="og:video:secure_url"
          content="https://vod.api.video/vod/vi7k65j5G4OeEEWkGzvCwfUT/mp4/source.mp4"
        />
        {/*<!---caso 3 -->*/}
        <meta property="og:title" content="Título del video" />
        <meta property="og:description" content="Descripción del video" />
        <meta
          property="og:image"
          content="https://ejemplo.com/imagen-min.png"
        />
        <meta
          property="og:video"
          content="https://embed.api.video/vod/vi7k65j5G4OeEEWkGzvCwfUT"
        />
        <meta property="og:video:type" content="video/mp4" />
        <meta property="og:video:width" content="640" />
        <meta property="og:video:height" content="360" />
        <meta
          property="og:video:secure_url"
          content="https://embed.api.video/vod/vi7k65j5G4OeEEWkGzvCwfUT"
        />

        {/*<!---caso 4 -->*/}
        <meta name="og:title" content="Título del video" />
        <meta name="og:description" content="Descripción del video" />
        <meta name="og:image" content="https://ejemplo.com/imagen-min.png" />
        <meta
          property="og:video"
          content="https://embed.api.video/vod/vi7k65j5G4OeEEWkGzvCwfUT"
        />
        <meta name="og:video:type" content="video/mp4" />
        <meta name="og:video:width" content="640" />
        <meta name="og:video:height" content="360" />
        <meta
          property="og:video:secure_url"
          content="https://embed.api.video/vod/vi7k65j5G4OeEEWkGzvCwfUT"
        />

        <title>Título de la página</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Ejemplo</h1>
        <video width="640" height="360" controls>
          <source
            src="https://vod.api.video/vod/vi7k65j5G4OeEEWkGzvCwfUT/mp4/source.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </main>
    </div>
  );
}
