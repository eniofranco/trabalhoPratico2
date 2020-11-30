import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FlexBoxLista from '../../Componentes/FlexBoxLista';
import FlexBoxItem from '../../Componentes/FlexBoxItem';

const Aplicacao = () => {
  const [aplicacao, setAplicacao] = useState(null);

  useEffect(() => {
    axios.get('https://api.publicapis.org/entries').then((resposta) => {
      setAplicacao(resposta.data);
    });
  }, []);

  if (aplicacao === null) {
    return <p>Carregando...</p>;
  }
  return (
    <>
      <FlexBoxLista titulo="Nome da API">
        {aplicacao.entries.map((item) => (
          <FlexBoxItem>{item.API}</FlexBoxItem>
        ))}
      </FlexBoxLista>
      <FlexBoxLista titulo="Descrição">
        {aplicacao.entries.map((item) => (
          <FlexBoxItem>{item.Description}</FlexBoxItem>
        ))}
      </FlexBoxLista>
      <FlexBoxLista titulo="Link para a API">
        {aplicacao.entries.map((item) => (
          <FlexBoxItem>
            <a href="https://api.publicapis.org/entries">{item.Link} </a>
          </FlexBoxItem>
        ))}
      </FlexBoxLista>
      <FlexBoxLista titulo="Categorias">
        {aplicacao.entries.map((item) => (
          <FlexBoxItem>{item.Category}</FlexBoxItem>
        ))}
      </FlexBoxLista>
    </>
  );
};

export default Aplicacao;
