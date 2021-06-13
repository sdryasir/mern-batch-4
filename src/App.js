import Header from './components/Header'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import ProductsListing from './pages/ProductsListing'
import ProductDetail from './pages/ProductDetail'

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/collection/:category">
            <ProductsListing />
          </Route>
          <Route exact path="/product/:slug">
            <ProductDetail />
          </Route>
          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
export default App

