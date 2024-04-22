

const ProductCard = ({ product }) => {
    const { title, img, price } = product;
    return (

        <div className="card-body">

            <div className="card w-96 bg-gray-100">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>

            </div>

            <div className="text-center mt-4">
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className=' text-xl text-orange-500 font-bold'>Price:${price}</p>
              
            </div>

     
        

        </div>
    );
       
};

export default ProductCard;