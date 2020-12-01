import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SlideShow from 'react-image-show';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import styles from './AboutCorpo.module.css';
import BaseService from '../../service/axios';
import { Typography } from '@material-ui/core';

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
  const [fui, setFui] = useState(false);

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

  useEffect(() => {
    BaseService.getFuiOuNaoFui(id)
      .then(res => setFui(res.data.fui))
      .catch(error => console.log("USE EFFETC FUI " + error));
  }, []);

  const handleFui = () => {
    setFui(!fui)
    if (!fui) {
      const usuarioDestino = {
        favorito: false,
        destino_id: id,
        nome: corpo.nome,
        imagem: imagens[0]
      }
      console.log("USUARIO DESTINO: ", usuarioDestino)
      BaseService.addUsuarioDestino(usuarioDestino)
        .then(res => console.log("HANDLE FUI: ", res))
        .catch(error => console.log("HANDLE FUI ERROR: ", error));
    } else {
      BaseService.deleteUsuarioDestino(id)
        .then(res => console.log("DESTINO DELETADO: ", res))
        .catch(error => console.log("DESTINO NÂO DELETADO: ", error));
    }
  }

  return (
    <div >
      {console.log("FUI ", fui)}
      <h2 className={styles.nome} >{corpo.nome}</h2>
      <div className={styles.main} style={{ width: '100%' }}>
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
        <div className={styles.infos} style={{ width: '50%', height: '550px' }} >
          {corpo.descricao}
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
            <FormGroup row >
              <FormControlLabel style={{ margin: 10 }}
                control={
                  <Checkbox
                    style={{ marginRight: 10, color: '#001f3f' }}
                    checked={fui}
                    onChange={handleFui}
                    value="fui"
                  />
                }
                label={<Typography style={{ color: '#001f3f', fontWeight: "bold", fontSize: '20px' }} >Já Fui</Typography>}
              />
            </FormGroup>
          </div>
        </div>
      </div>
    </div >
  );
}

export default AboutCorpo;
