import React, { useEffect, useState } from 'react'
import { CircularProgress } from '@mui/material'
import Item from './Item'
import "./styles.css"
import { getFirestore } from '../../firebase'
import { useParams } from 'react-router-dom'

const ItemList = () => {

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null);
  const { categoria } = useParams(); 

//Base de datos con firebase
     useEffect(() => {

      const db = getFirestore()

      /* Filtrado desde firebase */
      let productsCollection;
      if(categoria){
        productsCollection = db.collection("productos").where("categoria", "==", categoria)
      }else{
        productsCollection = db.collection("productos")
      }         

      const getDataFromFirestore = async () => {

        setIsLoading(true);

        try{
          const response = await productsCollection.get();
          if(response.empty){
            console.log("No hay productos")
          }
          setProducts ( response.docs.map((doc) => ({ ...doc.data(), id: doc.id })) )        
        } catch (err) {
          setError(err);
        } finally {
          setIsLoading(false);
        }
      };

      getDataFromFirestore();

     }, [categoria]); 

    return (
        
    <>         
          <h1 className='title'> - PRODUCTOS -</h1>
          <h1 className='title'> { categoria } </h1>
          <div className='productos'>

          {isLoading ? ( 

            <CircularProgress />

          ) : (
            products.map((product) => {
                return <Item key={product.id} product={product} />
              })
          )}

          </div>
    </>       
        
    )
}

export default ItemList
    