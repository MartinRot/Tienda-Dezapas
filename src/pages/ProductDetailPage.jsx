import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetail/ItemDetailContainer';

const ProductDetailPage = () => {  

 /*    const {id} = useParams();
    const [product, setProduct] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        const URL = `http://localhost:3001/productos/${id}`
        setIsLoading(true)

        fetch(URL)
            .then((res) => res.json())
            .then((data) => setProduct(data))
            .finally(() => setIsLoading(false));
    }, [id]);

    if(isLoading || !product) return <p>Cargando...</p> */

    return (    
        
        <ItemDetailContainer />

       /*  <div>

            <p> Este es el detalle del producto ID: {id} </p>
            <h1>{product.name}</h1>
            <h1>{product.description}</h1>
            
        </div> */
    );
};

export default ProductDetailPage;
