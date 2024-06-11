import "../App.css"
import Header from '../Components/Header.jsx';
import HeroSection from '../Components/HeroSection.jsx';
import InfoSection from "../Components/InfoSection.jsx"
import Footer from "../Components/footer.jsx"

const Home = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <InfoSection />
      <Footer />
    </div>
  );
};

export default Home;
