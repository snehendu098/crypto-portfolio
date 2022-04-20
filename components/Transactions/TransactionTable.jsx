import moment from 'moment'
import React from 'react'
import { useChain } from 'react-moralis'
import { query } from '../../utils/query'

const TransactionTable = ({ tx }) => {
  const { chainId } = useChain()
  return (
    <table className="mt-4 w-full overflow-hidden rounded-md text-center text-sm">
      <thead className="text-md bg-slate-800 text-xl">
        <tr className="">
          <th scope="col" className="px-6 py-3">
            Hash
          </th>
          <th scope="col" className="px-6 py-3">
            From
          </th>
          <th scope="col" className="px-6 py-3">
            To
          </th>
          <th scope="col" className="px-6 py-3">
            Date
          </th>
          <th scope="col" className="px-6 py-3">
            Details
          </th>
        </tr>
      </thead>
      <tbody className="text-center text-[1.02rem]">
        {tx.map((i, e) => {
          // console.log(i)
          return (
            <tr
              key={e}
              className={`  ${
                e % 2 === 0 ? 'bg-slate-900/50' : 'bg-slate-900/20'
              }  `}
            >
              <td className="">
                <div className="flex items-center justify-center p-3 text-center">
                  <p className="max-w-[7rem] truncate rounded-full bg-[#626262] p-1 px-2  text-center">
                    {i?.block_hash || '?'}
                  </p>
                </div>
              </td>
              <td className="flex items-center justify-center p-3 text-center">
                <p className="max-w-[7rem] truncate rounded-full bg-[#626262] p-1 px-2  text-center">
                  {i?.from_address || '?'}
                </p>
              </td>
              <td className="">
                <div className="flex items-center justify-center p-3 text-center">
                  <p className="max-w-[7rem] truncate rounded-full bg-[#626262] p-1 px-2  text-center">
                    {i?.to_address || '?'}
                  </p>
                </div>
              </td>
              {/* link popup of details */}
              <td className="">
                {moment(i?.block_timestamp).format('DD/MM/YYYY') || '?'}
              </td>
              <td className="">
                <p
                  onClick={() => {
                    window.open(
                      query(`${chainId}`, i?.hash || i?.transaction_hash),
                      '_blank'
                    )
                  }}
                  className="inline-block cursor-pointer rounded-md bg-[#229851] p-2 duration-500  hover:bg-[#2d6d47]"
                >
                  Details
                </p>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default TransactionTable
