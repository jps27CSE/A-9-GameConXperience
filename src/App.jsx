import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
