import Head from 'next/head'
import Assets from '../components/Home/Assets/Assets'
import Transactions from '../components/Home/Transactions/Transactions'
import TopComp from '../components/Home/Welcome/TopComp'

const App = () => {
  return (
    <div className="home-bg min-h-screen w-full py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopComp />
      <div className="mt-20 flex w-full items-center justify-center overflow-visible">
        <p className="card-text mx-40 px-20 text-center text-5xl">
          Manage all your assets of the blockchain world in one place
        </p>
      </div>
      <div className="flex w-full items-center self-center p-11">
        <Assets />
      </div>
      <div className="flex items-center justify-center px-11 pb-3">
        <Transactions />
      </div>
    </div>
  )
}

export default App
