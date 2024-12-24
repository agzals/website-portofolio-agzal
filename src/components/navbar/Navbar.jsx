import Siderbar from "../siderbar/Siderbar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Siderbar />
      <div className="wrapper">
        <motion.span initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          Agzal Sufi
        </motion.span>
        <div className="social">
          <a href="https://www.instagram.com/agzalls/">
            <img src="/instagram.png" alt="Social Icon" />
          </a>
          <a href="#">
            <img src="/youtube.png" alt="Social Icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
