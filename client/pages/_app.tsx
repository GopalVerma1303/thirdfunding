import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { StateContextProvider } from '../context'
import LoadingBar from 'react-top-loading-bar'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { MiscellaneousStateContextProvider } from '../miscellaneous_contexts'

const activeChainId = ChainId.Mumbai;


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setProgress(40)
    })
    router.events.on('routeChangeComplete', () => {
      setProgress(100)
    })
  }, [])


  return (

    <ThirdwebProvider activeChain={activeChainId}>
      <MiscellaneousStateContextProvider>
        <div className=' relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row'>
          <StateContextProvider>
            <div className='sm:flex hidden mr-10 relative'>
              <Sidebar />
            </div>
            <div className='flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5 overflow-y-scroll'>
              <Navbar />
              <LoadingBar
                color='#D30384'
                progress={progress}
                waitingTime={400}
                onLoaderFinished={() => setProgress(0)}
              />
              <Component {...pageProps} />
            </div>
          </StateContextProvider>
        </div>
      </MiscellaneousStateContextProvider>
    </ThirdwebProvider >

  )
}

export default MyApp
