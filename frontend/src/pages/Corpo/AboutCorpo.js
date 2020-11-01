import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SlideShow from 'react-image-show';

import styles from './AboutCorpo.module.css';
import BaseService from '../../service/axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  const [imagens, setImagens] = useState([]);

  useEffect(() => {
    let path = `/destinos/${id}`;
    BaseService.getServer(path)
      .then(res => {
        setCorpo({
          ...res.data.data.destino,
        });
        setImagens([BaseService.baseUrl + `/imagens/${res.data.data.destino.image1}`,
        BaseService.baseUrl + `/imagens/${res.data.data.destino.image2}`]);
      })
      .catch(error => console.log(error))
  }, [id]);

  return (
    <div >
      <h2 className={styles.nome} >{corpo.nome}</h2>
      <div className={styles.main}>
        <SlideShow
          images={imagens}
          width="700px"
          imagesWidth="600px"
          imagesHeight="550px"
          imagesHeightMobile="56vw"
          arrows={false}
          fixedImagesHeight
          indicators
        />
        <div className={styles.infos} >
          {corpo.descricao}
          {/* <FontAwesomeIcon icon={["fas", "coffee"]} /> */}
          {/* not working ?? */}
        </div>
      </div>
    </div >
  );
}

export default AboutCorpo;
