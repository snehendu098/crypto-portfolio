import { Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import React from "react";
import { Icons } from "../../Icons/LayoutIcons";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";
import { useMoralis } from "react-moralis";

const SendERC20 = ({ props }) => {
  const { modal, setModal, data } = props;
  console.log(data);
  const [value, setValue] = useState("");
  const [address, setAddress] = useState("");
  const { Moralis } = useMoralis();

  const closeModal = () => {
    setModal(!modal);
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const options = {
        type: "erc20",
        amount: Moralis.Units.Token(
          value.toString(),
          data?.decimals?.toString() || "18"
        ),
        receiver: address.toString(),
        contractAddress: data?.token_address?.toString(),
      };
      let result = await Moralis.transfer(options);
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Transition appear show={modal} as={Fragment}>
        <div className="fixed top-0 right-0 z-10 flex min-h-screen  w-screen items-center justify-center bg-white/50 px-4 ">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="flex flex-wrap rounded-md bg-slate-700 p-3">
              <div className="absolute inline-block">
                <p
                  onClick={closeModal}
                  className="inline-block cursor-pointer rounded-md bg-white text-xl"
                >
                  {Icons.cross}
                </p>
              </div>
              <form onSubmit={submit} className="flex w-[100%] flex-col p-2">
                <h1 className="text-center text-2xl font-bold">
                  Send{" "}
                  <span className="text-yellow-500">{data?.symbol || "?"}</span>
                </h1>
                <div className="w-full">
                  <h1 className="text-md mt-3 mb-2 text-left font-bold">
                    Amount
                  </h1>
                </div>
                <input
                  type="number"
                  className="rounded-md p-2 text-lg text-black"
                  placeholder="0.0"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                <div className="flex w-full items-center">
                  <h1 className="text-md mt-3 mb-2 mr-5 text-left font-bold">
                    Address
                  </h1>
                  <Jazzicon
                    diameter={20}
                    seed={jsNumberForAddress(address || "0x0")}
                  />
                </div>
                <input
                  type="text"
                  className="rounded-md p-2 text-lg text-black"
                  placeholder="0x00"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <button
                  type="submit"
                  className="mt-5 cursor-pointer rounded-md bg-green-600 p-3 text-xl font-bold duration-500 hover:bg-green-700"
                >
                  Send
                </button>
              </form>
            </div>
          </Transition.Child>
        </div>
      </Transition>
    </>
  );
};

export default SendERC20;
