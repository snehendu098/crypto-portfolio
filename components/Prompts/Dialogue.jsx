import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Dialogue() {
  let { toggle, body, heading } = useSelector((state) => state.modal)
  const dispatch = useDispatch()

  function closeModal() {
    dispatch({ type: 'TOGGLE_BOX_FALSE' })
  }

  return (
    <>
      <Transition appear show={toggle} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto bg-slate-200/30"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-[#494949] p-6  text-left align-middle shadow-2xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-bold leading-6 text-white "
                >
                  {heading}
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-100">{body}</p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="flex justify-center rounded-md  bg-slate-900 px-4 py-2 text-sm font-bold text-white hover:bg-slate-800 focus-visible:hidden"
                    onClick={closeModal}
                  >
                    OK
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
