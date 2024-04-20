import Cabecalho from "./components/Cabecalho/index.jsx";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Cabecalho />
      <Outlet />
    </>
  );
}

export default App;
