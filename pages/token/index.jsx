import React, { useEffect, useState } from "react";
import { useChain, useERC20Balances, useMoralis } from "react-moralis";

import {
  AvaxLogo,
  BSCLogo,
  ETHLogo,
  PolygonLogo,
} from "../../components/Icons/Icons";
import { useDispatch } from "react-redux";
import SingleToken from "../../components/Token/SingleToken";
import SendERC20 from "../../components/Prompts/Tokens/SendERC20";

const App = () => {
  const { fetchERC20Balances } = useERC20Balances();
  const { chainId } = useChain();
  const { isAuthenticated } = useMoralis();
  const [token, setToken] = useState([]);

  const fetchBalance = async () => {
    const balance = await fetchERC20Balances({ params: { chain: chainId } });
    setToken(balance);
  };

  let Comp;

  if (chainId === ("0x1" || "0x4" || "0x2a" || "0x5" || "0x3")) {
    Comp = <ETHLogo height={30} width={30} />;
  } else if (chainId === ("0x89" || "0x13881")) {
    Comp = <PolygonLogo height={30} width={30} />;
  } else if (chainId === ("0x38" || "0x61")) {
    Comp = <BSCLogo height={30} width={30} />;
  } else if (chainId === ("0xa86a" || "0xa869")) {
    Comp = <AvaxLogo height={30} width={30} />;
  } else {
    Comp = <ETHLogo height={30} width={30} />;
  }

  const dispatch = useDispatch();

  useEffect(() => {
    fetchBalance();
  }, [chainId, isAuthenticated]);

  return (
    <div className="ml-4 p-7">
      {isAuthenticated ? (
        <div className="grid h-full w-full grid-cols-4">
          <div className="col-span-3 p-3">
            {token.length > 0 ? (
              <div className="grid w-full grid-cols-3 gap-3">
                {token.map((i, e) => (
                  <React.Fragment key={e}>
                    <SingleToken data={i} />
                  </React.Fragment>
                ))}
              </div>
            ) : (
              <p className="">No tokens found</p>
            )}
          </div>
          <div className="p-3">
            <div className="flex min-h-[20rem] w-full items-center justify-center rounded-md bg-slate-700 text-center text-2xl font-bold ">
              Get all your tokens in one place
            </div>
          </div>
        </div>
      ) : (
        <p>
          <span
            onClick={() => dispatch({ type: "TOGGLE_AUTH_HOLDER" })}
            className="cursor-pointer text-yellow-500"
          >
            Authenticate
          </span>{" "}
          to get access to this page
        </p>
      )}
    </div>
  );
};

export default App;
