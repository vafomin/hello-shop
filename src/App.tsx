import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Header, Cart, Alert } from "./components";
import { toastRemove } from "./components/alert";
import { useStore } from "./hooks/useStore";
import { observer } from "mobx-react";

const App: React.FC = observer(() => {
  const [open, setOpen] = useState(false);
  const { cartStore } = useStore();
  const { cart, cartSize, delCartItem, allPrice } = cartStore;

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onDelete = (index: number) => {
    delCartItem(index);
    toastRemove();
  };

  return (
    <BrowserRouter>
      <Alert />
      <Header onOpen={onOpen} cartSize={cartSize} />
      <Cart
        open={open}
        onClose={onClose}
        cart={cart}
        onDelete={onDelete}
        allPrice={allPrice}
      />
      <div className="container px-2 py-4 mx-auto">
        <Switch>
          <Route component={Home} path="/" exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
});

export default App;
