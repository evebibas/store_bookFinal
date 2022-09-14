import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Loading from '../components/Loading';

const ThanksPage = () => {


    const GlobalStyle = createGlobalStyle`
    html {
      height: 100%
    }
    body {
      font-family: Arial, Helvetica, sans-serif;
      background: #C5CAE9;
      height: 100%;
      margin: 0;
      color: #555;
    }
  `;


    const Paragraph = styled.p`
  line-height: 1.4em;
  font-size: 1.2em;
  color: darkslateblue;
    margin-bottom:2rem;
    font-size: 2.7em;
`;


    const Titles = styled.div`
font-family: "EB Garamond",serif ;
color: #29293d;
font-size: 2.2rem;
`

    const EvesLibraryStyled = styled.div`
font-family: "EB Garamond",serif ;
color: #302b63;
font-size: 2rem;
`



    const location = useLocation()
    const [data, setData] =
        useState(null)



    useEffect(() => {

        const params = new URLSearchParams(location.search);
        const name = params.get('name')
        const orderId = params.get('orderId')
        setData({ name, orderId })

    }, [])




    return (
        <div>
            <GlobalStyle></GlobalStyle>
            {
                !data ? <Loading></Loading>
                    :
                    <div>
                        <Titles>Dear {data.name},</Titles>
                        <Paragraph>


                            We are so excited to send you your order (N°{data.orderId}). Your order will be processed and shipped as soon as possible.
                            An email with tracking information will be sent to you once your order has shipped.
                            In the meantime, we would love it if you could follow us on social media or sign up for our newsletter for exclusive deals and promotions.


                        </Paragraph>

                        <Paragraph>Thank you.</Paragraph>

                        <EvesLibraryStyled>

                            Eve's Library.
                        </EvesLibraryStyled>

                    </div>
            }
        </div>
    )
}

export default ThanksPage
