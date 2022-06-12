import { useState, useEffect } from "react";
import { Card, Loader } from "../components";
import { toastAdd } from "../components/alert";
import { observer } from "mobx-react";
import { getData } from "../api";
import { CartData } from "./../interfaces";
import { useStore } from "../hooks/useStore";

const Home: React.FC = () => {
  const [data, setData] = useState<CartData[]>([]);
  const [error, setIsError] = useState<boolean>(false);

  const { cartStore, likeStore } = useStore();
  const { addCartItem } = cartStore;
  const { likeItem, isLike } = likeStore;

  const fillShop = async () => {
    const data = await getData();
    if (!data) {
      setIsError(true);
      return;
    }
    setData(data);
  };

  const onLikeClick = (id: number) => {
    likeItem(id);
  };

  const onCartClick = (id: number) => {
    addCartItem(data[id - 1]);
    toastAdd();
  };

  useEffect(() => {
    fillShop();
  }, []);

  if (data.length === 0 && !error) return <Loader />;

  if (error) {
    return (
      <div className="text-center mt-4">
        <span role="img" className="text-5xl">
          😵
        </span>
        <p className="mt-6 text-gray-500">Oops... Failed to retrieve data</p>
        <a className="mt-2 text-blue-500 hover:text-blue-600" href="/">
          Try reload page!
        </a>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((item, index) => (
          <div className="p-4" key={`item-${index}`}>
            <Card
              name={item.name}
              price={item.price}
              image={item.image}
              isLike={isLike(item.id)}
              onLikeClick={() => onLikeClick(item.id)}
              onCartClick={() => onCartClick(item.id)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default observer(Home);
