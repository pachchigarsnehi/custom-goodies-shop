
import { BrowserRouter, Route } from 'react-router-dom';
import Product from './components/Product';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  
  return (
    
    <BrowserRouter>
    <div className="grid-container">
        {/*header*/}
        <header className="row">
          <div>
            {/*left hand side brand logo*/}
            <a className="brand" href="/">Mask Shop</a>
          </div>
          <div>
            {/*right hand side options*/}
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        
        
        {/*main content with product cards */}
        <main>
        
        {/* Setting routes - when user takes action then following path will lead to corresponding component*/}
        <Route path="/product/:id" component={ProductScreen}></Route>
        <Route path="/" component={HomeScreen} exact></Route> 

       
        </main>
        
        {/*footer */}
        <footer className="row center">
          All rights reserved
        </footer>
      </div>
    </BrowserRouter>
  
  );
}

export default App;
