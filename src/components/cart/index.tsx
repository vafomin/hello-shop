import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon, TrashIcon } from "@heroicons/react/outline";

interface CartData {
  id: number;
  name: string;
  price: number;
  image: string;
  isLike: boolean;
}

interface CartProps {
  open: boolean;
  onClose(): void;
  cart: CartData[];
  onDelete(id: number): void;
}

const Cart: React.FC<CartProps> = (props) => {
  const { open, onClose, cart, onDelete } = props;

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden"
        onClose={onClose}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="relative w-screen max-w-md">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                    <button
                      type="button"
                      className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      onClick={onClose}
                    >
                      <span className="sr-only">Close</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                  <div className="px-4 sm:px-6">
                    <Dialog.Title className="text-lg font-medium text-gray-900">
                      Cart
                    </Dialog.Title>
                  </div>
                  <div className="mt-6 relative flex-1 px-4 sm:px-6">
                    {cart.map((item, index) => (
                      <div
                        className="bg-white w-full flex items-center p-2 mb-6 rounded-xl shadow border"
                        key={`item-${index}`}
                      >
                        <div className="flex items-center space-x-4">
                          <img
                            src={item.image}
                            alt=""
                            className="w-16 h-16 rounded-full"
                          />
                        </div>
                        <div className="flex-grow p-3">
                          <div className="font-semibold text-gray-700">
                            {item.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            ${item.price}
                          </div>
                        </div>
                        <div className="p-2 cursor-pointer">
                          <TrashIcon
                            className="w-5 h-5 hover:text-red-600"
                            onClick={() => onDelete(item.id)}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Cart;
