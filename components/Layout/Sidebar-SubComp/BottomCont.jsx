import React from 'react'
import { useMoralis } from 'react-moralis'
import { useDispatch, useSelector } from 'react-redux'
import { Icons } from '../../Icons/LayoutIcons'

const Layout = ({ item, string, onClick, className }) => {
  const open = useSelector((e) => e?.expanded)
  return (
    <div
      onClick={onClick}
      className={`my-2 flex w-full cursor-pointer ${className}  items-center gap-x-4 rounded-full px-4 text-2xl text-gray-400  duration-100 hover:bg-[#263146] hover:text-white`}
    >
      <div className={`text-2xl`}>{item}</div>
      <p className={`${!open && 'scale-0'} origin-left duration-500`}>
        {string}
      </p>
    </div>
  )
}

const BottomCont = () => {
  const dispatch = useDispatch()
  const { isAuthenticated, account } = useMoralis()
  // console.log(isAuthenticated, account)

  return (
    <div className="h-2/6">
      <div className={`flex flex-col items-center gap-x-4`}>
        <div
          className={`w-full ${
            !isAuthenticated || !account ? 'hidden' : 'visible'
          }`}
        >
          <Layout
            item={Icons.network}
            string={`Networks`}
            onClick={() => dispatch({ type: 'TOGGLE_NET_HOLDER' })}
          />
        </div>
        <div className={`w-full ${isAuthenticated && account && 'hidden'}`}>
          <Layout
            item={Icons.connect}
            string={`Connect`}
            onClick={() => dispatch({ type: 'TOGGLE_AUTH_HOLDER' })}
          />
        </div>
      </div>
    </div>
  )
}

export default BottomCont
