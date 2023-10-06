import Banner from "./Banner/Banner";
import Services from "./Services/Services";
import Testimonials from "./Testimonials/Testimonials";
import UpComingEvent from "./UpComingEvent/UpComingEvent";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <UpComingEvent />
      <Testimonials />
    </div>
  );
};

export default Home;
