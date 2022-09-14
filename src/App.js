import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import './App.css';
import Footer from './components/Home/Footer';
import Navbar from './components/Home/Navbar';
import Basket from "./pages/Basket";
import FinalizeOrder from "./pages/FinalizeOrder";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import StoreDetails from "./pages/StoreDetails";
import ThanksPage from "./pages/ThanksPage";
import { cartService } from "./services/cartService";


const AppLayout = styled.div`
width: 100%;
height: auto;
`




function App() {
  const [cartItems, setCartItems] = useState([]) 
  useEffect(() => {
    loadCartItems()
  }, [])

  const loadCartItems = () => {
    const items = cartService.getCartItems() 

    setCartItems([...items])
  } 

  const onAdd = (selectedBook) => {
    cartService.add(selectedBook)
    loadCartItems()
    console.log("Here is my selectedbook", selectedBook)
  }

  const onRemove = (selectedBook) => {
    cartService.remove(selectedBook)
    loadCartItems()
  }

  console.log("See what i have in my cart = ", cartItems);



  return (
    <Router>
      <AppLayout>
        <Navbar cartItems={cartItems} />

        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route >

            <Route path="/storedetails/:id"
              render={(match, history) => <StoreDetails key={match.location.key} match={match} history={history} />}
            />

            <Route path="/productdetails/:id"
              render={(match, history) => <ProductDetails onAdd={onAdd} key={match.location.key} match={match} history={history} />}
            />


            <Route path="/basket"
              render={(match, history) => <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} key={match.location.key} match={match} history={history} />}
            />



            <Route path="/order"
              render={(match, history) => <FinalizeOrder key={match.location.key} match={match} history={history} />}
            />


            <Route path="/thankspage"
              render={(match, history) => <ThanksPage key={match.location.key} match={match} history={history} />}
            />



          </Switch>

          <Footer></Footer>
        </div>
      </AppLayout>



    </Router>


  );
}

export default App;
