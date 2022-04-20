import React from 'react'
import Right from './Intro/Right'
import Left from './Intro/Left'

const TopComp = () => {
  return (
    <div className="mt-12 flex w-full origin-right p-5">
      <div className="flex min-h-[14rem] w-1/2  flex-col items-center mdx:flex-col">
        <Left />
      </div>
      <div className="flex w-1/2 justify-center duration-500">
        <Right />
      </div>
    </div>
  )
}

export default TopComp
