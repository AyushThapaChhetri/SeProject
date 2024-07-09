import {Link} from "react-router-dom";
// import Carousel from "./Carousel";
import SimpleSlider from "./SimpleSlider";
import "../Css/Home.css" 


function Home() {
  
    return (
      <>
        <div className="home-main"> 
            <div className="home-title">
                <p>
                    Welcome to HamroJerseys!
                </p>
            </div>
            
    
            <p className="home-desc">
                Discover top-tier football kits for every fan. From the classics to the latest, we've got your team spirit covered.
                <br/>Shop at HamroJerseys - where every kit tells a story!
            </p>
            <Link to="/shop">
                <div className="">
                    <button className="shop-btn">
                        Shop Now
                    </button>
                </div>
            </Link>
        </div>
        <SimpleSlider/>
      </>
    );
  };
  
  export default Home;