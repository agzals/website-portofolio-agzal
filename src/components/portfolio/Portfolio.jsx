import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring } from "framer-motion";
const items = [
  {
    id: 1,
    title: "UI/UX Design",
    img: "",
    desc: "Jasa desain UI/UX untuk website/aplikasi anda yang akan membuat bisnis anda terlihat profesional. ",
  },
  {
    id: 2,
    title: "Website & Landing Page",
    img: "",
    desc: "Kami dapat membuat,mengembangkan, dan maintenance situs web profesional perusahaan atau bisnis anda.",
  },
  {
    id: 3,
    title: "Desain Graphic",
    img: "",
    desc: "Layanan untuk kebutuhan permintaan desain perusahaan mulai dari,banner,poster,campaign marketing, hingga desain katalog produk.",
  },
  {
    id: 4,
    title: "Social Media Management",
    img: "",
    desc: "Kami handle sosial media brand anda mulai dari perencanaan konten, desain konten, posting, dan laporan analisis.",
  },
];

const Single = ({ itemi }) => {
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="kotak"></div>
          <div className="textContainer">
            <h2>{itemi.title}</h2>
            <p>{itemi.desc}</p>
            <button>See Demo</button>
          </div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((itemi) => (
        <Single itemi={itemi} key={itemi.id} />
      ))}
    </div>
  );
};

export default Portfolio;
