import "./Header.css";
import headerImg from "../../assets/image10.jpg";

const Header = ({ heading }) => {
  return (
    <section
      className="header"
      style={{
        backgroundImage: `url(${headerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "left",
      }} 
    >
      <h1>{heading}</h1>
      <p>
        The Vampire Diaries sometimes went beyond its romance between Elana and
        Stefan, leading to some scary moments.{" "}
      </p>
    </section>
  );
};
export default Header;
