import React from 'react'
import {
  ApeNft,
  DAI,
  DOGE,
  KittyNft,
  LINK,
  PunkNft,
} from '../../../Icons/AssetIcons'
import { AvaxLogo, BSCLogo, ETHLogo, PolygonLogo } from '../../../Icons/Icons'

const Top = () => {
  return (
    <div className={`flex w-5/6 flex-col justify-center`}>
      {/* Cross Chain */}
      <div className="flex min-h-[12rem] w-full flex-col items-center bg-[#373737] lgx:mt-7 lgx:min-h-[8rem]">
        <p className="h-1/4 w-full p-3 text-center text-3xl font-extrabold lgx:text-2xl">
          Cross Chain
        </p>
        {/* pc */}
        <div className="flex h-3/4 w-full items-center justify-around px-7 lgx:hidden">
          <div className="overflow-hidden rounded-full">
            <ETHLogo height={70} width={70} />
          </div>
          <div className="overflow-hidden rounded-full">
            <BSCLogo height={70} width={70} />
          </div>
          <div className="overflow-hidden rounded-full">
            <AvaxLogo height={70} width={70} />
          </div>

          <div className="overflow-hidden rounded-full">
            <PolygonLogo height={70} width={70} />
          </div>
        </div>
        {/* mobile */}
        <div className="flex h-3/4 w-full items-center justify-around px-7 lg:hidden">
          <div className="overflow-hidden rounded-full">
            <ETHLogo height={40} width={40} />
          </div>
          <div className="overflow-hidden rounded-full">
            <BSCLogo height={40} width={40} />
          </div>
          <div className="overflow-hidden rounded-full">
            <AvaxLogo height={40} width={40} />
          </div>

          <div className="overflow-hidden rounded-full">
            <PolygonLogo height={40} width={40} />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="flex w-full items-center justify-between pt-2">
        {/* Tokens */}
        <div className="min-h-[10rem] w-[49%]  bg-[#373737] lgx:min-h-[8rem] lgx:w-[45%]">
          <p className="h-1/4 w-full p-3 text-center text-3xl font-extrabold">
            Tokens
          </p>
          <div className="flex h-3/4 w-full items-center  justify-around px-4 lgx:hidden">
            <DAI height={50} width={50} />
            <DOGE height={50} width={50} />
            <LINK height={50} width={50} />
          </div>
          <div className="flex h-3/4 w-full items-center  justify-around px-4 lg:hidden">
            <DAI height={40} width={40} />
          </div>
        </div>
        {/* NFTs */}
        <div className="min-h-[10rem] w-[49%]  bg-[#373737]   lgx:min-h-[8rem] lgx:w-[45%] ">
          <p className="h-1/4 w-full p-3 text-center text-3xl font-extrabold">
            NFT
          </p>
          <div className="flex h-3/4  w-full items-center justify-around px-4 lgx:hidden">
            <ApeNft height={50} width={50} />
            <PunkNft height={50} width={50} />
            <KittyNft height={50} width={50} />
          </div>
          <div className="flex h-3/4 w-full items-center  justify-around px-4 lg:hidden">
            <KittyNft height={50} width={50} />
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  )
}

export default Top
