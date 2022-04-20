import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import { Icons } from '../../Icons/LayoutIcons'

const Layout = ({ icon, text, link }) => {
  const open = useSelector((s) => s?.expanded)
  return (
    <Link href={link || '/'}>
      <div
        className={`my-2 flex cursor-pointer items-center gap-x-4  px-4 text-2xl text-gray-400 duration-100 hover:border-l-4 hover:border-white  hover:text-white`}
      >
        <div className={`text-2xl`}>{icon}</div>
        <p className={`${!open && 'scale-0'} origin-left duration-500`}>
          {text}
        </p>
      </div>
    </Link>
  )
}

const MidCont = () => {
  return (
    <div className={`mt-5 h-3/6 font-[Quicksand]`}>
      <Layout icon={Icons.apps} text="Dashboard" />
      <Layout icon={Icons.wallet} text="Tokens" link={`/token`} />
      <Layout icon={Icons.nft} text="NFTs" link={`/nfts`} />
      <Layout
        icon={Icons.transaction}
        text="Transactions"
        link={`/transactions`}
      />
    </div>
  )
}

export default MidCont
