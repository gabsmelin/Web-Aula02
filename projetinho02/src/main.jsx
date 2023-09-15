import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//Importando componentes do router-dom
import {createBrowserRouter, RouterProvider } from 'react-router-dom';

//importanto páginas
import Erro404 from './routes/Erro404.jsx';
import Home from './routes/Home.jsx';
import EditarProdutos from './routes/EditarProdutos.jsx';
import ExcluirProdutos from './routes/ExcluirProduto.jsx';
import Produtos from './routes/Produtos.jsx';
import AdicionarProduto from './routes/AdicionarProduto.jsx';

const router = createBrowserRouter([
  { path: '/', element: <App />, 
    errorElement: <Erro404 />,
      children:[
        { path: '/home', element: <Home />},
        { path: '/produtos', element: <Produtos />},
        { path: '/editar/produtos/:id', element: <EditarProdutos />},
        { path: '/excluir/produtos/:id', element: <ExcluirProdutos />},
        { path: '/adicionar/produtos', element: <AdicionarProduto />},
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
