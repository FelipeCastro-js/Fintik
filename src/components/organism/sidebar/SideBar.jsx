import styled from "styled-components";
import {
  v,
  LinksArray,
  SideBarCard,
  SecondarylinksArray,
} from "../../../index";
import { NavLink } from "react-router-dom";

function SideBar({ state, setState }) {
  return (
    <Main $isopen={state.toString()}>
      <span className="SideBarButton" onClick={() => setState(!state)}>
        {<v.iconoflechaderecha />}
      </span>
      <Container $isopen={state.toString()} className={state ? "active" : ""}>
        <div className="LogoContent">
          <div className="imgContent">
            <img src={v.logo} alt="Logo Fintik" />
          </div>
          <h2>Fintik</h2>
        </div>
        {LinksArray.map(({ icon, label, to }) => (
          <div
            className={state ? "LinkContainer active" : "LinkContainer"}
            key={label}
          >
            <NavLink
              to={to}
              className={({ isActive }) => `Links${isActive ? ` active` : ``}`}
            >
              <div className="LinkIcon">{icon}</div>
              <span className={state ? "Label_Visible" : "LabelHidden"}>
                {label}
              </span>
            </NavLink>
          </div>
        ))}
        <Divider />
        {SecondarylinksArray.map(({ icon, label, to }) => (
          <div
            className={state ? "LinkContainer active" : "LinkContainer"}
            key={label}
          >
            <NavLink
              to={to}
              className={({ isActive }) => `Links${isActive ? ` active` : ``}`}
            >
              <div className="LinkIcon">{icon}</div>
              <span className={state ? "Label_Visible" : "LabelHidden"}>
                {label}
              </span>
            </NavLink>
          </div>
        ))}
        <Divider />
        {state && <SideBarCard />}
      </Container>
    </Main>
  );
}

export default SideBar;

const Container = styled.div`
  color: ${(theme) => theme.text};
  background: ${(theme) => theme.bg};
  position: fixed;
  padding-top: 20px;
  z-index: 1;
  height: 100%;
  width: 65px;
  transition: 0.1s ease-in-out;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(theme) => theme.colorScroll};
    border-radius: 10px;
  }

  &.active {
    width: 220px;
  }
  .LogoContent {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 60px;
    .imgContent {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      cursor: pointer;
      transition: 0.3s ease;
      transform: ${({ $isopen }) =>
          $isopen === "true" ? `scale(0.7)` : `scale(1.5)`}
        rotate(${({ theme }) => theme.logorotate});
      img {
        width: 100%;
        animation: flotar 1.7s ease-in-out infinite alternate;
      }
    }
    h2 {
      display: ${({ $isopen }) => ($isopen === "true" ? `block` : `none`)};
    }
    @keyframes flotar {
      0% {
        transform: translate(0, 0px);
      }
      50% {
        transform: translate(0, 10px);
      }
      100% {
        transform: translate(0, -0px);
      }
    }
  }
  .LinkContainer {
    margin: 5px 0;
    transition: all 0.3s ease-in-out;
    padding: 0 5%;
    position: relative;
    &:hover {
      background: ${(props) => props.theme.bgAlpha};
    }
    .Links {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: calc(${() => v.smSpacing} - 2px) 0;
      color: ${(props) => props.theme.text};
      height: 60px;
      .LinkIcon {
        padding: ${() => v.smSpacing} ${() => v.mdSpacing};
        display: flex;
        svg {
          font-size: 25px;
        }
      }
      .Label_Visible {
        transition: 0.3s ease-in-out;
        opacity: 1;
      }
      .LabelHidden {
        opacity: 0;
      }
      &.active {
        color: ${(props) => props.theme.bg5};
        font-weight: 600;
        &::before {
          content: "";
          position: absolute;
          height: 100%;
          background: ${(props) => props.theme.bg5};
          width: 4px;
          border-radius: 10px;
          left: 0;
        }
      }
    }
    &.active {
      padding: 0;
    }
  }
`;

const Main = styled.div`
  .SideBarButton {
    position: fixed;
    top: 70px;
    left: 42px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${(props) => props.theme.bgtgderecha};
    box-shadow: 0 0 4px ${(props) => props.theme.bg3},
      0 0 7px ${(props) => props.theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;
    z-index: 2;
    transform: ${({ $isopen }) =>
      $isopen === "true" ? `translateX(162px) rotate(3.142rad)` : `initial`};
    color: ${(props) => props.theme.text};
  }
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.bg4};
  margin: ${() => v.lgSpacing} 0;
`;
