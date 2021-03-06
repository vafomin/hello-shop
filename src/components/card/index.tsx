import { ShoppingBagIcon, HeartIcon } from "@heroicons/react/outline";
import { HeartIcon as FillHeartIcon } from "@heroicons/react/solid";

interface CardProps {
  name: string;
  price: number;
  image: string;
  isLike: boolean;
  onLikeClick(): void;
  onCartClick(): void;
}

const Card: React.FC<CardProps> = (props) => {
  const { name, price, image, isLike, onLikeClick, onCartClick } = props;

  return (
    <div className="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3">
      <div className="overflow-x-hidden rounded-2xl relative">
        <img
          className="h-40 rounded-2xl w-full object-contain"
          src={image}
          alt=""
        />
        <p
          id="add-to-cart-button"
          className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group hover:bg-blue-600 hover:text-white"
          onClick={onCartClick}
        >
          <ShoppingBagIcon className="h-5 w-5" />
        </p>
      </div>
      <div className="mt-4 pl-2 mb-2 flex justify-between ">
        <div>
          <p className="text-lg font-semibold text-gray-900 mb-0">{name}</p>
          <p className="text-md text-gray-800 mt-0">${price}</p>
        </div>
        <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
          {isLike ? (
            <FillHeartIcon
              id="fill-heart"
              className="h-5 w-5 text-red-600"
              onClick={onLikeClick}
            />
          ) : (
            <HeartIcon
              id="heart"
              className="h-5 w-5 hover:text-red-600"
              onClick={onLikeClick}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
