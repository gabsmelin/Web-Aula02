import { useNavigate, useParams } from "react-router-dom";
import { ListaProdutos } from "../Components/ListaProdutos";
import { useState } from "react";


export default function EditarProdutos() {
    document.title = "Editar Produtos";

    const {id} = useParams();

    const navigate = useNavigate();

    const produtoRecuperadoPorId = ListaProdutos.filter(item => item.id == id)[0];

    const [produtos, setProduto] = useState({
        id: produtoRecuperadoPorId.id,
        nome: produtoRecuperadoPorId.nome,
        preco: produtoRecuperadoPorId.preco
    })

    const handleChange = (event) => {
        console.log(event.target)

        const {name, value} =event.target;

        setProduto({...produtos,[name]:value})
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        let indice;
        indice = ListaProdutos.findIndex((item) => item.id == produtos.id)

        ListaProdutos.splice(indice,1,produtos);
    
        alert("Produto alterado com sucesso!");

        //realizando o redirect
        navigate('/produtos')
    }


    return(
        <div>
            <h1>Editar Produtos</h1>
            <div>
                <form action="" onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Produto selecionado</legend>
                        <div>
                            <input type="hidden" id="id" />
                        </div>
                        <div>
                            <label htmlFor="idNome">Nome:</label>
                            <input type="text" name="nome" id="idNome" onChange={handleChange} value={produtos.nome}/>
                        </div>
                        <div>
                            <label htmlFor="idPreco">Preço:</label>
                            <input type="number" name="preco" id="idPreco" onChange={handleChange} value={produtos.preco}/>
                        </div>
                        <div>
                            <button>Editar</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}