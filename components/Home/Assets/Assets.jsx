import React from 'react'
import NFTCheck from './NFTCheck'
import TokenHolder from './TokenHolder'

const Assets = () => {
  return (
    <div className="ml-2 flex w-full justify-between">
      <TokenHolder />
      <NFTCheck />
    </div>
  )
}

export default Assets
