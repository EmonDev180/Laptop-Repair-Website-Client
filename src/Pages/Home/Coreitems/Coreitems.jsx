
import icon1 from "../../../assets/icons/group.svg"
import icon2 from "../../../assets/icons/deliveryt.svg"
import icon3 from "../../../assets/icons/check.svg"
import icon4 from "../../../assets/icons/group.svg"
import icon5 from "../../../assets/icons/deliveryt.svg"
import icon6 from "../../../assets/icons/person.svg"
const Coreitems = () => {
    return (
        <div>

            <div className="text-center mt-6">
                <h3 className="text-3xl text-orange-600 font-bold">Core Features</h3>
                <h2 className="text-5xl">Why Choose Us</h2>
                <p>the majority have suffered alteration in some form, by injected humour,<br></br> or randomised words which dont look even slightly believable. </p>
            </div>
            <div className="  grid grid-cols-6 justify-items-center mt-12  gap-6 ">
                <div className="border-solid border-2 border-black-100 p-6">
                    <img src={icon1} alt="" />
                    <h2 className="text-center font-bold mt-4"> Expert Team</h2>
                </div>
                <div className="border-solid border-2 border-black-100 p-6">
                    <img src={icon2} alt="" />
                    <h2 className="text-center font-bold mt-4"> Expert Team</h2>
                </div>
                <div className="border-solid border-2 border-black-100 p-6">
                    <img src={icon3} alt="" />
                    <h2 className="text-center font-bold mt-4"> Expert Team</h2>
                </div>
                <div className="border-solid border-2 border-black-100 p-6">
                    <img src={icon4} alt="" />
                    <h2 className="text-center font-bold mt-4"> Expert Team</h2>
                </div>
                <div className="border-solid border-2 border-black-100 p-6">
                    <img src={icon5} alt="" />
                    <h2 className="text-center font-bold mt-4"> Expert Team</h2>
                </div>

                <div className="border-solid border-2 border-black-100 p-6">
                    <img src={icon6} alt="" />
                    <h2 className="text-center font-bold mt-4"> Expert Team</h2>
                </div>






            </div>
        </div>
    );
};

export default Coreitems;