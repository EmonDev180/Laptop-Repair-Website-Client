

const BookingRow = ({ booking, handleDelete, handleConfirm}) => {

    const { _id, service, img, date,status,email } = booking;


    return (


        <tr className="w-full sm:w-auto md:w-auto lg:w-auto">
        <th className="p-1">
            <button onClick={() => handleDelete(_id)} className="btn btn-square btn-sm sm:btn-sm md:btn-md lg:btn-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </th>
        <td className="p-2">
            <div className="flex items-center gap-3">
                <div className="avatar">
                    <div className="rounded w-12 h-12 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14">
                        {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                    </div>
                </div>
            </div>
        </td>
        <td className="text-sm sm:text-xs md:text-sm lg:text-base p-2">
            {email}
        </td>
        <td className="text-sm sm:text-xs md:text-sm lg:text-base p-2">
            {service}
        </td>
        <td className="text-sm sm:text-xs md:text-sm lg:text-base p-2">
            {date}
        </td>
        <th className="p-1">
            {status === 'confirm' ? (
                <span className="font-bold text-primary">Confirmed</span>
            ) : (
                <button onClick={() => handleConfirm(_id)} className="btn btn-ghost btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                    Please confirm
                </button>
            )}
        </th>
    </tr>
    
    );
};

export default BookingRow;