import React from 'react'
import Top from '../../Home/Welcome/Intro/Left'
import { LogoContainer } from '../../Home/Welcome/Intro/Right'
import Navbar from './Navbar'

const PhoneView = () => {
  const cont = [
    'get all tokens owned by you',
    'send tokens to others',
    'get all nfts owned by you',
    'send nfts to others',
    'and many more',
  ]

  return (
    <div className="flex flex-col items-center justify-between">
      <Navbar />
      <div className=" flex w-full flex-col ">
        <div className="my-4 ml-4 w-[60%]">
          <LogoContainer />
        </div>
        <div className="mt-7 w-full">
          <p className="card-text px-5 text-center text-2xl font-bold">
            One solution for all your blockchain assets
          </p>
          <div className="ml-10 mt-7 inline-block rounded-md bg-green-800 p-2">
            Download Now
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col  items-center pb-3">
        <Top />
      </div>
      <div className="flex w-full flex-col items-center px-5">
        <p className="card-text text-center text-2xl font-extrabold">
          Features
        </p>
        {cont.map((i) => (
          <div
            key={i}
            className="mt-3 w-full rounded-md border bg-[#333]  p-3 text-xl capitalize"
          >
            {i}
          </div>
        ))}
      </div>
      <div className="card-text mt-3 w-[80%] rounded-md bg-[#235e18] p-3  text-xl">
        Download Now
      </div>
    </div>
  )
}

export default PhoneView
