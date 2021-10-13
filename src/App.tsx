import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import {Header} from "./components";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route component={Home} path="/" exact />
      </Switch>
  </BrowserRouter>
  );
}

export default App;
