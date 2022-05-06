import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useChain, useERC20Balances, useMoralis } from "react-moralis";
import { LogoDark } from "../../Icons/LayoutIcons";

const TokenHolder = () => {
  const [token, setToken] = useState([""]);

  const { fetchERC20Balances } = useERC20Balances();
  const { chainId } = useChain();
  const { isAuthenticated } = useMoralis();

  useEffect(() => {
    async function tokens() {
      const balances = await fetchERC20Balances({
        params: { chain: `${chainId}` },
      });
      setToken(balances);
      return balances;
    }
    tokens();
  }, [chainId]);

  return (
    <div className="w-[70%] flex-col items-center rounded-md bg-[#373737] p-3 px-6">
      <p className="card-text mt-3 text-3xl font-extrabold">Your Tokens</p>
      {!isAuthenticated || token.length <= 0 ? (
        <div className="mt-2 flex h-[11rem] w-full items-center justify-center">
          <div className="card-text flex h-full w-full items-center justify-center bg-[#5a5a5a] text-3xl font-bold">
            No Tokens Found
          </div>
        </div>
      ) : (
        <table className="mt-4 w-full text-center text-sm">
          <thead className="text-md text-xl">
            <tr className="border-b-[2px]">
              <th scope="col" className="px-6 py-3">
                Symbol
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                Asset Balance
              </th>
              <th scope="col" className="px-6 py-3">
                Send
              </th>
            </tr>
          </thead>
          <tbody className="text-center text-[1.02rem]">
            {token.map((i, e) => (
              <tr
                key={e}
                className={`border-b-[2px] ${e >= 3 ? "hidden" : "visible"}  `}
              >
                <td className="">{i.symbol || "?"}</td>
                <td className="flex items-center justify-center p-3 text-center">
                  <p className="max-w-[7rem] truncate rounded-full bg-[#626262] p-1 px-2  text-center">
                    {i.token_address || "?"}
                  </p>
                </td>
                <td className="max-w-[1rem]  truncate">
                  {parseInt(i.balance) / Math.pow(10, parseInt(i.decimals)) ||
                    "?"}
                </td>
                {/* link popup of send */}
                <td className="">
                  <p className="inline-block cursor-pointer rounded-md bg-[#229851] p-2 duration-500  hover:bg-[#2d6d47]">
                    Send
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div
        className={`mt-3 flex justify-between ${
          isAuthenticated && token.length <= 0 && "flex-row-reverse"
        } `}
      >
        {/* link */}
        <Link href={"/token"}>
          <div
            className={`flex cursor-pointer items-center justify-center rounded-md bg-[#494949] p-2 text-xl font-bold transition ${
              isAuthenticated && token.length <= 0 && "hidden"
            } ${!isAuthenticated && "hidden"}  duration-300 hover:bg-slate-900`}
          >
            All Tokens
          </div>
        </Link>
        <LogoDark height={50} width={50} />
      </div>
    </div>
  );
};

export default TokenHolder;
