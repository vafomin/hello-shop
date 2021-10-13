import { ShoppingBagIcon } from "@heroicons/react/outline";

interface HeaderProps {
  cartSize: number;
  onOpen(): void;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { cartSize, onOpen } = props;

  return (
    <nav className="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full">
      <div className="mb-2 sm:mb-0 inner">
        <a
          href="/"
          className="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold"
        >
          Hello Shop
        </a>
        <br />
        <span className="text-xs text-grey-dark">Simple react shop</span>
      </div>

      <div className="sm:mb-0 self-center">
        <button
          className="inline-flex items-center bg-blue-500 rounded-full font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mr-6"
          onClick={onOpen}
        >
          <ShoppingBagIcon className="h-5 w-5" /> {cartSize}
        </button>
      </div>
    </nav>
  );
};

export default Header;
