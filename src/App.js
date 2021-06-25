import './App.css';
import Navigation from '../src/Component/Navigation/Navigation'
import HomeContent from '../src/Component/HomeContent/HomeContent'
import AboutUs from '../src/Component/AboutUs/AboutUs'
import Blogs from '../src/Component/Blogs/Blogs'
import ContactUs from './Component/ContactUs/ContactUs';
import Footer from './Component/Footer/Footer';
import AdminDashboard from './Component/AdminDashboard/AdminDashboard';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../firebase.config'
function App() {
      // initialize firebase
      if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig)
    }
  return (
    <div className="App">
      <Navigation />
      <HomeContent />
      <AboutUs />
      <Blogs />
      <ContactUs />
      <Footer />
        {/* <AdminDashboard /> */}
    </div>
  );
}

export default App;
