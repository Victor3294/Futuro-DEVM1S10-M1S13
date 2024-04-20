import Cabecalho from "./components/Cabecalho/index.jsx";
import "./App.css";
import { Outlet } from "react-router-dom";
import { TrilhasContextProvider } from "./contexts/TrilhasContext.jsx";

function App() {
  return (
    <TrilhasContextProvider>
      <Cabecalho />
      <Outlet />
    </TrilhasContextProvider>
  );
}

export default App;
