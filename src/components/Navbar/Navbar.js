import "./Navbar.css";
import{Link} from"react-router-dom"
import{FaTimes,FaBars} from "react-icons/fa"
import { useState } from "react";
import logo from '../../assets/image1.jpg'

const Navbar = () => {
    const[click,setclick]=useState(false)
    const handleclick = () =>{
        setclick(!click)
    };
   
    const [color, setcolor] = useState(false);
    const handleColor = () =>{
      if(window.scrollY >=200){
        setcolor(true);
      }else{
        setcolor(false);
      }
    }

    window.addEventListener("scroll", handleColor)

  return (
    <nav className= {color ? "color": ""}>
     <div className="logo">
     <img src={logo} alt="image1" />

   </div>
     <div className={click ?"menu active":"menu" }>
        <Link to="/">Home</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/training">Training</Link>
        <Link to="/contact">Contact</Link>
     </div>

   
  <div className="hamburger" onClick={handleclick}>
    {click?(
        <FaTimes/>
    ):(
        <FaBars/>
    )}
  
     </div>
    </nav>
  )
}

export default Navbar