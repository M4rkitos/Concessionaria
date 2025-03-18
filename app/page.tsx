import React from 'react';

const listaDeCompras = ({ itens }) => {
  return (
    <ul>
      {itens.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default ListaDeCompras;
