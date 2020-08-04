import React, { Fragment } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import CategoriasProvider from './Context/CategoriasContext';
import RecetasProvider from './Context/RecetasContext';
import ListarRecetas from './components/ListarRecetas';
import ModalProvider from './Context/ModalContext'

function App() {
  return (
    <ModalProvider>
      <RecetasProvider>
        <CategoriasProvider>
          <Header />
          <div className="container mt-5">
            <div className="row">
              <Formulario />
            </div>

            <ListarRecetas />
          </div>
        </CategoriasProvider>
      </RecetasProvider>
    </ModalProvider>
  );
}

export default App;