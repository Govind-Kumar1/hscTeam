import React from 'react'
import './Hover.scss'
import  img1 from '../Assets/img.jpg'
const Hover = (props) => {
  return (
    <div>
       <div className="card__collection clear-fix">
<div className="cards cards--two">
    <img src={img1} className="img-responsive" alt="Cards "/>
    <span className="cards--two__rect"></span>
    <span className="cards--two__tri"></span>
    <p>{props.name}</p>
    <p>{props.role}</p>
    <ul className="cards__list">
      <li><i className="fab fa-facebook-f"></i></li>
      <li><i className="fab fa-twitter"></i></li>
      <li><i className="fab fa-instagram"></i></li>
      <li><i className="fab fa-linkedin-in"></i></li>
    </ul>
  </div>
  {/* <div className="cards cards--three">
    <img src={img1}className="img-responsive" alt=""/>
    <span className="cards--three__rect-1">
      <span className="shadow-1"></span>
      <p>Chris Levnon</p>
    </span>
    <span className="cards--three__rect-2">
      <span className="shadow-2"></span>
    </span>
    <span className="cards--three__circle"></span>
    <ul className="cards--three__list">
      <li><i className="fab fa-facebook-f"></i></li>
      <li><i className="fab fa-twitter"></i></li>
      <li><i className="fab fa-linkedin-in"></i></li>
    </ul>
  </div>*/}
</div>
    </div> 
  )
}

export default Hover
