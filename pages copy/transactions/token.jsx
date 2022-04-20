import React, { useEffect, useState } from 'react'
import { useChain, useERC20Transfers, useMoralis } from 'react-moralis'
import Transactions from '../../components/Transactions/Transactions'

const App = () => {
  const { chainId } = useChain()
  const { isAuthenticated } = useMoralis()
  const [tx, setTx] = useState([])
  const { fetchERC20Transfers } = useERC20Transfers()

  const fetchTx = async () => {
    if (isAuthenticated) {
      const trx = await fetchERC20Transfers({ params: { chain: chainId } })
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
