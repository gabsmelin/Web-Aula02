import { Outlet } from "react-router-dom";
import Cabecalho from "./Components/Cabecalho";
import Rodape from "./Components/Rodape";

//Para criar elemento, obrigatoriamente temos que usar o export.
export default function App() {

  return(
    //Usamos uma FRAGMENTS(tag vazia) como "mãe" de todas as outras, mas ela não altera em nada o nosso código
    <>
      {/*Crie um cabecalho com h1 de titulo*/}
      <Cabecalho/>
      <Outlet/>
      <Rodape/>
    </>
  );

}