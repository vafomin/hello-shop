import { createContext } from "react";
import CartStore from "./CartStore";
import LikeStore from "./LikeStore";

export const rootStoreContext = createContext({
  cartStore: new CartStore(),
  likeStore: new LikeStore()
});
