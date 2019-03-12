import React from "react";
import { Carousel } from "react-responsive-carousel";
import one from "../img/Hillside.jpg";
import two from "../img/P4-Cam-cover-4_2.jpg";
import three from "../img/Sonoma_Wine_Country.jpg";
import four from "../img/Transitional_1.jpg";
import five from "../img/Willow_3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './carouselCSS.css'

class SlideShow extends React.Component {
  render() {
    return (
      <Carousel
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={8000}
        showThumbs={false}
        >
        <div>
          <img src={one} alt="one" />
          <p className="legend">Nice House!</p>
        </div>
        <div>
          <img src={two} alt="two" />
          <p className="legend">Incredible!</p>
        </div>
        <div>
          <img src={three} alt="three" />
          <p className="legend">Wow!</p>
        </div>
        <div>
          <img src={four} alt="four" />
          <p className="legend">Wooooooooow!</p>
        </div>
        <div>
          <img src={five} alt="five" />
          <p className="legend">We Make Houses Real Good!</p>
        </div>
      </Carousel>
    );
  }
}

export default SlideShow;
