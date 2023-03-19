import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { StateContextProvider } from '../context'
import { Route, Routes } from 'react-router-dom';
import CampaignDetails from './CampaignDetails/[PostId]';

const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }: AppProps) {
  return (

    <ThirdwebProvider desiredChainId={activeChainId}>
      <div className=' relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row '>
        <StateContextProvider>
          <div className='sm:flex hidden mr-10 relative'>
            <Sidebar />
          </div>
          <div className='flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5 '>
            <Navbar />
            <Component {...pageProps} />
          </div>
        </StateContextProvider>
      </div>
    </ThirdwebProvider>

  )
}

export default MyApp
