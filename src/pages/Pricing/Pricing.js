import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import Card from "./Component/Card"
import "./Pricing.css"
const pricing = () => {
  return (
   <>
   <Navbar />
   <Header  heading="pricing page"/>
  
   <Card/>
   <Footer/>
   </>
  )
}

export default pricing