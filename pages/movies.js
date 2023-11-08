import Head from 'next/head';
import Template from '../components/template.js';
import utilStyles from '../styles/utils.module.css';
import Image from 'next/image';

export default function Movies() {
  return (
    <Template>
      <Head>
        <title>Movies</title>
        <link rel='icon' href='../misc/favicon.ico'/>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          booty munching bozos
        </p>
      </section>
    </Template>
  );
}
