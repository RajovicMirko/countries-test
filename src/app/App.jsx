import "./App.scss";
import Theme from "contexts/Theme";
import Layout from "components/Layout";
import { BrowserRouter } from "react-router-dom";
import RouterView from "./router";

function App() {
  return (
    <Theme>
      <BrowserRouter>
        <Layout>
          <RouterView />
        </Layout>
      </BrowserRouter>
    </Theme>
  );
}

export default App;
