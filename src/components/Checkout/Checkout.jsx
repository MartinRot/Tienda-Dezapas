import React, { useRef, useState } from 'react';
import "./styles.css"
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useCart } from '../../context/CartContext';
import { getFirestore } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import firebase from "firebase";
import 'firebase/firestore'

const Checkout = () => {

    const { cart, precioTotal, clearCart } = useCart();  
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
    let navigate = useNavigate();

    return (
    
    <div className="contenedor">

    <Formik
        initialValues={{
            nombre: '',
            correo: '',
            comentario: ''
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

            // Validacion comentario
            if(!valores.comentario){
                errores.comentario = 'Por favor ingresa un comentario'
            }                

            return errores;
        }}

        onSubmit={( valores ) => {         

            const nombre=valores.nombre
            const correo=valores.correo
            const comentario=valores.comentario                       

            const newOrder = { 
                nombre: nombre,
                correo: correo,
                comentario: comentario,
                fecha: firebase.firestore.Timestamp.fromDate(new Date()),       
                items: cart, 
                total: precioTotal(),
                estado: "Estamos preparando tu pedido"
            };

            const db = getFirestore()
            db.collection('orders')
                .add(newOrder)
                .then((res) => {
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
                        id="comentario"       
                        name="comentario" 
                        as="textarea" 
                        placeholder="Dejanos tu comentario"
                    />

                    <ErrorMessage name="comentario" component={() => (
                        <div className="error">{ errors.comentario } </div>
                    )} />
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
