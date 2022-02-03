import React, { useState } from 'react';
import "./styles.css"
import { Formik, Form, Field, ErrorMessage } from 'formik'

const Checkout = () => {
  
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  
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

        onSubmit={(valores, {resetForm}) => { //La logica cuando envias el formulario

            console.log("Formulario enviado");
            console.log(valores.nombre);

            resetForm();
            cambiarFormularioEnviado(true);
            setTimeout(() => cambiarFormularioEnviado(false), 2000)

        }}
    >
        {( { errors } ) => (
            <Form className="formulario">               

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
                    <Field name="comentario" as="textarea" placeholder="Dejanos tu comentario" />
                </div>

                <button type="submit">Enviar</button>


             {/*    <div id='contenedorCajita'>
                    <div id='cajita'></div>
                </div> */}


                {formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
            </Form>
        )}        

    </Formik>       


    
    </div>

  )
};

export default Checkout;


/* Creditos -> https://www.youtube.com/watch?v=2Xs1DAzYHXY */