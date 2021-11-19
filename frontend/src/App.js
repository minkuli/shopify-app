import { Fragment } from "react";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {

  return (
    <Fragment>
      <Layout>
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
