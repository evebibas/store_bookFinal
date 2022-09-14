import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';



const Bar = styled.nav`
font-size: 40px;
justify-content: space-between;
background-image: linear-gradient(260deg,  rgb(42,244,152,255) 0%, #3498db 100%); 
border: 1px solid rgba(0,0,0,0.2);
display: flex;

.mySpan{
    position: absolute;
    margin-top: -10px;
    margin-left: -10px;
}

.ImageBrand{
    height: 100px;
    width:auto;
    border-radius: 15%;
    margin-top:10px;
}

.Title{
    font-size: 0.9em;
    text-align: center;
    color: #213f77;
}


.basket-container{
    display:flex;

    .basket-icon-container{
        .Image{
            width: auto;
            height:70px;
            margin-top: 10px;
        }
    }


    .CounterBasket{
        height: 12px;
        width: auto;
        padding: 12px;
        margin-right: 2%;
        background-color: red;
        border-radius: 50%;
        font-size: 12px;
        display: flex;
        align-content: center;
    }
}




@media screen and (min-width: 280px) and (max-width: 1080px) {
    position: relative;
    margin: 0;

    .mySpan{
        position: absolute;
        margin-top: -10px;
        margin-left: -10px;
    }

    .brand-container{
        display:block;

        .ImageBrand{
            height: 60px;
            width: auto;
            border-radius: 15%;
            margin-top:10px;
        }
    }

    .Title{
        font-size: 0.5em;
        text-align: center;
        color: #213f77;
        margin: auto 0;
    }

    .CounterBasket{
        width: auto;
        height: 12px;
        background-color: red;
        border-radius: 50%;
        padding: 12px;
        font-size: 12px;
    }

    .Image{
        margin-top:10px;
        height: 70px;
        width:auto;
    }
}
`;


const Navbar = ({ cartItems }) => {
    const sum = cartItems.reduce((acc, item) => {
        acc = acc + (item.qty || 0)
        return acc
    }, 0)

    console.log("the sum is", sum)

    return (
        <Bar>
            <NavLink to="/" className='brand-container'>
                <img className='ImageBrand' src={"/images/LogoEveReact.png"}
                />
            </NavLink>

            <h1 className='Title'> Free Delivery WorldWide</h1>

            <div className='basket-container'>
                <NavLink to="/basket" className='basket-icon-container'>
                    <img className='Image' src={"/images/caddie.png"}
                    />
                </NavLink>
                <h1 className='CounterBasket'>{sum}</h1>
            </div>
        </Bar>
    )
}

export default Navbar
