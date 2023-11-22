import React, {useEffect} from 'react';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import ProductComponent from './ProductComponent';
import { setProduct } from '../redux/actions/productAction';

const ProductListing = () => {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch()
   
    

    const fetchProduct = async () => {
     const response = await axios
     .get('https://fakestoreapi.com/products')
     .catch((err) => {
        console.log('Err: ',err);
     }) 
     dispatch(setProduct(response.data))  
    
    }
    useEffect(()=>{
        fetchProduct();
    }, [])
    console.log('Products :', products);
    return (
        <div className='ui grid container'>
            <ProductComponent />
        </div>
    );


};

export default ProductListing;

