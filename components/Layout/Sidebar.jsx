import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MidCont from './Sidebar-SubComp/MidCont'
import TopCont from './Sidebar-SubComp/TopCont'
import { IoIosArrowBack } from 'react-icons/io'
import BottomCont from './Sidebar-SubComp/BottomCont'

const Navbar = () => {
  const open = useSelector((e) => e.expanded)
  const dispatch = useDispatch()
  return (
    <div
      className={`fixed z-30 flex min-h-[100vh] flex-col duration-500 ${
        !open ? 'w-24' : 'w-72'
      }  bg-[#333]`}
    >
      <div
        onClick={() => dispatch({ type: 'NAV' })}
        className={`absolute -right-3 top-9 z-40 ${
          !open && 'rotate-180'
        }  text-md cursor-pointer rounded-full 
          border bg-[#494949]
        p-1 font-extrabold text-white`}
      >
        <IoIosArrowBack />
      </div>
      <div className="relative h-[100vh] p-5 py-8">
        <TopCont />
        <MidCont />
        <BottomCont />
      </div>
    </div>
  )
}

export default Navbar
