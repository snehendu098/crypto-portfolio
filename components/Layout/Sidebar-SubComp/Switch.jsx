import React from 'react'
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'

const SwitchComp = () => {
  const dark = useSelector((state) => state.dark)
  const dispatch = useDispatch()
  return (
    <div
      onClick={() => dispatch({ type: 'TOGGLE' })}
      className={`rounded-full  p-2 text-2xl ${
        dark ? 'hover:bg-black' : 'hover:bg-white'
      }
      ${!dark ? 'text-black' : 'text-white'}
      `}
    >
      {!dark ? <BsMoonStarsFill /> : <BsSunFill />}
    </div>
  )
}

export default SwitchComp
