import Head from 'next/head';
import styles from '../styles/home.module.css';
import utilStyles from '../styles/utils.module.css';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>my cheeks hurt</title>
      </Head>

      <main>
        <h1 className={styles.title}>
          Anime Scraper
        </h1>

        <p className={styles.description}>
          Pick your Weekly favourite Anime
        </p>

        <p className={styles.description}>
          take a <Link href='/testpage' className={styles.link}>peek</Link> at your <Link href="/watchlist" className={styles.link}> watchlist </Link>
        </p>

        <div className={styles.grid} style={{marginBottom:200}}>
          <Link href='/anime' className={styles.card}>
            <h3>Anime</h3>
            <p>Find the most watched weekly Anime</p>
          </Link>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Movies</h3>
            <p>Find the most watched weekly Movies</p>
          </a>

        </div>
      </main>

      <footer>
        <a href='https://github.com/Poopskie'>
          Developed by Poopskie :)
        </a>
      </footer>

    </div>
  );
}