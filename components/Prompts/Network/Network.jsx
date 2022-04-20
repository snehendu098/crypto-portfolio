import React from 'react'
import { useChain } from 'react-moralis'
import { useDispatch } from 'react-redux'
import { AvaxLogo, BSCLogo, ETHLogo, PolygonLogo } from '../../Icons/Icons'
import { Icons } from '../../Icons/LayoutIcons'
import Shower from './Shower'

const Network = () => {
  const dispatch = useDispatch()
  const { chainId } = useChain()
  console.log(chainId)

  const mainnetwok = [
    {
      icon: <ETHLogo height={50} width={50} />,
      name: 'Ethereum Mainnet',
      chain: '0x1',
    },
    {
      icon: <PolygonLogo height={50} width={50} />,
      name: 'Polygon Mainnet',
      chain: '0x89',
    },
    {
      icon: <AvaxLogo height={50} width={50} />,
      name: 'Avax Mainnet',
      chain: '0xa86a',
    },
    {
      icon: <BSCLogo height={50} width={50} />,
      name: 'BSC Mainnet',
      chain: '0x38',
    },
  ]

  return (
    <div className="fixed z-50 flex  h-screen w-screen  items-center justify-center overflow-auto bg-slate-300/50 duration-500">
      <div className="overflow flex h-[32rem] w-[32rem] flex-col rounded-lg bg-slate-100 shadow-lg">
        <div className="flex h-[10%] flex-row-reverse items-center px-3 text-3xl">
          <div
            onClick={() => dispatch({ type: 'TOGGLE_NET_HOLDER' })}
            className="cursor-pointer"
          >
            {Icons.cross}
          </div>
        </div>
        <div className="card-text flex h-[90%]  flex-col items-center gap-y-5 px-4 text-xl font-bold">
          {mainnetwok.map((i, e) => (
            <Shower name={i.name} icon={i.icon} key={e} chain={i.chain} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Network
