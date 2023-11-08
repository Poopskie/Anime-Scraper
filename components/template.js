import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Template({children, siteTitle}) {
  return (
    <div className={styles.container}>
        <Head>
          {siteTitle}
        </Head>
        <header className={styles.header}>

        </header>
        <main>pp{children}</main>

        <div className={styles.backToHome}>
            <Link href="/">← Back to home</Link>
        </div>

    </div>
  );
}
