import './App.css';
import Navigation from '../src/Component/Navigation/Navigation'
import HomeContent from '../src/Component/HomeContent/HomeContent'
import AboutUs from '../src/Component/AboutUs/AboutUs'
import Blogs from '../src/Component/Blogs/Blogs'
import ContactUs from './Component/ContactUs/ContactUs';
import Footer from './Component/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navigation />
      <HomeContent />
      <AboutUs />
      <Blogs />
      <ContactUs/>
      <Footer />
    </div>
  );
}

export default App;
