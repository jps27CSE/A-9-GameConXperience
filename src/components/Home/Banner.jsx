import pic1 from "../../assets/images/pic1.jpg";
import pic2 from "../../assets/images/pic2.jpg";
import pic3 from "../../assets/images/pic3.jpg";
import pic4 from "../../assets/images/pic4.jpg";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img
            src={pic1}
            className="w-full h-[200px] md:h-[400px] lg:h-[500px]"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src={pic2}
            className="w-full h-[200px] md:h-[400px] lg:h-[500px]"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src={pic3}
            className="w-full h-[200px] md:h-[400px] lg:h-[500px]"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src={pic4}
            className="w-full h-[200px] md:h-[400px] lg:h-[500px]"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Banner;
