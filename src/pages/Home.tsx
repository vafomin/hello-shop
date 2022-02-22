import { useState, useEffect } from "react";
import { Card, Loader } from "../components";
import { observer } from "mobx-react";
import { getData } from "../api";
import { CartData } from "./../interfaces";
import { useStore } from "../hooks/useStore";

const Home: React.FC = () => {
  const [data, setData] = useState<CartData[]>([]);
  const { cartStore, likeStore } = useStore();
  const { addCartItem } = cartStore;
  const { likeItem, isLike } = likeStore;

  const fillShop = async () => {
    const data = await getData();
    setData(data);
  };

  const onLikeClick = (id: number) => {
    likeItem(id);
  };

  const onCartClick = (id: number) => {
    addCartItem(data[id - 1]);
  };

  useEffect(() => {
    fillShop();
  }, []);

  if (data.length === 0) return <Loader />;

  return (
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
  );
};

export default observer(Home);
