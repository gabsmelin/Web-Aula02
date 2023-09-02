import { Link } from "react-router-dom";
import "./Cabecalho.css" 

export default function Cabecalho() {
    return(
        <>
          <header>
            <h1>Flamengudo</h1>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/produtos">Produtos</Link></li>
                <li><Link to="/editar/produtos/1">Editar Produto - 01</Link></li>
                <li><Link to="/editar/produtos/1">Editar Produto - 02</Link></li>
                <li><Link to="/editar/produtos/1">Editar Produto - 03</Link></li>
            </ul>
        </header>  
        </>
    )
}
