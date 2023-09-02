import { useParams } from "react-router-dom";
import { ListaProdutos } from "../Components/ListaProdutos";


export default function EditarProdutos() {
    document.title = "Editar Produtos";

    const {id} = useParams();

    const produtoRecuperadoPorId = ListaProdutos.filter((produto)=>{
        if(produto.id === parseInt(id)) {
            return produto;
        }
    });

    return(
        <div>
            <h1>Editar Produtos</h1>
            <p>Produtos selecionado - {id}</p>
            <p>Nome do Produto - {produtoRecuperadoPorId[0].nome}</p>
            <p>Preço do Produto - {produtoRecuperadoPorId[0].preco}</p>
        </div>
    )
}