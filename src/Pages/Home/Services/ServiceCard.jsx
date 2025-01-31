import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {

    const {_id, title, img, price } = service;
    return (
        <div className="card w-96 bg-base-100 ">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center">
                <h2 className="card-title text-center">{title}</h2>
                <p className=' text-xl text-orange-500 font-bold'>Price:${price}</p>
                <div className="card-actions">
                    <Link to={`/cheakout/${_id}`}>
                        <button className="btn btn-primary">Book Up</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;