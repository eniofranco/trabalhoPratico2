import React from 'react';
import './index.css';

const FlexBoxLista = (props) => {
  return (
    <>
      <h2 className="titulo">{props.titulo}</h2>
      <div className="flex-lista">{props.children}</div>
    </>
  );
};

export default FlexBoxLista;
