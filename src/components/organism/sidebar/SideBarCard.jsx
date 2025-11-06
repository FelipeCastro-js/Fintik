import styled from "styled-components";
import { v, ButtonSave } from "../../../index";

export function SideBarCard() {
  return (
    <Container>
      <span className="icon">{<v.iconoayuda />}</span>
      <div className="cardContent">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <h3>Centro de ayuda</h3>
        <div className="contentButton">
          <ButtonSave title="Contactar" color="#f8f2fd" url="" />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  text-align: center;
  position: relative;

  .icon {
    position: absolute;
    font-size: 3rem;
    border-radius: 50%;
    top: -8px;
    right: 50%;
    transform: translate(50%);
    z-index: 100;
  }
  .cardContent {
    position: relative;
    padding: 1rem;
    background: linear-gradient(135deg, #2196f3, #673ab7);
    border-radius: 10px;
    overflow: hidden;

    .circle1,
    .circle2 {
      position: absolute;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 50%;
      opacity: 0.7;
    }
    .circle1 {
      height: 100px;
      width: 100px;
      top: -50px;
      left: -50px;
    }
    .circle2 {
      height: 130px;
      width: 130px;
      bottom: -80px;
      right: -70px;
    }
    h3 {
      font-size: 1.1rem;
      margin-top: 1rem;
      padding: 1rem 0;
      font-weight: 800;
      color: #fff;
    }
    .contentButton {
      position: relative;
      margin-left: -8px;
    }
  }
`;
