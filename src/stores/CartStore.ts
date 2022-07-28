import { CartData } from './../interfaces';
import { makeAutoObservable } from "mobx";

class CartStore {
  cart:CartData[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addCartItem = (item: CartData) => {
    this.cart.push(item);
  };

  delCartItem = (index: number) => {
    this.cart.splice(index, 1);
  };

  clearCart = () => {
    this.cart = []
  }

  get cartSize(){
    return this.cart.length;
  }

  get allPrice(){
    return this.cart.reduce((sum: number, item: CartData) => {
      return sum + item.price;
    }, 0);
  }
}

export default CartStore;