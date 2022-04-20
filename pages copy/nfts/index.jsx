import React, { useEffect, useState } from 'react'
import { useChain, useMoralis, useNFTBalances } from 'react-moralis'
import { useDispatch } from 'react-redux'
import SingleNFt from '../../components/NFT/SingleNFt'

const App = () => {
  const { getNFTBalances } = useNFTBalances()
  const { chainId } = useChain()
  const { isAuthenticated } = useMoralis()

  const [nft, setNft] = useState([])

  const fetchNFTs = async () => {
    if (isAuthenticated) {
      const nfts = await getNFTBalances({ params: { chain: chainId } })
      setNft(nfts?.result)
    }
  }

  const dispach = useDispatch()

  useEffect(() => {
    if (isAuthenticated) {
      fetchNFTs()
      console.log(nft)
    }
  }, [isAuthenticated, chainId])

  return (
    <div className="ml-4 flex h-full flex-col  p-7">
      {isAuthenticated ? (
        <>
          <p className="card-text w-full text-center text-xl font-extrabold ">
            Your NFTs
          </p>
          {nft.length > 0 ? (
            <div className="align mt-6 grid grid-cols-2 items-center justify-center gap-4">
              {nft.map((i, e) => (
                <React.Fragment key={e}>
                  {i.metadata ? <SingleNFt data={i} /> : null}
                </React.Fragment>
              ))}
            </div>
          ) : (
            <p className="mt-4 flex h-[5rem] items-center justify-center bg-slate-700 text-center">
              No NFTs found
            </p>
          )}
        </>
      ) : (
        <p>
          <span
            onClick={() => dispatch({ type: 'TOGGLE_AUTH_HOLDER' })}
            className="cursor-pointer text-yellow-500"
          >
            Connect Wallet
          </span>{' '}
          to get nfts
        </p>
      )}
    </div>
  )
}

export default App
