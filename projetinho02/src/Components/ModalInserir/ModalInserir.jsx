import { useEffect, useState } from "react";
import "./ModalInserir.scss";

export default function ModalInserir(props) {
  document.title = "CADASTRAR";

  //CRIAR O BLOCO DE GERAÇÃO DO ID DO PRODUTO:
  let novoId;

  useEffect(()=>{
    fetch("http://localhost:5000/produtos",{
      method: "GET",
      headers: {
        "Content-Type" : "application/json"
      }
    })
    .then((resp)=>{
      console.log("Status do REQUEST http: " + resp.status);
      return resp.json()
    })
    .then((resp) => {
        novoId = (resp[resp.length-1].id + 1);
        console.log("Novo id: " + novoId);
        return novoId;
    })
    
   },[]);
  
   const [produto, setProduto] = useState({
    id:novoId,
    nome:"",
    preco:""
  });

   const handleChange = (event) => {
        const {name, value} = event.target;
        setProduto({...produto,[name]:value})
   }

   const handleAdd = (e) => {
       
        fetch("http://localhost:5000/produtos", {
            method: "POST",
            headers: {
                "Content-type":"application/json"
            },
            body: JSON.stringify(produto)
        })
        .then((resp)=>{ 
            console.log("Status do REQUEST HTTP : " + resp.status);
            console.log(resp.json());
            })
          .catch(error => console.log(error));
        
        //Fechando o modal.
        props.setOpen(false)
   }

  if (props.open) {
    return (
      <div className="container">
        <h1>CADASTRO DE PRODUTOS</h1>
        
        <div>
        <button onClick={()=> props.setOpen(false)}> X </button>
            <form onSubmit={handleAdd}>
    
                <fieldset>
                    <legend>Novo Produto</legend>
                    <div>
                        <label htmlFor="">Nome:</label>
                        <input type="text" name="nome" placeholder="Digite o nome do produto" value={produto.nome} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="">Preço:</label>
                        <input type="number" name="preco" placeholder="Digite o valor do produto" value={produto.preco} onChange={handleChange}/>
                    </div>
                    <div>
                        <button>CADASTRAR</button>
                    </div>
                </fieldset>
            </form>
        </div>

      </div>
    );
  }
}
