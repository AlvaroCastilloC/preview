import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="og:title" content="Título del video" />
        <meta name="og:description" content="Descripción del video" />
        <meta name="og:image" content="https://ejemplo.com/imagen-min.png" />
        <meta
          name="og:video"
          content="https://vod.api.video/vod/vi7k65j5G4OeEEWkGzvCwfUT/mp4/source.mp4"
        />
        <meta name="og:video:type" content="video/mp4" />
        <meta name="og:video:width" content="640" />
        <meta name="og:video:height" content="360" />
        <meta
          name="og:video:secure_url"
          content="https://vod.api.video/vod/vi7k65j5G4OeEEWkGzvCwfUT/mp4/source.mp4"
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
