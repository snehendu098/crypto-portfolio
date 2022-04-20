import React from 'react'
import { LogoDark } from '../../Icons/LayoutIcons'

const Navbar = () => {
  return (
    <div className="flex w-[100vw] items-center bg-[#373737] p-3">
      <LogoDark height={40} width={40} />
      <p className="ml-3 font-[Quicksand] text-xl">TIMIKOS</p>
    </div>
  )
}

export default Navbar
