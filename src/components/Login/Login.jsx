import { Link } from "react-router-dom";
import background from "../../assets/bg.jpg";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) =>
        toast.success(`Google Logging Successfully..
       Email: ${result.user.email}
      `)
      )
      .catch((error) => toast.error(error.message));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((result) => {
        toast.success(`
        Login Successfully!...................

        Email : ${result.user.email} 
        `);
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero min-h-screen max-w-6xl mx-auto ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Join the gaming community today and get access to exclusive
              content, event updates, and special offers. Do not miss out on the
              ultimate gaming experience!
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p>
                Create an Account..{" "}
                <Link to="/register">
                  <span className="cursor-pointer text-blue-400">
                    Register Now
                  </span>
                </Link>
              </p>
            </form>
            <div className="flex mx-auto p-4">
              <button onClick={handleGoogleLogin} className="btn btn-neutral">
                <FcGoogle className="text-2xl" />
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
