import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//Importando componentes do router-dom
import {createBrowserRouter, RouterProvider } from 'react-router-dom';

//importanto páginas
import EditarProdutos from './routes/EditarProdutos.jsx';
import Erro404 from './routes/Erro404.jsx';
import Home from './routes/Home.jsx';
import Produtos from './routes/Produtos.jsx';

const router = createBrowserRouter([
  { path: '/', element: <App />, 
    errorElement: <Erro404 />,
      children:[
        { path: '/home', element: <Home />},
        { path: '/produtos', element: <Produtos />},
        { path: '/editar/produtos/:id', element: <EditarProdutos />},
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
