import { makeAutoObservable } from "mobx";

class LikeStore {
  data:number[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  likeItem = (id: number) => {
    const index = this.data.indexOf(id);
    if (index !== -1) {
        this.data.splice(index, 1);
    } else{
        this.data.push(id);
    }
  };

  isLike = (id: number) => {
    return this.data.includes(id);
  }

}

export default LikeStore;