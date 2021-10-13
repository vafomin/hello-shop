import {useState} from "react";
import {Card} from "../components";
import { shopData } from "../fakeData";

const Home: React.FC = () => {
    const [data, setData] = useState(shopData);

    const onLikeClick = (id: number) => {
        shopData[id].isLike = !shopData[id].isLike
        setData([...shopData]);
    }

    return(   
    <div className="flex flex-wrap -m-4 justify-center align-center">
        {data.map((item, index) =>         
            <div className="p-4 lg:w-1/4" key={`item-${index}`}>
                <Card 
                    name={item.name} 
                    price={item.price}
                    image={item.image}
                    isLike={item.isLike}
                    onLikeClick={() => onLikeClick(item.id)}
                />
            </div>
        )}
    </div>
    )
}

export default Home;