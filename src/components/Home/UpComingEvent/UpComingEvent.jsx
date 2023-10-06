import eventPic from "../../../assets/images/event.png";

const UpComingEvent = () => {
  return (
    <div>
      <div>
        <h1 className="text-5xl font-bold text-center mt-10 mb-5">
          Up Coming Event
        </h1>
      </div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${eventPic})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              FC 24 Gaming Event Coming Soon...
            </h1>

            <div className="flex flex-row justify-center">
              <div>
                <div className="grid grid-flow-col gap-5 text-center auto-cols-max justify-center">
                  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                      <span style={{ "--value": 15 }}></span>
                    </span>
                    days
                  </div>
                  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                      <span style={{ "--value": 10 }}></span>
                    </span>
                    hours
                  </div>
                </div>
              </div>
              <div className="text-4xl font-bold my-auto ml-5 bg-slate-800">
                To Go
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpComingEvent;
