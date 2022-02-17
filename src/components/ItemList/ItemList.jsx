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
  const { subcategoria } = useParams(); 

//Base de datos con firebase
     useEffect(() => {

      const db = getFirestore()

      /* Filtrado desde firebase */
      let categoriaCollection;
      let subcategoriaCollection;

      if(categoria){
        categoriaCollection = db.collection("productos").where("categoria", "==", categoria)
      }else{
        categoriaCollection = db.collection("productos")
      }         

      if(subcategoria){
        subcategoriaCollection = db.collection("productos").where("subcategoria", "==", subcategoria)
      }else{
        subcategoriaCollection = db.collection("productos")
      }

      const getDataFromFirestore = async () => {

        setIsLoading(true);

        //Compruebo si hay algo en categoria
        if (categoria){

          try{
            const response = await categoriaCollection.get();
            
            if(response.empty){
              alert("No hay productos")
            }

            setProducts ( response.docs.map((doc) => ({ ...doc.data(), id: doc.id })) )        

          } catch (err) {
            setError(err);
          } finally {
            setIsLoading(false);
          }
        }else{ //Si no hay en categoria entra en subcategoria
          
          try{
            const response = await subcategoriaCollection.get();
            if(response.empty){
              console.log("No hay productos")
            }
            setProducts ( response.docs.map((doc) => ({ ...doc.data(), id: doc.id })) )        
          } catch (err) {
            setError(err);
          } finally {
            setIsLoading(false);
          }

        }

      };

      getDataFromFirestore();

     }, [categoria, subcategoria]); 

    return (
        
    <>    
          <h1 className='title'> - PRODUCTOS -</h1>
          <h1 className='title'> { categoria } </h1>
          <h1 className='title'> { subcategoria } </h1>
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
    