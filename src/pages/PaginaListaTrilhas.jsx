import { useContext} from "react";
import CardTrilha from "../components/CardTrilha";
import { TrilhasContext } from "../contexts/TrilhasContext";

function PaginaListaTrilhas() {
  
  const {trilhas, isLoading} = useContext(TrilhasContext)

  return (
    <>
      <h1>Pagina Lista trilhas</h1>
      {isLoading && <p>Trilhas carregando</p>}
      {!isLoading &&
        !!trilhas &&
        trilhas.map((trilha, index) => (
          <CardTrilha dadosTrilha={trilha} key={index} />
        ))}
    </>
  );
}

export default PaginaListaTrilhas;
