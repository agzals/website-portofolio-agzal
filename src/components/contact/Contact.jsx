import { motion } from "framer-motion";
import "./contact.scss";
const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};
const Contact = () => {
  return (
    <motion.div className="contact" variants={variants}>
      <motion.div className="textContainer">
        <h1>
          Lets Work <br /> Together.
        </h1>
        <motion.div className="item">
          <h2>Email</h2>
          <span>agzalsufi39@gmail.com</span>
        </motion.div>
        <div className="item">
          <h2>Address</h2>
          <span>Jawa Barat, Depok</span>
        </div>
        <div className="item">
          <h2>Phone</h2>
          <span>(+62) 85777192036</span>
        </div>
      </motion.div>
      <div className="formContainer">
        <form>
          <input type="text" required placeholder="Name" />
          <input type="email" required placeholder="Email" />
          <textarea rows={8} placeholder="Message"></textarea>
          <button>Submit</button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
