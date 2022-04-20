import React, { useEffect, useState } from 'react'
import { useChain } from 'react-moralis'
import { AvaxLogo, BSCLogo, ETHLogo, PolygonLogo } from '../Icons/Icons'

const SingleNFt = ({ data }) => {
  const [parsedImage, setParsedImage] = useState('')
  const [checked, isChecked] = useState(true)
  const { metadata } = data
  const parsedData = JSON.parse(metadata)
  const { chainId } = useChain()
  let Comp

  if (chainId === ('0x1' || '0x4' || '0x2a' || '0x5' || '0x3')) {
    Comp = <ETHLogo height={30} width={30} />
  } else if (chainId === ('0x89' || '0x13881')) {
    Comp = <PolygonLogo height={30} width={30} />
  } else if (chainId === ('0x38' || '0x61')) {
    Comp = <BSCLogo height={30} width={30} />
  } else if (chainId === ('0xa86a' || '0xa869')) {
    Comp = <AvaxLogo height={30} width={30} />
  } else {
    Comp = <ETHLogo height={30} width={30} />
  }

  function imageProcessor() {
    if (metadata) {
      const baseStr = 'https://ipfs.io/ipfs/'
      const nativeImage = parsedData.image
      let finalUrl = ''
      if (nativeImage.startsWith('ipfs://ipfs')) {
        finalUrl = baseStr + nativeImage.split('ipfs://ipfs').slice(-1)
      } else if (nativeImage.startsWith('ipfs://')) {
        finalUrl = baseStr + nativeImage.split('ipfs://').slice(-1)
      } else {
        finalUrl = nativeImage + '?format=json'
      }
      setParsedImage(finalUrl)
    }
  }

  useEffect(() => {
    imageProcessor()
    if (!metadata) {
      isChecked(false)
    }
    console.log(parsedImage)
  }, [data, isChecked, metadata])
  return (
    <div className="">
      {checked ? (
        <div className="mx-2 my-2 flex flex-col items-center justify-center rounded-md bg-slate-900 p-5 ">
          <>
            <img
              src={parsedImage}
              alt="NFT"
              className="min-h-[12rem] w-full  rounded"
            />
            <p className="mt-3 font-bold text-white">{parsedData?.name}</p>
            {/* TODO */}
            {/* <div className="flex w-full items-center justify-between">
              <div className="mt-1 cursor-pointer rounded-md bg-green-600 p-2 text-xl  text-slate-900 hover:bg-green-900">
                <IoSend />
              </div>
              <div className="ml-5 flex items-center">
                <div className="overflow-hidden rounded-full">{Comp}</div>
              </div>
            </div> */}
          </>
        </div>
      ) : null}
    </div>
  )
}

export default SingleNFt
