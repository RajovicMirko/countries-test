import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import RouterView from "./router";

function App() {
  return (
    <BrowserRouter>
      <RouterView />
    </BrowserRouter>
  );
}

export default App;
