import React from "react";
import Layout from "./components/Layout";
import LoginPage from "./pages/login/Login";

const App = () => {
  return (
    <>
      <Layout component={LoginPage} />
    </>
  );
}

export default App;