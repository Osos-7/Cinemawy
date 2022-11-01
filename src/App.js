import './App.scss';
import HeroSlide from './Components/Carousel/HeroSlide';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Routing from './Routes/Routing';
import {BrowserRouter, Route} from 'react-router-dom'
// import 'swiper/swiper.min.css'

function App() {
    return (
      <BrowserRouter>
      <Route render={props => (
          <>
              <Header {...props}/>
              <Routing/>
              <Footer/>
          </>
      )}/>
  </BrowserRouter>
    );
}

export default App;



  // <div>
    //   {/* <HeroSlide/> */}
    //   <Routing/>
    //   <Header/>
    // </div>