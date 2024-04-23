import styles from "./index.module.css"

function PaginaCadastroTrilha() {
  return (
    <>
      <div className="container">
        <h1>Cadasto de Nova Trilha</h1>
        <form className={styles.form}>

          <div>
            <label htmlFor="name">Nome da Trilha</label>
            <input type="text" name="name" />
          </div>

          <div>
            <label htmlFor="estimated-duration">Duração estimada</label>
            <input type="number" name="estimated-duration" />
          </div>

          <div>
            <label htmlFor="route-size">Trajeto (km)</label>
            <input type="number" name="route-size" />
          </div>

          <div>
            <label htmlFor="city">Cidade</label>
            <input type="text" name="city" />
          </div>

          <div>
            <label htmlFor="state">Estado</label>
            <input type="text" name="state" />
          </div>

          <div>
            <label htmlFor="username">Nome do Usuario</label>
            <input type="text" name="username" />
          </div>

          <div>
            <label htmlFor="difficult">Dificuldade</label>
            <select name="difficult">
              <option value="Inciante">Inciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Difícil">Difícil</option>
            </select>
          </div>

          <div>
            <label htmlFor="type">Tipo de trilha</label>
            <select name="type">
              <option value="Caminhada">Caminhada</option>
              <option value="Trekking">Trekking</option>
            </select>
          </div>

          <div>
            <label htmlFor="trail-image">Url imagem da trilha</label>
            <input type="text" name="trail-image" />
          </div>
        </form>
        <button>Cadastrar</button>
        <button>Voltar</button>
      </div>
    </>
  );
}

export default PaginaCadastroTrilha;
