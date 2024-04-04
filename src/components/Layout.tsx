import Header from "./Header";
import Footer from "./Footer";
import Global from "./GlobalStyle";
import Body from "./Body";

const Layout : React.FC = () => {
  return (
    <>
    <Global />
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default Layout;