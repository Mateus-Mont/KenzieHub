import { StyledHeaderHome } from "./style";


export const HeaderHome = ({navigate}) => {

  function logout(){
  window.localStorage.removeItem("token")
  navigate("/")
   

  }
  return (
    <StyledHeaderHome>
      <h2>Kenzie Hub</h2>
      <button onClick={logout}>Sair</button>
    </StyledHeaderHome>
  );
};
