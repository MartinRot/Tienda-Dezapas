import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router-dom';


const RastreadorPage = () => {

  //Hook react similar a link pero se puede utilizar para hacer validaciones
  let navigate = useNavigate();

  const buscarPedido = () => {
    //Si el usuario esta logueado
    const logueado = true;
    if (logueado) {
      navigate('/zapatillas')
    } else {
      navigate('/')
    }
  };

  return (

    <Box>
      <Button onClick={buscarPedido}> Buscar pedido </Button>
    </Box>

  )  
};

export default RastreadorPage;

