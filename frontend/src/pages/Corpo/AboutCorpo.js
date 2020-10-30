import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import BaseService from '../../service/axios';

const AboutCorpo = props => {
  const { id } = useParams();
  const [corpo, setCorpo] = useState({
    descricao: '',
    nota: '',
    periculosidade: '',
    distancia: '',
    temETS: '',
    imagem1: '',
    imagem2: '',
    nome: '',
    tipo: ''
  });

  useEffect(() => {
    let path = `/destinos/${id}`;
    BaseService.getServer(path)
      .then(res => {
        setCorpo({
          ...corpo,
          ...res.data.data.destino,
        })
      })
      .catch(error => console.log(error))
  }, [id]);

  return (
    <div >
      {corpo.nome}
      <br />
      {corpo.descricao}
    </div >
  );
}

export default AboutCorpo;
