import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://car-doctor-server-eta-plum.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))


    }, [])


    return (
        <div className="mt-4">
            <div className="text-center">
                <h3 className="text-3xl text-orange-600 font-bold">serviecs</h3>
                <h2 className="text-5xl">Our servies Area </h2>
                <p>the majority have suffered alteration in some form, by injected humour,<br></br> or randomised words which dont look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {
                    services?.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;