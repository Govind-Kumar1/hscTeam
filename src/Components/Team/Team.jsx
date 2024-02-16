import React from 'react';
import './Team.css';
import Hover from '../Hover/Hover';
import Marqueex from '../marquee/marquee';
// import Card from '../Card/Card';
import all_product from '../Assets/all_product';
// import Single from '../Card/Single';
// import sec_product from '../Assets/sec_product';

const Team = () => {
  return (
    <div className='i'>
      <h1>Teams</h1>

      {/* <Single name="Nishant" role="Ex-Sec"/>
      <div className="card-container">
        {sec_product.map((item, i) => (
          <div key={i} className="card-wrapper">
            <Card id={item.id} name={item.name} image={item.image} role={item.roll} />
          </div>
        ))}
      </div> */}
        
        
      <div className="card-container">
        {all_product.map((item, i) => (
          <div key={i} className="card-wrapper">
            <Hover id={item.id} name={item.name} image={item.image} role={item.roll} />
          </div>
        ))}
      </div>
      <div><Marqueex name="Govind Kumar"></Marqueex></div>
    </div>
    
  );
};

export default Team;
