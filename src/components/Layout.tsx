import Header from "./Header";
import Footer from "./Footer";
import Global from "./GlobalStyle";
import TopBar from "./TopBar";
import styled from "styled-components";

const Main = styled.div`
  margin: 0 auto;
  padding: 0 auto;
  width: 70%;
  height: 100%;
`;

interface BodyProps {
  component: React.ComponentType;
}

const Layout: React.FC<BodyProps> = ({ component: Component }) => {
  return (
    <>
    <Global />
      <Header />
      <TopBar />
        <Main>
          <Component />
        </Main>
      <Footer />
    </>
  );
}

export default Layout;