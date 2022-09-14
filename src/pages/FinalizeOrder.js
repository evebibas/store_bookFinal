
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { cartService } from '../services/cartService';

import styled, { createGlobalStyle } from 'styled-components';

const FinalizeOrder = () => {


    const GlobalStyle = createGlobalStyle`
    html {
      height: 100%
    }
    body {
      font-family: Arial, Helvetica, sans-serif;
      background: linear-gradient(to bottom, #56CCF2, #A7BFE8);
      height: 100%;
      margin: 0;
      color: #555;
    }
  `;

    const StyledButton = styled.button`
  display: block;
  background: linear-gradient(to top, #16222A, #26a0da);
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;


    const history = useHistory();

    const [formFields, setFormFields] = useState({ firstName: '', lastName: '', address: '', phoneNumber: '' })


    useEffect(() => {
        console.log(formFields)
    }, [formFields])


    const handleChange = (e) => {
        console.log(e.target.name, e.target.value)
        const field = e.target.name
        const value = e.target.value
        setFormFields({ ...formFields, [field]: value })
    }

    const postOrder = () => {
        cartService.postOrder(formFields)
            .then(data => {
                if (data.id) {

                    history.push('/thankspage?name=' + formFields.firstName + '&orderId=' + data.id)

                }

            })


    }

    return (
        <div >
            <GlobalStyle />
            <h2 style={{ color: 'SlateBlue' }}>Now, it's time to finalize your order</h2>
            <form onSubmit={(e) =>
                e.preventDefault()
            }>

                <label>Name:</label>
                <input
                    onChange={(e) => { handleChange(e) }}
                    name='firstName'
                    type='text'
                    required
                />

                <label>Family Name:</label>
                <input
                    onChange={(e) => { handleChange(e) }}
                    name='lastName'
                    type='text'
                    required
                />

                <label>Address:</label>
                <input
                    onChange={(e) => { handleChange(e) }}
                    name='address'
                    type='text'
                    required
                />

                <label>Phone:</label>
                <input
                    onChange={(e) => { handleChange(e) }}
                    name='phoneNumber'
                    type='text'
                    required
                />



                <StyledButton
                    onClick={postOrder}
                >Click here to finalize the order</StyledButton>

            </form>

        </div>
    );

}


export default FinalizeOrder;
