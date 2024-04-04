import React from "react";
import Layout from "./components/Layout";
import LoginPage from "./pages/signup/Signup";

const App = () => {
  return (
    <>
      <Layout component={LoginPage} />
    </>
  );
}

export default App;