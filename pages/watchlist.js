import Link from 'next/link';
import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import Template from '../components/layout'

export default function WatchList() {
    return (
      
      <Template>
        <Head>
          <title>Watchlist</title>
          <link rel='icon' href='../misc/sfavicon.ico'/>
        </Head>

        <section className={utilStyles.headingMd}>
          <p>goofy stuff you abouta watch</p>
          <p>
            booty munching bozos
          </p>


        {/* Eventually add a list here to display database information */}
        </section>
      </Template>

    );
}
    

{/*  <div className={utilStyles.container}>

        <Head>
          <title>watchlist</title>
        </Head>

          <div style={{textAlign:'center'}}>
            <h1>
              goofy stuff
            </h1>


          </div>

          <body>
            <Link className={utilStyles.link} href="/">back to home</Link>
          </body>
    </div> */}

