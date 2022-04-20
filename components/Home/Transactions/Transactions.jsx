import React, { useEffect, useState } from 'react'
import { useChain, useMoralis, useMoralisWeb3Api } from 'react-moralis'
import { useDispatch } from 'react-redux'
import TransactionOptions from '../../Transactions/TransactionOpeions'

const Transactions = () => {
  const web3api = useMoralisWeb3Api()
  const { chainId } = useChain()
  const { account, isAuthenticated } = useMoralis()

  const [tx, setTx] = useState([])

  const fetchTx = async () => {
    if (isAuthenticated) {
      const transactions = await web3api.account.getTransactions({
        chain: chainId,
        address: account,
        order: 'desc',
      })
      setTx(transactions?.result)
    }
  }
  useEffect(() => {
    fetchTx()
    console.log(tx)
  }, [isAuthenticated, chainId])

  const dispatch = useDispatch()

  return (
    <div className="w-full p-2">
      <div className="card-text w-full p-2 text-center font-['Quicksand'] text-2xl font-bold  uppercase">
        Transactions
      </div>

      <div className={`p-3`}>
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

export default Transactions
