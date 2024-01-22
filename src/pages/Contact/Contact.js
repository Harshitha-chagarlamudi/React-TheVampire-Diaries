import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import Form from "./Components/Form"
import  "./Contact.css";
function contact() {
  return (
    <>
      <Navbar />
      <Header heading="Contact page" />
      <Form />
      <Footer />
    </>
  );
}

export default contact