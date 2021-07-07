import React from 'react';
import { Link } from "react-router-dom";
import { 
    MainWrapper,
    Banner, 
    Image, 
    Overlay, 
    MiddleContainer, 
    Button, 
    TopBar, 
    AboutUsSection,
    DeliveriesSection,
    Footer
} from './styles';
import BgImage from '../../assets/eggs.jpeg';
import Trays from '../../assets/trays.jpeg';

export function LandingPage(){
    return(
        <MainWrapper>
            <Banner>
                <Image src={BgImage} alt='image' />
                <Overlay />
                <TopBar>
                    <span>about us</span>
                    <span>Deliveries</span>
                    <Link to='/login'>
                        <Button width='100px' height='40px'>sign in</Button>
                    </Link>
                </TopBar>
                <MiddleContainer>
                    <h1>Kagga Farm marketplace</h1>
                    <span>Place your eggs orders with ease <br />and comfort</span>
                    <Link to='/login'>
                        <Button width='165px' mt='30px'>order</Button>
                    </Link>
                </MiddleContainer>
                <AboutUsSection>
                    <h2>About Us</h2>
                    <div className='container'>
                        <img src={Trays} alt='image' />
                        <div>
                            <h3>It's good you asked</h3>
                            <p>
                                Kagga farm is a rising large scale poultry prodution farm 
                                located in the out-skirts of Kampala, Uganda. We are committed 
                                to providing our clients with fresh farm eggs, both white and 
                                yellow yolk, at affordable prices.
                            </p>
                            <p>
                                Legend has it that we are able to offer our clients a helping hand by 
                                leveraging technology to not only save them time , but also do the not so 
                                hard but could become hard task of safely delivering their egg supplies
                            </p>
                            <Link to='/signup'>
                                <Button width='165px' mt='30px'>sign  me up</Button>
                            </Link>
                        </div>
                    </div>
                </AboutUsSection>
                <DeliveriesSection>
                    <h2>Deliveries</h2>
                    <Link to='/login'>
                        <Button width='200px' tertiary>let's go</Button>
                    </Link>
                </DeliveriesSection>
                <Footer>
                    <div className='wrapper'>
                        <div>
                            <h3>Fresh farm eggs at your door step</h3>
                            <Link to='/login'>
                                <Button secondary>Place your order now!</Button>
                            </Link>
                        </div>
                        <div class='right'>
                            <h4>Contact us</h4>
                            <span> WhatsApp: +256 703 606 548 </span>
                            <br /><br />
                            <span> Terms and conditions </span>
                        </div>
                    </div>
                    <span>© 2021 Kagga Farm. All rights reserved</span>
                </Footer>
            </Banner>
        </MainWrapper>
    )
}

export default LandingPage;
