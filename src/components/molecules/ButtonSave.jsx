import styled from "styled-components";
import { Icon } from "../../index";

function ButtonSave({ fun, title, color, icon, url }) {
  return (
    <Container type="submit" color={color}>
      <Icon> {icon}</Icon>
      <span className="btn-title" onClick={fun}>
        <a href={url} target="_blank">
          {title}
        </a>
      </span>
    </Container>
  );
}

export default ButtonSave;

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: none;
  gap: 10px;
  background-color: initial;
  .btn-title {
    background: ${(props) => props.color};
    padding: 0.6em 1.3em;
    font-weight: 900;
    font-size: 18px;
    border: 3px solid black;
    border-radius: 0.4em;
    box-shadow: 0.1em 0.1em #000;
    transition: 0.2s;
    white-space: 1px;
    color: #000;
    cursor: pointer;
    &:hover {
      transform: translate(-0.05em, -0.05em);
      box-shadow: 0.15em 0.15em #000;
    }
    &:active {
      transform: translate(0.05em, 0.05em);
      box-shadow: 0.05em 0.05em #000;
    }
  }
`;
