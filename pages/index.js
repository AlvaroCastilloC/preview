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

        {/*<!---caso 2-->*/}

        <meta name="og:title" content="Título del video" />
        <meta name="og:description" content="Descripción del video" />
        <meta
          name="og:image"
          content="https://vod.api.video/vod/vi7k65j5G4OeEEWkGzvCwfUT/thumbnail.jpg"
        />
        <meta
          name="og:video"
          content="https://embed.api.video/vod/vi7k65j5G4OeEEWkGzvCwfUT"
        />
        <meta
          name="og:video:url"
          content="https://embed.api.video/vod/vi7k65j5G4OeEEWkGzvCwfUT"
        />
        <meta
          name="og:video:secure_url"
          content="https://embed.api.video/vod/vi7k65j5G4OeEEWkGzvCwfUT"
        />
        <meta name="og:video:type" content="video/mp4" />
        <meta name="og:video:width" content="640" />
        <meta name="og:video:height" content="360" />

        <meta name="og:image:alt" content="alt" />
        <meta name="og:updated_time" content="yyyy-mm-ddThh:mm:ssTZD" />

        <meta name="og:locale" content="es_MX" />
        <meta name="og:type" content="website" />

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
