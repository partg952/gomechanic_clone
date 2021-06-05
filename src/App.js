import logo from './logo.svg';
import './App.css';
import Header from './header/header'
import Navbar from './nav-bar/nav_bar';
import Grid from './grid/grid'
import Floating from './floating-div/floating'
import Assurance from './assurance/assurance'
import Products from './products/products';
import Cars from './cars/cars'
import Working from './working/working';
import Benefits from './benefits/benefits';
import Rating from './rating/rating';
function App() {
  return (
    <div className="App">
     <Header/>
      <hr />
     <Grid/>
     <hr />
     <br />
     <Assurance/>
     <hr />
     <br />
     <Products/>
     <hr/>
     <br />
     <Cars/>
     <hr/>
     <br />
     <Benefits/>
     <hr />
     <br />
     <Working/>
     <hr />
     <br />
     <Rating/>
     <Floating/>
     
    </div>
  );
}

export default App;
