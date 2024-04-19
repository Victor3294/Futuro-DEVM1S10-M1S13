import CardTrilha from "./components/CardTrilha"
import useFetch from "./hooks/useFetch.js"
import Cabecalho from "./components/Cabecalho/index.jsx"
import "./App.css"

function App() {
  const [listaDeTrilhas, isLoading] = useFetch(
    "/listaTrilhas.json"
  )

  return (
    <>
    <Cabecalho></Cabecalho>
    
    {isLoading && <p>Trilhas carregando</p>}
    {!isLoading && listaDeTrilhas &&
      listaDeTrilhas.map((trilha, index) => (
        <CardTrilha dadosTrilha={trilha} key={index} />
      ))
    }
      
      
    </>
  )
}

export default App
