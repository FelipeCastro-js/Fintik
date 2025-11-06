import { createContext, useState } from "react";
import {
  Light,
  Dark,
  AuthContextProvider,
  Device,
  SideBar,
  MyRouter,
  MenuHambur,
} from "./index";
import styled, { ThemeProvider } from "styled-components";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? Light : Dark;
  const [sideBarOpen, setSideBarOpen] = useState(false);
  return (
    <>
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <ThemeProvider theme={themeStyle}>
          <AuthContextProvider>
            <Container className={sideBarOpen ? "active" : ""}>
              <div className="ContentSideBar">
                <SideBar state={sideBarOpen} setState={setSideBarOpen} />
              </div>
              <div className="ContentMenuBar">
                <MenuHambur />
              </div>
              <Containerbody>
                <MyRouter />
              </Containerbody>
            </Container>
          </AuthContextProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background: ${({ theme }) => theme.bgtotal};
  transition: all 0.2s ease-in-out;

  .ContentSidebar {
    display: none;
  }
  .ContentMenuBar {
    display: block;
    position: absolute;
    left: 20px;
  }
  @media ${Device.tablet} {
    grid-template-columns: 65px 1fr;
    &.active {
      grid-template-columns: 220px 1fr;
    }
    .ContentSidebar {
      display: initial;
    }
    .ContentMenuBar {
      display: none;
    }
  }
`;

const Containerbody = styled.div`
  grid-column: 1;
  width: 100%;
  @media ${Device.tablet} {
    grid-column: 2;
  }
`;

export default App;
