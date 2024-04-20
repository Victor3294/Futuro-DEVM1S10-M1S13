import CardTrilha from "./components/CardTrilha"
import useFetch from "./hooks/useFetch.jsx"
import Cabecalho from "./components/Cabecalho/index.jsx"
import "./App.css"
import { useEffect, useState } from "react"

function App() {
  const [listaDeTrilhas, isLoading] = useFetch(
    "/listaTrilhas.json"
  )

  const [trilhas, setTrilhas] = useState([])
  useEffect(() =>{
    if(!!listaDeTrilhas && !isLoading){
      setTrilhas(listaDeTrilhas.trilhas)
    }
  }, [listaDeTrilhas])

  return (
    <>
    <Cabecalho></Cabecalho>
    
    {isLoading && <p>Trilhas carregando</p>}
    {!isLoading && !!trilhas &&
     trilhas.map((trilha, index) => (
        <CardTrilha dadosTrilha={trilha} key={index} />
      ))
    }
      
      
    </>
  )
}

export default App
