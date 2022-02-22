import React, { useRef, useState } from 'react';
import "./styles.css"
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useCart } from '../../context/CartContext';
import { getFirestore } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import firebase from "firebase";
import 'firebase/firestore'
import { Typography } from '@mui/material';

const BuscarPedido = () => {
    
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
    let navigate = useNavigate();

    return (
    
    <div className="contenedor">

    <Formik
        initialValues={{
            orderNumber: '',
        }}
        validate={(valores) => {

            let errores = {};

            // Validacion orderNumber
            if(!valores.orderNumber){
                errores.orderNumber = 'Por favor ingresa un numero de orden'
            }else if ( !/^[a-zA-Z0-9_.+-]{20}$/.test(valores.orderNumber) ){
                errores.orderNumber = 'El numero de orden no es valido!'
            }              

            return errores;
        }}

        onSubmit={( valores ) => {         

            const orderNumber = valores.orderNumber   

            if(orderNumber){
                navigate(`/checkout/${orderNumber}`)
            }
            
            cambiarFormularioEnviado(true);
            setTimeout(() => cambiarFormularioEnviado(false), 5000)
        }}
    >

        {( { errors } ) => (
            <Form className="formulario" >               

                <div>
                    <Typography sx={{ fontSize: 22, marginBottom: 2 }} color="text.secondary" gutterBottom>
                        Estado de tu pedido
                    </Typography>

                    <label htmlFor="orderNumber">Ingresa tu numero de orden</label>
                    <Field 
                        type="text" 
                        id="orderNumber" 
                        name="orderNumber" 
                        placeholder="Numero de orden"                  
                    />

                    <ErrorMessage name="orderNumber" component={() => (
                        <div className="error">{ errors.orderNumber } </div>
                    )} />

                </div>                

                <button type="submit">Ver mi pedido</button>

                {formularioEnviado && <p className="exito">Compra realizada con exito!</p>}
            </Form>
        )}        

    </Formik>       
    
    </div>

  )
};

export default BuscarPedido;
