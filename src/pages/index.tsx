import Head from 'next/head'
import Footer from '@/components/Footer'
import Grid from '@/components/Grid'
import Header from '@/components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sanders Website</title>
        <meta name="description" content="Sander personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Grid />
        <Footer />
      </main>
    </>
  )
}
