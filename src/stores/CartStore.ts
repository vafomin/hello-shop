import { makeAutoObservable } from "mobx";

interface CartData{
    id: number,
    name: string,
    price: number,
    image: string,
    isLike: boolean
}

class Cart {
  cart:CartData[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addCartItem = (item: CartData) => {
    this.cart.push(item);
  };

  get cartSize(){
    return this.cart.length;
  }
}


const CartStore = new Cart();

export default CartStore;