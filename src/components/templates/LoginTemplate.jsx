import React from "react";
import styled from "styled-components";
import { ButtonSave } from "../../index";

function LoginTemplate() {
  return (
    <Container>
      <div>
        <span>version 1.0</span>
        <div>
          <img src="" alt="" />
        </div>
        <Title>Fintik</Title>
        <p>Visualiza, organiza y mejora tu relación con el dinero.</p>
        <Button>
          <ButtonSave />
        </Button>
      </div>
    </Container>
  );
}

export default LoginTemplate;

const Container = styled.div`
  height: 100vh;
`;

const Title = styled.span`
  font-size: 5rem;
  font-weight: 700;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
`;
