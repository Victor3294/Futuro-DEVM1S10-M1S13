import style from "./styles.module.css"

function Cabecalho(){

    return(
        <div className={style.mainheader}>
            <div><p>Adventure Trails FD</p></div>
            <nav className={style.navBarHeader}>
                <a href="#" className={style.link}>Explorar Trilhas</a>
                <a href="#" className={style.link}>Cadastrar Trilhas</a>
            </nav>
        </div>
    )
}

export default Cabecalho;