import { motion } from 'framer-motion';
import { FaPaypal } from 'react-icons/fa';
import Header from "../Components/Header"
import Footer from "../Components/footer"
import "../Components/css/Donaciones.css"
const Donations = () => {
  return (
    <>
      <Header />
      <motion.div
        className="container"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          <h1 className="title">¿Le gustaría hacer una donación?</h1>
         
          <li><a href="https://www.paypal.com/donate/?hosted_button_id=F9RQEH5UYHYK6">
            <motion.button
              className="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              
            >
              
              <FaPaypal className="icon" /> Make a donation via PayPal
            </motion.button></a></li>
           
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default Donations;