import Grid from '@/components/Grid'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sanders Website</title>
        <meta name="description" content="My personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Grid />
      </main>
    </>
  )
}
