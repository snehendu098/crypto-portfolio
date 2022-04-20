import React from 'react'
import { useChain } from 'react-moralis'
import { useDispatch } from 'react-redux'

const Shower = ({ icon, name, chain }) => {
  const { switchNetwork } = useChain()
  const dispatch = useDispatch()

  const handleChange = async () => {
    await switchNetwork(chain)
    dispatch({ type: 'TOGGLE_NET_HOLDER' })
  }

  return (
    <div
      onClick={handleChange}
      className="figma-shadow flex w-full cursor-pointer items-center justify-center overflow-auto rounded-md bg-slate-500 p-3"
    >
      <div className="flex w-1/3 items-center justify-center ">{icon}</div>
      <div className="w-2/3 ">
        <p className="pl-3 text-xl">{name}</p>
      </div>
    </div>
  )
}

export default Shower
