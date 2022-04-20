import React from 'react'
import { query } from '../../utils/query'
import { shortenAddress } from '../../utils/shortenAddress'
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'
import { IoSend } from 'react-icons/io5'
import Image from 'next/image'
import { useChain } from 'react-moralis'

const SingleToken = ({ data }) => {
  const { chainId } = useChain()
  return (
    <div
      key={data?.symbol}
      className="flex flex-col items-center justify-center rounded-md bg-slate-800 p-3 shadow-lg"
    >
      {/* <img src={data?.logo} alt="TOKEN" className="w-[70%] p-3" /> */}
      <div className="mb-1">
        {!data?.logo ? (
          <Jazzicon
            diameter={150}
            seed={jsNumberForAddress(data?.token_address)}
          />
        ) : (
          <Image src={data?.logo} height={150} width={150} />
        )}
      </div>
      <p
        onClick={() =>
          window.open(query(chainId, data?.token_address, 'token'), '_blank')
        }
        className="w-[80%] rounded-full bg-slate-500 text-center font-bold"
      >
        {shortenAddress(data?.token_address)}
      </p>
      <p className="font-bold">{data?.name}</p>
      <p className="text-md font-bold text-slate-200 ">
        {parseInt(data?.balance) / Math.pow(10, parseInt(data?.decimals)) ||
          '?'}
      </p>
      {/* TODO */}
      {/* <div className="flex w-full items-center justify-between">
                <div className="mt-1 cursor-pointer rounded-md bg-green-600 p-2 text-xl  text-slate-100 hover:bg-green-900">
                  <IoSend />
                </div>
                <div className="ml-5 flex h-full items-center">
                  <div className="overflow-hidden rounded-full">{Comp}</div>
                </div>
              </div> */}
    </div>
  )
}

export default SingleToken
