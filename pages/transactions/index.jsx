import React, { useEffect, useState } from 'react'
import { useChain, useMoralis, useMoralisWeb3Api } from 'react-moralis'
import TransactionOptions from '../../components/Transactions/TransactionOpeions'
import { useDispatch } from 'react-redux'

const App = () => {
  const { isAuthenticated } = useMoralis()
  const dispatch = useDispatch()

  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <p className="mt-5 font-['Quicksand'] text-2xl font-bold uppercase">
        Transactions
      </p>
      <div className="flex w-full flex-col items-center justify-center  p-10">
        {isAuthenticated ? (
          <TransactionOptions />
        ) : (
          <p className="w-full text-center">
            <span
              onClick={() => dispatch({ type: 'TOGGLE_AUTH_HOLDER' })}
              className="cursor-pointer text-yellow-500"
            >
              Login
            </span>{' '}
            to get transactions
          </p>
        )}
      </div>
    </div>
  )
}

export default App
