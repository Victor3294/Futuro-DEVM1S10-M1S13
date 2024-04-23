import { useForm } from "react-hook-form";
import styles from "./index.module.css";
import { useContext } from "react";
import { TrilhasContext } from "../../contexts/TrilhasContext";
import { useNavigate } from "react-router-dom";

//Passo 1 - importar um hook useForm e em sequencia desestruturar o retorno para utilizar a função register
//Passo 2 - registar os campos incluindo a validação
//Passo 3 - criar a função de submissão
//Passo 4 - capturar a função handleSubmit do retorno do hook useForm;
//Passo 5 - Passar o valor da prop onSubmit do formulario como a handleSubmit e como parâmetro da handleSubmit a função personalizada de envio do formulario (nesse caso sendForm);

function PaginaCadastroTrilha() {
  const { register, handleSubmit } = useForm();
  const { addTrail } = useContext(TrilhasContext);
  const navigate = useNavigate()
  function sendForm(formValue) {
    console.log(formValue);
    addTrail({
      ...formValue,
      duracao: Number(formValue.duracao),
      trajeto: Number(formValue.trajeto),
    });
    navigate("/lista-trilhas")
  }
  return (
    <>
      <div className="container">
        <h1>Cadasto de Nova Trilha</h1>
        <form className={styles.form} onSubmit={handleSubmit(sendForm)}>
          <div>
            <label htmlFor="nomeTrilha">Nome da Trilha</label>
            <input
              type="text"
              {...register("nomeTrilha", {
                required: "Este campo é obrigatótio",
                maxLength: {
                  value: 100,
                  message: "Este campo aceita no maximo 100 caracteres",
                },
              })}
            />
          </div>

          <div>
            <label htmlFor="duracao">Duração estimada em minutos</label>
            <input
              type="number"
              {...register("duracao", {
                required: "Este campo é obrigatório",
              })}
            />
          </div>

          <div>
            <label htmlFor="trajeto">Trajeto (km)</label>
            <input
              type="number"
              {...register("trajeto", {
                required: "Este campo é obrigatório",
              })}
            />
          </div>

          <div>
            <label htmlFor="cidade">Cidade</label>
            <input
              type="text"
              {...register("cidade", {
                required: "Este campo é obrigatório",
                maxLength: {
                  value: 60,
                  message: "Este campo aceita no máximo 60 caracteres",
                },
              })}
            />
          </div>

          <div>
            <label htmlFor="estado">Estado</label>
            <input
              type="text"
              {...register("estado", {
                required: "Este campo é obrigatório",
                maxLength: {
                  value: 2,
                  message: "Este campo aceita no máximo 2 caracteres",
                },
              })}
            />
          </div>

          <div>
            <label htmlFor="nomeUsuario">Nome do Usuario</label>
            <input
              type="text"
              {...register("nomeUsuario", {
                required: "Este campo é obrigatório",
                maxLength: {
                  value: 60,
                  message: "Este campo aceita no máximo 60 caracteres",
                },
              })}
            />
          </div>

          <div>
            <label htmlFor="dificuldade">Dificuldade</label>
            <select
              {...register("dificuldade", {
                required: "Este campo é obrigatório",
              })}
            >
              <option value="">Selecione a dificuldade da Trilha</option>
              <option value="Inciante">Inciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Difícil">Difícil</option>
            </select>
          </div>

          <div>
            <label htmlFor="tipo">Tipo de trilha</label>
            <select
              {...register("tipo", {
                required: "Este campo é obrigatório",
              })}
            >
              <option value="">Selecione o tipo da trilha</option>
              <option value="caminhada / trekking">Caminhada / Trekking</option>
              <option value="ciclismo">Ciclismo</option>
            </select>
          </div>

          <div>
            <label htmlFor="urlImagem">Url imagem da trilha</label>
            <input
              type="text"
              {...register("urlImagem", {
                required: "Este campo é obrigatório",
                maxLength: {
                  value: 500,
                  message: "Este campo aceita no máximo 300 caracteres",
                },
              })}
            />
          </div>
          <div>
            <button type="submit">Cadastrar</button>
            <button>Voltar</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default PaginaCadastroTrilha;
