import React from 'react'
import { LogoElipse } from '../../../Icons/LayoutIcons'
import Card from './Card'

export const LogoContainer = () => (
  <div className="figma-shadow flex items-center justify-center rounded-full  bg-[#312f24] p-0 px-10">
    <div className="lgx:hidden">
      <LogoElipse height={70} width={70} />
    </div>
    <div className="lg:hidden">
      <LogoElipse height={40} width={40} />
    </div>
    <p className="p-0 text-3xl font-extrabold lgx:text-xl">Timikos</p>
  </div>
)

const Bottom = () => {
  return (
    <div className="flex w-4/6 flex-col items-center">
      <LogoContainer />
      <Card />
    </div>
  )
}

export default Bottom
