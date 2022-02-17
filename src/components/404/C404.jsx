import React from 'react';
import { Box } from '@mui/system';
import { getFirestore } from '../../firebase';
import { Button } from '@mui/material';

const PRODUCTOS = [

  {
    "cantidad" : 0,
    "name": "Nike LD Waffle Sacai Black",
    "description": "Estas zapatillas estan buenisimas",
    "price": 10220,
    "stock": 12,
    "categoria": "hombre",
    "subcategoria" : "novedades",
    "img": "https://firebasestorage.googleapis.com/v0/b/dezapas-96a76.appspot.com/o/img02.jpg?alt=media&token=00655420-cd27-4685-8279-2681c680546a"
  },
  {
    "cantidad" : 0,
    "name": "Nike Dunk Low Off-White",
    "description": "Estas zapatillas estan buenisimas",
    "price": 7820,
    "stock": 7,
    "categoria": "mujer",
    "subcategoria" : "novedades",
    "img": "https://firebasestorage.googleapis.com/v0/b/dezapas-96a76.appspot.com/o/img01.jpg?alt=media&token=5b514ed4-d60d-46a2-aa2c-d7b333c52a4a"  
  },
  {
    "cantidad" : 0,
    "name": "Nike Air Force Low Supreme",
    "description": "Estas zapatillas estan buenisimas",
    "price": 9675,
    "stock": 19,
    "categoria": "niño",   
    "subcategoria" : "sales",   
    "img": "https://firebasestorage.googleapis.com/v0/b/dezapas-96a76.appspot.com/o/img03.jpg?alt=media&token=fd152595-9064-472b-91e9-6d85912e0820"
  },
  {
    "cantidad" : 0,
    "name": "Nike LD Waffle Sacai White",
    "description": "Estas zapatillas estan buenisimas",
    "price": 3458,
    "stock": 2,
    "categoria": "sales",
    "subcategoria" : "",
    "img": "https://firebasestorage.googleapis.com/v0/b/dezapas-96a76.appspot.com/o/img04.jpg?alt=media&token=acf101a1-ba38-48c4-89f1-754bc544290e"
  },
  {
    "cantidad" : 0,
    "name": "Nike Dunk Low Off-White University",
    "description": "Estas zapatillas estan buenisimas",
    "price": 9990,
    "stock": 14,
    "categoria": "hombre",
    "subcategoria" : "novedades",
    "img": "https://firebasestorage.googleapis.com/v0/b/dezapas-96a76.appspot.com/o/img05.jpg?alt=media&token=e208a586-2299-44a6-b893-34fa61a67c1b"
  },
  {
    "cantidad" : 0,
    "name": "Nike LD Waffle Sacai White Nylo",
    "description": "Estas zapatillas estan buenisimas",
    "price": 14600,
    "stock": 70,
    "categoria": "hombre",
    "subcategoria" : "",
    "img": "https://firebasestorage.googleapis.com/v0/b/dezapas-96a76.appspot.com/o/img06.jpg?alt=media&token=ae01f1e1-1402-4cdb-8ef9-235d60d1e234"
  },
  {
    "cantidad" : 0,
    "name": "Nike Dunk Low SP Kentucky",
    "description": "Estas zapatillas estan buenisimas",
    "price": 9260,
    "stock": 3,
    "categoria": "mujer",
    "subcategoria" : "novedades",
    "img": "https://firebasestorage.googleapis.com/v0/b/dezapas-96a76.appspot.com/o/img07.jpg?alt=media&token=956b9452-b4d1-4b1f-9e4d-618cbb378a04"
  },
  {
    "cantidad" : 0,
    "name": "Nike Dunk Low Off-White University",
    "description": "Estas zapatillas estan buenisimas",
    "price": 19100,
    "stock": 9,
    "categoria": "niño",
    "subcategoria" : "",
    "img": "https://firebasestorage.googleapis.com/v0/b/dezapas-96a76.appspot.com/o/img08.jpg?alt=media&token=559066a6-1766-489d-adc0-d14b1bb3cf6c"
  },
  {
    "cantidad" : 0,
    "name": "Nike Air Max 2 Light Atmos",
    "description": "Estas zapatillas estan buenisimas",
    "price": 15200,
    "stock": 75,
    "categoria": "mujer",
    "subcategoria" : "",
    "img": "https://firebasestorage.googleapis.com/v0/b/dezapas-96a76.appspot.com/o/img09.jpg?alt=media&token=2f3892c4-f3a2-4228-bba3-c0933aede934"
  },
  {
    "cantidad" : 0,
    "name": "Nike Air Force 1 Low CLOT Blue Silk",
    "description": "Estas zapatillas estan buenisimas",
    "price": 7250,
    "stock": 101,
    "categoria": "mujer",
    "subcategoria" : "sales",
    "img": "https://firebasestorage.googleapis.com/v0/b/dezapas-96a76.appspot.com/o/img10.jpg?alt=media&token=5163ea2b-fded-455a-85e5-f8750cd29907"
  },
  {
    "cantidad" : 0,
    "name": "Nike Air Max 90 OG Volt (2020)",
    "description": "Estas zapatillas estan buenisimas",
    "price": 9600,
    "stock": 171,
    "categoria": "hombre",
    "subcategoria" : "",
    "img": "https://firebasestorage.googleapis.com/v0/b/dezapas-96a76.appspot.com/o/img11.jpg?alt=media&token=78fe5011-3166-4185-b60d-0a3d14f303c5"
  },
  {
    "cantidad" : 0,
    "name": "Nike Dunk High Varsity Maize",
    "description": "Estas zapatillas estan buenisimas",
    "price": 18600,
    "stock": 123,
    "categoria": "niño",
    "subcategoria" : "novedades",
    "img": "https://firebasestorage.googleapis.com/v0/b/dezapas-96a76.appspot.com/o/img12.jpg?alt=media&token=e57581f0-892e-4f74-9074-01905fa2c0ba"
  }
  
];

const C404 = () => {

  const db = getFirestore();
  const collection = db.collection("productos");

  const createProductsOnFirestore = () => {

    PRODUCTOS.forEach((product) => {
      collection
        .add(product)
        .then((res) => console.log("producto agregado: ", res.id))
        .catch((err) => console.log("Se rompio todo: ", err));
    });
  };

  return (

    <>

    {/* <Button onClick={createProductsOnFirestore}>Agregar a firestore </Button> */}

    <Box sx={{
        minHeight:"80vh", 
        background:"url(images/background.jpg)", 
        backgroundSize:"100% 100%",
        backgroundRepeat:"no-repeat", 
        }}>      
    </Box>


    </>

  )
};

export default C404;
