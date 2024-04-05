import Header from "./Header";
import Footer from "./Footer";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Body = styled.div`
  flex: 1;
  padding-top: 130px;
`;

const Main = styled.div`

  margin: 0 auto;
  width: 70%;
`;

interface BodyProps {
  component: React.ComponentType;
}

const Layout: React.FC<BodyProps> = ({ component: Component }) => {
  return (
    <>
    <GlobalStyle />
    <LayoutContainer>
      <Header />
      <Body>
        <Main>
          <Component />
        </Main>
      </Body>
        <Footer />
    </LayoutContainer>
    </>
  );
}

export default Layout;
