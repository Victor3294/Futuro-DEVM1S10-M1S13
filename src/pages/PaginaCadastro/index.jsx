import { useForm } from "react-hook-form";
import styles from "./index.module.css";

//Passo 1 - importar um hook useForm e em sequencia desestruturar o retorno para utilizar a função register

function PaginaCadastroTrilha() {
  const { register } = useForm();
  return (
    <>
      <div className="container">
        <h1>Cadasto de Nova Trilha</h1>
        <form className={styles.form}>
          <div>
            <label htmlFor="name">Nome da Trilha</label>
            <input
              type="text"
              {...register("name", {
                required: "Este campo é obrigatótio",
                maxLength: {
                  value: 100,
                  message: "Este campo aceita no maximo 100 caracteres",
                },
              })}
            />
          </div>

          <div>
            <label htmlFor="estimated-duration">
              Duração estimada em minutos
            </label>
            <input
              type="number"
              {...register("estimated-duration", {
                required: "Este campo é obrigatório",
              })}
            />
          </div>

          <div>
            <label htmlFor="route-size">Trajeto (km)</label>
            <input
              type="number"
              {...register("route-size", {
                required: "Este campo é obrigatório",
              })}
            />
          </div>

          <div>
            <label htmlFor="city">Cidade</label>
            <input
              type="text"
              {...register("city", {
                required: "Este campo é obrigatório",
                maxLength: {
                  value: 60,
                  message: "Este campo aceita no máximo 60 caracteres",
                },
              })}
            />
          </div>

          <div>
            <label htmlFor="state">Estado</label>
            <input
              type="text"
              {...register("state", {
                required: "Este campo é obrigatório",
                maxLength: {
                  value: 2,
                  message: "Este campo aceita no máximo 2 caracteres",
                },
              })}
            />
          </div>

          <div>
            <label htmlFor="username">Nome do Usuario</label>
            <input type="text" {...register("username", {
              required: "Este campo é obrigatório",
              maxLength: {
                value: 60,
                message: "Este campo aceita no máximo 60 caracteres"
              }
            })} />
          </div>

          <div>
            <label htmlFor="difficult">Dificuldade</label>
            <select {...register("difficult", {
              required: "Este campo é obrigatório"
            })}>
              <option value="">Selecione a dificuldade da Trilha</option>
              <option value="Inciante">Inciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Difícil">Difícil</option>
            </select>
          </div>

          <div>
            <label htmlFor="type">Tipo de trilha</label>
            <select {...register("type", {
              required: "Este campo é obrigatório"
            })}>
              <option value="">Selecione o tipo da trilha</option>
              <option value="Caminhada">Caminhada</option>
              <option value="Trekking">Trekking</option>
            </select>
          </div>

          <div>
            <label htmlFor="trail-image">Url imagem da trilha</label>
            <input type="text" {...register("trail-image", {
              required: "Este campo é obrigatório",
              maxLength: {value: 300, message: "Este campo aceita no máximo 300 caracteres"}
            })} />
          </div>
        </form>
        <button>Cadastrar</button>
        <button>Voltar</button>
      </div>
    </>
  );
}

export default PaginaCadastroTrilha;
