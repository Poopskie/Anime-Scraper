import Link from 'next/link';
import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';

export default function WatchList() {
    return (
      <div className={utilStyles.container}>

        <Head>
          <title>watchlist</title>
        </Head>

          <div style={{textAlign:'center'}}>
            <h1>
              goofy stuff
            </h1>
            <body>
              <Link className={utilStyles.link} href="/">back to home</Link>
            </body>

          </div>



      </div>
    );
  }