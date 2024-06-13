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
          <h1 className="title">Would you like to make a donation?</h1>
          <p className="description">Your support helps maintain the development of the software and improve its features.</p>
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