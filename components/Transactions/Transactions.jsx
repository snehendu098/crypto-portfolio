import React from 'react'
import { useMoralis } from 'react-moralis'
import { useDispatch } from 'react-redux'
import TransactionTable from './TransactionTable'

const Transactions = ({ tx }) => {
  const { isAuthenticated } = useMoralis()
  const dispatch = useDispatch()
  return (
    <div className="ml-4  p-4">
      {isAuthenticated ? (
        <>
          <p className="card-text text-center text-3xl font-bold uppercase">
            Transactions
          </p>
          {tx.length > 0 ? (
            <TransactionTable tx={tx} />
          ) : (
            <p className="m-4 flex h-[5rem] items-center justify-center bg-slate-700 text-2xl font-bold ">
              No transactions found
            </p>
          )}
        </>
      ) : (
        <p>
          <span
            onClick={() => dispatch({ type: 'TOGGLE_AUTH_HOLDER' })}
            className="cursor-pointer text-yellow-500"
          >
            Authenticate
          </span>{' '}
          to get Transactions
        </p>
      )}
    </div>
  )
}

export default Transactions
