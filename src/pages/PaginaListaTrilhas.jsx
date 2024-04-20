import { useEffect, useState } from "react";
import CardTrilha from "../components/CardTrilha";
import useFetch from "../hooks/useFetch";
function PaginaListaTrilhas() {
  const [listaDeTrilhas, isLoading] = useFetch("/listaTrilhas.json");

  const [trilhas, setTrilhas] = useState([]);
  useEffect(() => {
    if (!!listaDeTrilhas && !isLoading) {
      setTrilhas(listaDeTrilhas.trilhas);
    }
  }, [listaDeTrilhas]);

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
