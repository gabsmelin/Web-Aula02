
import { useNavigate, useParams } from "react-router-dom";
import { ListaProdutos } from "../Components/ListaProdutos";
import { useState } from "react";


export default function AdicionarProduto() {
    document.title = "Adicionar Produtos";

    const navigate = useNavigate();

    //Criando variáveis para pegar o valor dos inputs
    const [produtos, setProduto] = useState({
        nome: '',
        preco: '',
    });

    //Atulizando escrita dentro do input até chegar no resultado final(escrita que irá ser adicionada na nossa lista)
    const handleChange = (event) => {
        const {name, value} =event.target;

        setProduto({...produtos,[name]:value})
    }

    //função para adicionar os valores de fato
    const handleAdd = (event) => {
        //evitar que a página fique recarregando
        event.preventDefault();

        //adicionando valores passados pelo usuário nos inputs
        ListaProdutos.push({id: ListaProdutos.length + 1, ...produtos});

        alert("Produto adicionado com sucesso!");

        //realizando o redirect
        navigate('/produtos')
    }


   return(
        <div>
            <h1>Adicionar Produto</h1>
            <div>
                <form action="">
                    <fieldset>
                        <legend>Adicionar Produto</legend>
                        <div>
                            <input type="hidden" id="id" />
                        </div>
                        <div>
                            <label htmlFor="idNome">Nome:</label>
                            <input type="text" name="nome" id="idNome" value={produtos.nome} onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="idPreco">Preço:</label>
                            <input type="number" name="preco" id="idPreco" value={produtos.preco} onChange={handleChange}/>
                        </div>
                        <div>
                            <button onClick={handleAdd}>Adicionar</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}