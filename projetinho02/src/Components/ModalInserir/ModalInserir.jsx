

export default function ModalInserir(props) {
    document.title = "Cadastrar"
    if(props.open){
        return(
            <div>
                <h1>Modal inserir</h1>
            </div>
        );
    }
}