import About from "../About/About";
import Banner from "../Banner/Banner";
import Coreitems from "../Coreitems/Coreitems";
import Map from "../Map/Map";
import Products from "../Products/Products";

import Services from "../Services/Services";

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Products></Products>
            <Coreitems></Coreitems>
            <Map></Map>
      
            
        </div>
    );
};

export default Home;