import Link from 'next/link'
import React from 'react'
import { DOGE, KittyNft } from '../Icons/AssetIcons'
import { ETHLogo } from '../Icons/Icons'

const TransactionOptions = () => {
  return (
    <div className="grid w-full grid-cols-1  gap-4 px-[9rem]">
      <Link href={'/transactions/native'}>
        <div className="flex h-[10rem] w-full cursor-pointer overflow-hidden rounded-md bg-[#333] transition duration-700 hover:bg-slate-900">
          <div className="flex w-[10rem] items-center justify-center bg-[#1b1b1b]">
            <div className="overflow-hidden rounded-full">
              <ETHLogo height={120} width={120} />
            </div>
          </div>
          <div className="flex w-full flex-col items-center  ">
            <p className="mt-3 text-2xl font-extrabold uppercase">
              NATIVE Currencies
            </p>
            <p className="text-md mt-7">
              List of transactions of all the Native Currencies like ETH, MATIC,
              BNB
            </p>
          </div>
        </div>
      </Link>
      <Link href={'/transactions/token'}>
        <div className="flex h-[10rem] w-full cursor-pointer flex-row-reverse overflow-hidden rounded-md bg-[#333] transition duration-700 hover:bg-slate-900">
          <div className="flex w-[10rem] items-center justify-center bg-[#1b1b1b]">
            <div className="overflow-hidden rounded-full">
              <DOGE height={120} width={120} />
            </div>
          </div>
          <div className="flex w-full flex-col items-center  ">
            <p className="mt-3 text-2xl font-extrabold">TOKENS</p>
            <p className="text-md mt-7">
              List of transactions of all the Tokens
            </p>
          </div>
        </div>
      </Link>
      <Link href={'/transactions/nfts'}>
        <div className="flex h-[10rem] w-full cursor-pointer flex-row overflow-hidden rounded-md bg-[#333] transition duration-700 hover:bg-slate-900">
          <div className="flex w-[10rem] items-center justify-center bg-[#1b1b1b]">
            <div className="overflow-hidden rounded-full">
              <KittyNft height={120} width={120} />
            </div>
          </div>
          <div className="flex w-full flex-col items-center  ">
            <p className="mt-3 text-2xl font-extrabold">NFTs</p>
            <p className="text-md mt-7">List of NFTs of all standards</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default TransactionOptions
