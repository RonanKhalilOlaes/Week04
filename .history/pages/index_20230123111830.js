import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Example #1</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <h1 className='styles.title'>
            Welcome to my home page
          </h1>

            <Link href="/about" className={styles.grid}>
              <h2>About page</h2>
            </Link>

              <div className={styles.grid_container} style={{display: "grid"}}>
                <h2>What does C.R.U.D. stands for?</h2>
            <ul>
              <li>Create</li>
              <li>Read</li>
              <li>Update</li>
              <li>Delete</li>
            </ul>
            <div className={styles.grid}>

            </div>
            </div>
      </main>
    </>
  )
}
