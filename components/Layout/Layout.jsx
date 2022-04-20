import React, { useEffect } from 'react'
import { useChain, useMoralis } from 'react-moralis'
import { useDispatch, useSelector } from 'react-redux'
import Network from '../Prompts/Network/Network'
import Dialogue from '../Prompts/Dialogue'
import Wallet from '../Prompts/Wallet/Wallet'
import PhoneView from './Mobile/PhoneView'

const Layout = ({ children }) => {
  const dark = useSelector((state) => state.dark)
  const holder = useSelector((state) => state.connectors)
  const networks = useSelector((state) => state.networks)
  const { toggle } = useSelector((state) => state.modal)
  const dispatch = useDispatch()
  const { chain } = useChain()

  const { Moralis } = useMoralis()

  useEffect(() => {
    Moralis.onChainChanged(() => {
      dispatch({
        type: 'TOGGLE_BOX_TRUE',
        head: 'Network Changed',
        body: `You have changed your network`,
      })
    })
  }, [chain])

  return (
    <>
      <div
        className={`flex min-h-[100vh] transition-opacity duration-500  ${
          dark ? 'bg-[#494949]' : 'bg-white'
        } 
      lgx:hidden
      ${dark ? 'text-white' : 'text-black'}
      
      `}
      >
        {holder ? <Wallet /> : null}
        {networks ? <Network /> : null}
        {toggle ? <Dialogue /> : null}
        {children}
      </div>
      <div className="mobile-card min-h-screen  pb-3 text-white lg:hidden">
        <PhoneView />
      </div>
    </>
  )
}

export default Layout
