import { StyledHeaderHome } from "./style";
import { useNavigate } from "react-router-dom";

export const HeaderHome = () => {
  const navigate = useNavigate()
  function logout(){
    localStorage.removeItem("token")
    navigate("/")

  }
  return (
    <StyledHeaderHome>
      <h2>Kenzie Hub</h2>
      <button onClick={logout}>Sair</button>
    </StyledHeaderHome>
  );
};
