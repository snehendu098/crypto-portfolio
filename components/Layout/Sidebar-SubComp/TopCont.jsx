import React from 'react'
import { useSelector } from 'react-redux'
import logoD from '../../../assets/Logo-Dark.svg'
import Image from 'next/image'
import Link from 'next/link'

const TopCont = () => {
  const open = useSelector((e) => e.expanded)
  return (
    <div className="h-1/6">
      <div className={`flex items-center gap-x-4`}>
        <Link href={'/'}>
          <div className="cursor-pointer duration-500">
            <Image src={logoD} height={50} width={50} layout="fixed" />
          </div>
        </Link>
        <Link href={'/'}>
          <h1
            className={`origin-left cursor-pointer font-[Quicksand] text-2xl font-bold uppercase ${
              !open && 'scale-0'
            } font-medium text-white duration-500`}
          >
            Timikos
          </h1>
        </Link>
      </div>
    </div>
  )
}

export default TopCont
