import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

import BookingRow from "./BookingRow";
import axios from "axios";



const Bookings = () => {

    const { user } = useContext(AuthContext)

    const [bookings, setBookings] = useState([])


    const url = `https://car-doctor-server-eta-plum.vercel.app/bookings?email=${user?.email}`
    useEffect(() => {


        axios.get(url,{withCredentials:true})

        .then(res => {

            setBookings(res.data)
        })


    }, [url]);

    const handleDelete = id => {

        const proceed = confirm('Are you you want to delete ');

        if(proceed){
            fetch(`https://car-doctor-server-eta-plum.vercel.app/bookings/${id}`,{
                method:'DELETE'
            })
          
         
            .then(res => res.json())
            .then(data => {

                console.log(data);
                if(data.deletedCount > 0 ){
                    alert('deleted sucessfuly');
                    const remaining = bookings.filter(booking => booking._id !== id)
                    setBookings(remaining);
                }
            })
        }
    }


    const handleConfirm = id => {

        fetch(`https://car-doctor-server-eta-plum.vercel.app/bookings/${id}`,{
            method:'PATCH',

            headers : {
                'content-type' : 'application/json'
            },
            body:JSON.stringify({status:'confirm'})

        })
        .then( res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                alert('update confirm')

                const remaining = bookings.filter(booking => booking._id !== id);

                const updated =  bookings.find(booking => booking._id === id);

                updated.status = 'confirm'

                const newBookings  = [updated,...remaining];

                setBookings(newBookings);
            }
        })


    }
    console.log(bookings)
    return (
        <div>
          
            <h2>Booking:{bookings.length}</h2>
            
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Email</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>


                    {
                        bookings?.map(booking => <BookingRow key={booking._id} booking={booking} handleDelete={handleDelete} handleConfirm={handleConfirm}  ></BookingRow>)
                    }
                     
                 
                    </tbody>
          

                </table>
            </div>
        </div>
    );
};

export default Bookings;