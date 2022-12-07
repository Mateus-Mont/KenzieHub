import { useState } from "react";
import { Modal } from "./Components/Modal";
import { Context } from "./Contexts";
import { GlobalStyle } from "./GlobalStyles";
import { DashBoard } from "./Pages/DashBoard";

import { RoutesMain as Routes } from "./Routers";

function App() {
  return (
    <>
      <GlobalStyle />
      <Context>
      <Routes />
      </Context>
    </>
  );
}

export default App;
