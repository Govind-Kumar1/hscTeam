
import React from 'react';
import img2 from '../Assets/img.jpg';
import './Card.css';

const Single = ({ name, role }) => {
  return (
    <div>
      <div className='container'>
        <div className="row">
          <div className="col-md-3 col-sm-5">
            <div className="single-content">
              <img src={img2} alt="" />
              <div className="text-content">
                <h4>{name}</h4>
                <h5>{role}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
