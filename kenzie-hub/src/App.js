import { useState } from "react";
import { Modal } from "./Components/Modal";
import { AuthContext } from "./Contexts";
import { TechsContext, TechsUserContext } from "./Contexts/contextTechs";
import { GlobalStyle } from "./GlobalStyles";
import { DashBoard } from "./Pages/DashBoard";

import { RoutesMain as Routes } from "./Routers";

function App() {
  return (
    <>
      <GlobalStyle />
      <AuthContext>
        <TechsContext>

          <Routes />
        </TechsContext>
      </AuthContext>
    </>
  );
}

export default App;
