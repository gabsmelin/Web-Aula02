import { Link } from "react-router-dom";
import  styles from "./Produtos.module.css";
import { AiFillEdit as Editar } from "react-icons/ai";
import { AiFillDelete as Excluir } from "react-icons/ai";
import { useEffect, useState } from "react";
import ModalInserir from "../Components/ModalInserir/ModalInserir";

export default function Produtos() {
    document.title="ListaProdutos";

    const [produtos, setProdutos] = useState([{}]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if(!open) {
        
            fetch("http://localhost:5000/produtos",{
            method: "GET",
            headers:{
                "Content-Type": "application/json"
            }
            })
            .then((response)=> response.json())
            .then((listaProdutos)=>{
                setProdutos(listaProdutos);
            })
        }
      },[open]);

      return (
        <div>
            <h1>Produtos</h1>
    
            {open ? <ModalInserir open={open} setOpen={setOpen} /> : "" }
            <button onClick={()=> setOpen(true)}>OPEN - MODAL</button>
           
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
                {produtos.map((produto,indice)=>(
                 <tr key={indice}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.preco}</td>
                    <td><Link to={`/editar/produtos/${produto.id}`}> <Editar/> </Link> |
                     <Link to={`/excluir/produtos/${produto.id}`}> <Excluir/> </Link></td>
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