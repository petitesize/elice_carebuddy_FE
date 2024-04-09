import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import TopBar from "./TopBar";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Body = styled.div`
  flex: 1;
  padding-top: 80px;
`;

const Main = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 1024px;
`;

interface BodyProps {
  component: React.ComponentType;
}

const Layout: React.FC<BodyProps> = ({ component: Component }) => {
  return (
    <LayoutContainer>
      <Header />
      <Body>
      <TopBar />
        <Main>
          <Component />
        </Main>
      </Body>
        <Footer />
    </LayoutContainer>
  );
}

export default Layout;
