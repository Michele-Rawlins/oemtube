import React from 'react';
import favicon from '../../../photos/favicon.jpg';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  
  NavLink,
 } from 'reactstrap';


import {
 
  Row,
  Container,
  Col
} from 'reactstrap';

import './MyFooter.scss';
class MyFooter extends React.Component {
  render() {
    return (
      <div className="MyFooter">
<div class="box-wrapper">
  <div class="box">
    
{/* <ul id="grid" class="clear"> */}
           {/* <MyWave/> */}
           {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#374659" fill-opacity="1" d="M0,224L720,320L1440,64L1440,320L720,320L0,320Z"></path></svg> */}
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#374659" fill-opacity="1" d="M0,96L1440,320L1440,0L0,0Z"></path></svg>
           <Container>
             
             <Row>
             <Col md="auto"><h2 className="text-footer">OEM Tube Assemblies</h2>
          <p className="text-fabricate">We create possiblities in a fabricated world.</p>
          <img className="favicon" src={favicon} alt="logo"></img>
          </Col>
         
          <Col md>
           <h3 className="explore">Explore</h3>
           <NavLink tag={RRNavLink} to='/home'><h5 className="navList">Home</h5></NavLink> 
          <NavLink tag={RRNavLink} to='/aboutUs'> <h5 className="navList">About Us</h5></NavLink>
           <NavLink tag={RRNavLink} to='/products'><h5 className="navList">Products</h5></NavLink>
           <NavLink tag={RRNavLink} to='/contactus'><h5 className="navList">Contact Us</h5></NavLink>
           <NavLink tag={RRNavLink} to='/requestQuote'><h5 className="navList">Request A Quote</h5></NavLink>
</Col>
       
         <Col md>
           <h3 className="visit">Visit Us</h3>
           <h5 className="address">OEM Tube Assemblies</h5>
           <h5 className="address">191 Stone Container Dr.</h5>
           <h5 className="address">Clarksville, TN  37040</h5>
           <h5 className="address">Phone:  931-906-1124</h5>
           <h5 className="address">Email: sales@oemtube.com</h5>
           
        
          
      
        
         </Col>
         </Row>
          </Container>

           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#374659" fill-opacity="1" d="M0,96L1440,320L1440,320L0,320Z">
            
             
             </path></svg>
            {/* <div className="hexagon">
             <img className="text distributorAssembliesHome" id="distributorAssemblies-pichome"src={brassDistributor} />
            <Link className="text links-products"to='/distributor' id="distributorLink">Distributors</Link>

             
            </div> */}
            <p className="nameTag" color="#374659">&#169; &#9749;WebDesigns by Michele Rawlins</p>
  {/* </ul> */}
</div>
</div>
</div>

      );
    }
  }
  
  export default MyFooter;