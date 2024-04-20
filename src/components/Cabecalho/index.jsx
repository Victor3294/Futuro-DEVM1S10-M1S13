import style from "./styles.module.css"
import {Link} from "react-router-dom"

function Cabecalho(){

    return(
        <div className={style.mainheader}>
            <Link to="/" className={style.link}><p>Adventure Trails FD</p></Link>
            <nav className={style.navBarHeader}>
                <Link to="/lista-trilhas" className={style.link}>Explorar Trilhas</Link>
                <Link to="/cadastro-trilha" className={style.link}>Cadastrar Trilhas</Link>
            </nav>
        </div>
    )
}

export default Cabecalho;