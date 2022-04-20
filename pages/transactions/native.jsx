import React, { useEffect, useState } from 'react'
import { useChain, useMoralis, useNativeTransactions } from 'react-moralis'
import Transactions from '../../components/Transactions/Transactions'

const App = () => {
  const { chainId } = useChain()
  const { isAuthenticated } = useMoralis()
  const [tx, setTx] = useState([])
  const { getNativeTransations } = useNativeTransactions()

  const fetchTx = async () => {
    if (isAuthenticated) {
      const trx = await getNativeTransations({ params: { chain: chainId } })
      setTx(trx?.result)
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      fetchTx()
    }
  }, [chainId, isAuthenticated])

  return <Transactions tx={tx} />
}

export default App
