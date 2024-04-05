import Header from "./Header";
import Footer from "./Footer";
import GlobalStyle from "./GlobalStyle";
import TopBar from "./TopBar";
import styled from "styled-components";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 화면 전체 높이를 최소 높이로 설정 */
`;

const Body = styled.div`
  flex: 1; /* Main 요소가 남은 공간을 모두 차지하도록 설정 */
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
        <TopBar />
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
