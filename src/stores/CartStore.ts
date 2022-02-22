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

  get cartSize(){
    return this.cart.length;
  }

  get allPrice(){
    let price = 0;
    return this.cart.map(item => price+=Number(item.price)).reverse()[0];
  }

}

export default CartStore;