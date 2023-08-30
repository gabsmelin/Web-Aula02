import { Link } from "react-router-dom";
import { ListaProdutos } from "../Components/ListaProdutos";

export default function Produtos() {
    return(
        <div>
            <h1>Produtos</h1>

            <table>
                <thead>
                    <tr>
                        <th>ID:</th>
                        <th>Nome:</th>
                        <th>Preço:</th>
                    </tr>
                </thead>
                <tbody>
                    { ListaProdutos.map((produtos, indice) => {
                        <tr key={indice}>
                            <td>{produtos.id}</td>
                            <td>{produtos.nome}</td>
                            <td>{produtos.preco}</td>
                        </tr>
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}