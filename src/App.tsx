import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import {Header} from "./components";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="container px-2 py-4 mx-auto">
        <Switch>
          <Route component={Home} path="/" exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
