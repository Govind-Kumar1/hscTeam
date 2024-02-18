import React from 'react'
import './Hover.scss'
import  img1 from '../Assets/img.jpg'

const Hover = (props) => {
  return (
    <div>
      
       <div  className="card__collection clear-fix">
<div className="cards cards--two">
    
    <img src={img1} className="img-responsive" alt="Cards "/>
    <span className="cards--two__rect">
 
    </span>
    <span className="cards--two__tri"></span>
    <p>{props.name}<br/></p>
    
    <p><br/>{props.role}</p>
    <ul className="cards__list">
      <li><i className="fab fa-facebook-f"></i></li>
      
      <li><i className="fab fa-instagram"></i></li>
      <li><i className="fab fa-linkedin-in"></i></li>
    </ul>
  </div>
  
</div>
    </div> 
  )
}

export default Hover
