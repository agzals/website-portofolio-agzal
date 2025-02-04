import "./parallax.scss";

const Parallax = ({ type }) => {
  return (
    <div className="parallax" style={{ background: type === "services" ? "linear-gradient(180deg, #111132, #0c0c1d)" : "linear-gradient(180deg, #111132, #505064)" }}>
      <h1>{type === "services" ? "what we do?" : "what we did?"}</h1>
      <div className="mountains"></div>
      <div className="planets" style={{ backgroundImage: 'url(${type === "services" ? "/planets.png" : "/sun.png"})' }}></div>
      <div className="stars"></div>
    </div>
  );
};

export default Parallax;
