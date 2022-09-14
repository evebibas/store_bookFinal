import React from 'react';
import { Link } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';


const Basket = (props) => {

  const { cartItems, onAdd, onRemove } = props; 

  const GlobalStyle = createGlobalStyle`
  html {
    height: 100%
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    background:   #EECDA3;
    height: 100%;
    margin: 0;
    color: #555;
  }
`;

  return (
    <aside>
      <GlobalStyle></GlobalStyle>
      <div>

        {cartItems.length === 0 && <div style={{ color: 'FireBrick', backgroundColor: 'Peru' }}> Your cart is empty...</div>}
      </div>

      {


        cartItems.map((item) => (
          <div key={item.id}>

            <div style={{ color: 'PaleVioletRed', backgroundColor: 'pink' }}>{item.name}</div>
            <div>
              <button style={{ color: 'blue', backgroundColor: 'turquoise', borderColor: 'blue', alignContent: 'center' }} onClick={() => onAdd(item)} className="add">+</button>
              <button style={{ color: 'white', backgroundColor: 'Red', borderColor: 'FireBrick' }} onClick={() => onRemove(item)} className="remove">-</button>


            </div>

            <div style={{ marginTop: '30' }} >
              {item.qty} x {item.price.toFixed(2)} €
            </div>


            <div style={{ fontWeight: 'bold' }}>

              You have to paid to this shop : {item.qty * item.price.toFixed(2)} €
            </div>


          </div>

        )

        )

      }

      <Link to="/order">
        <img style={{ width: 190, height: 55 }} src={"/images/clickheretoordergood.png"}
        />

      </Link>


    </aside>
  )
}

export default Basket