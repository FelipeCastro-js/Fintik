import styled from "styled-components";
import { useAuthStore, UserAuth } from "../index";
function Home() {
  const { signOut } = useAuthStore();
  const { user } = UserAuth();
  console.log("user", user);
  return (
    <Container>
      <h1>Bienvenido Home {user.full_name}</h1>
      <img src={user.picture} />
      <button onClick={signOut}>Cerrar</button>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
