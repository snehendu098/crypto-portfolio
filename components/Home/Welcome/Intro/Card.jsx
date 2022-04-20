import React from 'react'
import { useMoralis } from 'react-moralis'
import { shortenAddress } from '../../../../utils/shortenAddress'
import { LogoDark } from '../../../Icons/LayoutIcons'

const Card = () => {
  const { account, isAuthenticated } = useMoralis()
  return (
    <div className="bg-card lgx:h-30 mt-7 flex h-52  w-96 rounded-xl lgx:w-[90vw]">
      <div className="flex w-4/5 flex-col-reverse">
        <div className="h-3/5 w-full px-8">
          <p className="card-text text-3xl font-extrabold">Welcome</p>
          <p className="figma-shadow mt-2 inline-block rounded-full bg-[#242424] p-[3px] px-20  lgx:px-10">
            {account && isAuthenticated
              ? shortenAddress(account)
              : shortenAddress(`0x0`)}
          </p>
        </div>
      </div>
      <div className="flex h-full w-1/5 flex-col items-center justify-between py-4 ">
        <LogoDark height={60} width={60} />
        <div className="rounded-full bg-slate-600 p-4"></div>
      </div>
    </div>
  )
}

export default Card
