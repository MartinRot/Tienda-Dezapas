import { Button, Paper } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BuscarPedido from '../components/BuscarPedido/BuscarPedido';


const RastreadorPage = () => {

  let navigate = useNavigate();  

  return (

    <BuscarPedido />

  )  
};

export default RastreadorPage;

