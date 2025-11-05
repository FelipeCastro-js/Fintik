import React from "react";
import styled from "styled-components";
import { ButtonSave, v, useAuthStore } from "../../index";

// PWpv4D68TF7sBj0K

function LoginTemplate() {
  const { signWithGoogle } = useAuthStore();
  return (
    <Container>
      <div className="contentCard">
        <span className="version">version 1.0</span>
        <div className="contentImage">
          <img src={v.logo} alt="Logo Fintik" />
        </div>
        <Title>Fintik</Title>
        <p className="phrase">
          Visualiza, organiza y mejora tu relación con el dinero.
        </p>
        <Button>
          <ButtonSave
            title="Iniciar con Google"
            color={v.colorSecundario}
            icon={<v.iconogoogle />}
            fun={signWithGoogle}
          />
        </Button>
      </div>
    </Container>
  );
}

export default LoginTemplate;

const Container = styled.div`
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #6a11cb 100%);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;

  .contentCard {
    background: rgba(20, 20, 20, 0.85);
    border-radius: 20px;
    gap: 30px;
    display: flex;
    flex-direction: column;
    padding: 30px;
    margin: 20px;
    box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.5);

    .version {
      color: #b0b0b0;
      text-align: start;
      font-size: 0.9rem;
    }

    .contentImage {
      img {
        max-width: 55%;
        filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.4));
        animation: flotar 2s ease-in-out infinite alternate;
      }
    }

    .phrase {
      color: #cfcfcf;
      font-size: 1.3rem;
      font-weight: 400;
    }
  }

  @keyframes flotar {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(30px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

const Title = styled.span`
  font-size: 4.5rem;
  font-weight: 800;
  background: linear-gradient(90deg, #00f34a, #00d4ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
`;
