import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="h-full">
      <Head>
        <title>thirdfunding</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className='flex h-full items-center justify-center py-2 w-full border-4'>
        <h1>
          Gopal verma
        </h1>
      </div>
    </div>
  )
}

export default Home
