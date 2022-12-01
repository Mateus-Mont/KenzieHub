import { GlobalStyle } from "./GlobalStyles";
import { DashBoard } from "./Pages/DashBoard";

import { RoutesMain as Routes } from "./Routers";

function App() {
  return (
    <>
      <GlobalStyle />
      {/*<Register /> */}

      {/*<Login/>*/}

      <Routes />

     
    </>
  );
}

export default App;
