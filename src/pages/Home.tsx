import { useState } from "react";
import { Card } from "../components";
import { shopData } from "../fakeData";
import { observer } from "mobx-react";
import CartStore from "../stores/CartStore";

const Home: React.FC = observer((props) => {
  const [data, setData] = useState(shopData);
  const { addCartItem } = CartStore;

  const onLikeClick = (id: number) => {
    shopData[id].isLike = !shopData[id].isLike;
    setData([...shopData]);
  };

  const onCartClick = (id: number) => {
    addCartItem(data[id]);
  };

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.map((item, index) => (
        <div className="p-4" key={`item-${index}`}>
          <Card
            name={item.name}
            price={item.price}
            image={item.image}
            isLike={item.isLike}
            onLikeClick={() => onLikeClick(item.id)}
            onCartClick={() => onCartClick(item.id)}
          />
        </div>
      ))}
    </div>
  );
});

export default Home;
