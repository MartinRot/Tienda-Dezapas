import React, { useRef, useState } from 'react';
import "./styles.css"
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useCart } from '../../context/CartContext';
import { getFirestore } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {

    const { cart, precioTotal, clearCart } = useCart();  
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
    let navigate = useNavigate();

    return (
    
    <div className="contenedor">

    <Formik
        initialValues={{
            nombre: '',
            correo: ''
        }}
        validate={(valores) => {

            let errores = {};

            // Validacion nombre
            if(!valores.nombre){
                errores.nombre = 'Por favor ingresa un nombre'
            }else if ( !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre) ){
                errores.nombre = 'El nombre solo puede contener letras y espacios'
            }

            // Validacion correo
            if(!valores.correo){
                errores.correo = 'Por favor ingresa un correo electronico'
            }else if ( !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo) ){
                errores.correo = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo'
            }

            return errores;
        }}

        onSubmit={( valores ) => { //La logica cuando envias el formulario

            console.log("Formulario enviado");            

            const nombre=valores.nombre
            const correo=valores.correo
            const comentario=valores.comentario

            const newOrder = { 
                buyer: { nombre, correo, comentario }, 
                items: cart, 
                total: precioTotal(),
            };

            const db = getFirestore()
            db.collection('orders')
                .add(newOrder)
                .then((res) => {
                    console.log("Compra exitosa", res.id)
                    navigate(`${res.id}`)
                })
                .catch((err)=> console.log("Hubo un error", err));

            clearCart();
            cambiarFormularioEnviado(true);
            setTimeout(() => cambiarFormularioEnviado(false), 5000)
        }}
    >

        {( { errors } ) => (
            <Form className="formulario" >               

                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <Field 
                        type="text" 
                        id="nombre" 
                        name="nombre" 
                        placeholder="Nombre"                  
                    />
                    <ErrorMessage name="nombre" component={() => (
                        <div className="error">{ errors.nombre } </div>
                    )} />

                </div>

                <div>
                    <label htmlFor="correo">Correo</label>
                    <Field 
                        type="email" 
                        id="correo" 
                        name="correo" 
                        placeholder="correo@correo.com"                           
                    />

                    <ErrorMessage name="correo" component={() => (
                        <div className="error">{ errors.correo } </div>
                    )} />

                </div>

                <div>
                    <Field      
                        type="text"       
                        name="comentario" 
                        as="textarea" 
                        placeholder="Dejanos tu comentario"
                    />
                </div>

                <button type="submit">Finalizar compra</button>

                {formularioEnviado && <p className="exito">Compra realizada con exito!</p>}
            </Form>
        )}        

    </Formik>       
    
    </div>

  )
};

export default Checkout;


/* Creditos -> https://www.youtube.com/watch?v=2Xs1DAzYHXY */