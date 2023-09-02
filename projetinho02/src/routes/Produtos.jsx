import { Link } from "react-router-dom";
import { ListaProdutos } from "../Components/ListaProdutos";
import "./Produtos.css";
import { AiFillEdit as Editar } from "react-icons/ai";
import { AiFillDelete as Excluir } from "react-icons/ai";

export default function Produtos() {
    document.title="ListaProdutos";

    const tbEstilos = {
        textAlign:"center",
        letterSpacing:"2px",
        color:"#0000ff",
        textDecoration:"none"
    }

    return(
        <div>
            <h1>Produtos</h1>

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Editar|Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {ListaProdutos.map((produto,indice)=>(
                    <tr key={indice} style={tbEstilos}>
                        <td>{produto.id}</td>
                        <td>{produto.nome}</td>
                        <td>{produto.preco}</td>
                        <td>
                            <Link to={`/editar/produtos/${produto.id}`}><Editar/>Editar | </Link>
                            <Link to={`/excluir/produtos/${produto.id}`}><Excluir/>Excluir</Link>
                        </td>
                    </tr>
                ))}
        
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={4} style={tbEstilos}>Produtos</td>
                    </tr>
                </tfoot>    
            </table>
        </div>
    )
}