import React from 'react'
import './About.css';
import logo from './6.png'; 
export default function About() {
  return (
<div className='About'> 
    <div className='title'>About Us</div>
    <div  className='AboutUs'>
      <h2> Launched in 2022, My Shop is the leading platform for global wholesale trade. We serve millions of buyers and suppliers around the world.</h2>
      <h2>a building or part of a building where goods or services are sold; a store.a card shop</h2>
    </div>
    <img src={logo} alt="Logo" style={{height:"583px"}} />;
</div>
  )
}
