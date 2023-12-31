import utilStyles from '../styles/utils.module.css';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import ReactDOM from 'react-dom/client';
import { useState } from 'react';

export default function Anime(){
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${name}`)
      }

    return(
        <div className={utilStyles.container}>
            <Head>
                <title>
                    Anime yay!!!
                </title>
                <link rel='icon' href='/favicon.png' type='image/x-icon'/>
            </Head>

            <div style={{padding:50}}>
                <h1 className= {utilStyles.list} style={{textAlign: "center"}}>
                    peeeeeeeeenis Anime coming soon never
                </h1>
            </div>

            <div className={utilStyles.card}>
                <Image 
                    src='/oregairu.png'
                    width={200} height={200}
                    alt='oregairu'/>
                <form style={{display:'flex', flexDirection:'column', }}>
                    <h2>input anime name</h2>
                        <input
                            type="text" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <p/>
                    <input type='submit' value='add to watchlist'/>
                </form>
            </div>


            <p style={{textAlign:'center'}}>
                <Link href='/'>back to home</Link> 
            </p>

        </div>




    );


}