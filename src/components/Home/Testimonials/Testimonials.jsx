import { useEffect } from "react";
import user1 from "../../../assets/users/user1.jpg";
import user2 from "../../../assets/users/user2.jpg";
import user3 from "../../../assets/users/user3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 500,
    });
  }, []);
  return (
    <div className="max-w-6xl mx-auto">
      <div>
        <h1 className="text-5xl font-bold text-center mt-10 mb-5">
          Testimonials
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* card 1 */}
        <div className="card w-96 bg-base-100 shadow-xl" data-aos="fade-right">
          <figure className="h-[400px]">
            <img src={user1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Mark</h2>
            <p>
              <span className="font-bold">Review:</span> I had an incredible
              time at the gaming convention. The VIP Pass Package was worth
              every penny. I got to meet my favorite streamers and snag some
              exclusive swag. Cant wait for the next one!
            </p>
          </div>
        </div>

        {/* card2 */}
        <div className="card w-96 bg-base-100 shadow-xl" data-aos="fade-down">
          <figure className="h-[400px]">
            <img src={user2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Sarah</h2>
            <p>
              <span className="font-bold">Review:</span> Panel and Workshop
              Access was a game-changer for me. I learned so much from industry
              experts and even got to participate in a Q&A session with a top
              game developer. Highly recommend!
            </p>
          </div>
        </div>

        {/* card3 */}
        <div className="card w-96 bg-base-100 shadow-xl" data-aos="fade-left">
          <figure className="h-[400px]">
            <img src={user3} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">John</h2>
            <p>
              <span className="font-bold">Review:</span> The Cosplay Contest
              Entry was a blast! I won first place and got a fantastic prize.
              Its a must for any cosplayer. The conventions atmosphere was
              electrifying, and I am already planning my costume for next year!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
