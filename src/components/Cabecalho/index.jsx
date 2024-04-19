import style from "./styles.module.css"

function Cabecalho(){

    return(
        <div className={style.mainheader}>
            <div><p>Adventure Trails FD</p></div>
            <div>
                <ul className={style.navBarHeader}>
                    <li>Explorar Trilhas</li>
                    <li>Cadastrar Trilhas</li>
                </ul>
            </div>
        </div>
    )
}

export default Cabecalho;