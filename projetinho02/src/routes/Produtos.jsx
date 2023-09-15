import { Link } from "react-router-dom";
import { ListaProdutos } from "../Components/ListaProdutos";
import  styles from "./Produtos.module.css";
import { AiFillEdit as Editar } from "react-icons/ai";
import { AiFillDelete as Excluir } from "react-icons/ai";

export default function Produtos() {
    document.title="ListaProdutos";


    return(
        <div>
            <h1>Produtos</h1>

            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.tableth}>Id</th>
                        <th className={styles.tableth}>Nome</th>
                        <th className={styles.tableth}>Preço</th>
                        <th className={styles.tableth}>Editar|Excluir</th>
                    </tr>  
                </thead>
                <tbody>
                    {ListaProdutos.map((produto,indice)=>(
                    <tr key={indice}>
                        <td>{produto.id}</td>
                        <td>{produto.nome}</td>
                        <td>R${produto.preco}</td>
                        <td>
                            <Link to={`/editar/produtos/${produto.id}`}><Editar/>Editar | </Link>
                            <Link to={`/excluir/produtos/${produto.id}`}><Excluir/>Excluir</Link>
                        </td>
                    </tr>
                ))}
        
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={4}><Link to="/adicionar/produtos">Adicionar</Link></td>
                    </tr>
                </tfoot>    
            </table>
        </div>
    )
}