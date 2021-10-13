import { ShoppingBagIcon, HeartIcon } from '@heroicons/react/outline'

interface CardProps {
    name: string,
    price: string,
    image: string,
  }
  
const Card: React.FC<CardProps> = (props) => {
    const {name, price, image} = props;

    return (
    <div className="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
    <div className="overflow-x-hidden rounded-2xl relative">
      <img className="h-40 rounded-2xl w-full object-cover" src={image} alt=""/>
      <p className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group hover:bg-blue-600 hover:text-white">
        <ShoppingBagIcon className="h-5 w-5" />
      </p>
    </div>
    <div className="mt-4 pl-2 mb-2 flex justify-between ">
      <div>
        <p className="text-lg font-semibold text-gray-900 mb-0">{name}</p>
        <p className="text-md text-gray-800 mt-0">{price}</p>
      </div>
      <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
        <HeartIcon className="h-5 w-5 hover:text-red-600" />
      </div>
    </div>
  </div>);
}

export default Card;