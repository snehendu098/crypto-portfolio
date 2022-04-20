import React, { useEffect, useState } from 'react'
import { useMoralis } from 'react-moralis'
import { useDispatch } from 'react-redux'
import { Icons, MetamaskLogo } from '../../Icons/LayoutIcons'

const Wallet = () => {
  const dispatch = useDispatch()
  const { authenticate, isAuthenticated, account, logout } = useMoralis()

  useEffect(() => {
    if (isAuthenticated && account) {
      dispatch({ type: 'TOGGLE_AUTH_HOLDER' })
    } else if (isAuthenticated && !account) {
      logout()
    }
  }, [isAuthenticated, account])

  return (
    <div className="fixed z-50 flex h-screen  w-screen items-center justify-center bg-slate-300/50 duration-500">
      <div className="overflow flex h-[32rem] w-[32rem] flex-col rounded-lg bg-slate-100 shadow-lg">
        <div className="flex h-[10%] flex-row-reverse items-center px-3 text-3xl">
          <div
            onClick={() => dispatch({ type: 'TOGGLE_AUTH_HOLDER' })}
            className="cursor-pointer"
          >
            {Icons.cross}
          </div>
        </div>
        <div className="card-text flex h-[90%]  flex-col items-center gap-y-5 px-4 text-xl font-bold">
          <div
            onClick={() => authenticate()}
            className="figma-shadow flex w-full cursor-pointer items-center justify-center rounded bg-slate-500 p-3"
          >
            <MetamaskLogo height={70} width={70} />
            <p className="ml-4">Connect With Metamask</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wallet
