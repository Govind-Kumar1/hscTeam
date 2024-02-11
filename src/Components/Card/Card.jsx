import React from 'react';
 
import './Card.css';

const Card = (props) => {
  return (
    <div >
      <div className='container'>
        <div className="row">
          <div className="row_ ">
            <div className="single-content">
              <img src={props.image} alt="" />
              <div className="text-content">
                <h4>{props.name}</h4>
                <h5>{props.role}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

