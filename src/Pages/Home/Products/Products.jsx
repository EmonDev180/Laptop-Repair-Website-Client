import  { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {

    const [products,setProducts] = useState([])

    useEffect(()=> {

        fetch('https://car-doctor-server-eta-plum.vercel.app/products')
        .then(res => res.json())
        .then(data => setProducts(data))



    },[])
    return (
        <div className='mt-12'>
            <div className="text-center ">
                <h3 className="text-3xl text-orange-600 font-bold">Popular Products</h3>
                <h2 className="text-5xl">Browse Our Products</h2>
                <p>the majority have suffered alteration in some form, by injected humour,<br></br> or randomised words which dont look even slightly believable. </p>
            </div>

           <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-6'>
                {
                    products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
           </div>
        </div>
    );
};

export default Products;