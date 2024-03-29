

function CardTrilha ({dadosTrilha}){
    return(
        <>
            <h1>{dadosTrilha.nomeTrilha}</h1>
            <span>{dadosTrilha.cidade}/{dadosTrilha.estado}</span>
            <img src={dadosTrilha.urlImagem} alt="" />
        </>
    )
}
export default CardTrilha;