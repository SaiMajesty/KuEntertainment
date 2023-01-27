import "./App.css";
import Banner from "./components/Home/Banner/Banner";
import MarketingSolutions from "./components/Home/MarketingSolutions/MarketingSolutions";
import Header from "./components/Shared/Header/Header";
import Footer from "./components/Shared/Footer/Footer";
import Choose from "./components/Home/Choose/Choose";
import Services from "./components/Home/Services/Services";
import TestMonials from "./components/Home/TestMonials/TestMonials";
import Contact from "./components/Home/Contact/Contact";
import About from "./components/Home/About/About";
function App() {
  return (
    <div className="background">
      <Header />
      <Banner />
      <About  />
      <MarketingSolutions />
      <Choose/>
      <Services />
      <TestMonials />
      <Contact />
      <Footer/>

      
    </div>
  );
}

export default App;
