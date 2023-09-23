import "./ModalInserir.scss"

export default function ModalInserir(props) {
    document.title = "Cadastrar"
    if(props.open){
        return(
            <div className="container">
                <h1>Modal inserir</h1>
                <button onClick={()=> setOpen=(false)}>Close - Modal</button>
            </div>
        );
    }
}