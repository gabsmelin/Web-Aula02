import { useEffect, useState } from "react";
import "./ModalInserir.scss";

export default function ModalInserir(props) {
  document.title = "CADASTRAR";

  console.log(props.idEditar);
  let novoId;
  const [produto, setProduto] = useState({
    id:novoId,
    nome:"",
    preco:""
  });
  //CRIAR O BLOCO DE GERAÇÃO DO ID DO PRODUTO:

  useEffect(()=>{
    fetch(`http://localhost:5001/produtos/${props.idEditar > 0 ? props.idEditar : ""}`, {
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

        if(props.idEditar > 0){
          setProduto(resp);
        }else{
          novoId = (resp[resp.length-1].id + 1);
          console.log("NOVO ID : " + novoId);
          return novoId;
        }
    })
    
   },[]);

   const handleChange = (event) => {
        const {name, value} = event.target;
        setProduto({...produto,[name]:value})
   }

   const handleAdd = (e) => {
       
      fetch(`http://localhost:5001/produtos/${props.idEditar > 0 ? props.idEditar : ""}`, {
          method: (props.idEditar > 0 ? "PUT" : "POST"),
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
        
      //Zerando id
      props.setId(0)
      //Fechando o modal.
      props.setOpen(false)
   }

  if (props.open) {
    return (
      <div className="container">
        <h1>{props.Editar > 0 ? "Editar Produto": "Cadastrar Produto"}</h1>
        
        <div>
        <button className="btnClose" onClick={()=> props.setOpen(false)}> X </button>
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
                        <button>{props.idEditar > 0 ? "EDITAR" : "CADASTRAR"}</button>
                    </div>
                </fieldset>
            </form>
        </div>

      </div>
    );
  }
}
