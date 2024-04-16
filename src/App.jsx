import CardTrilha from "./components/CardTrilha"
import useFetch from "./hooks/useFetch.js"

function App() {
  const [listaDeTrilhas, isLoading] = useFetch(
    "/listaTrilhas.json"
  )

  return (
    <>
    
    
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
