import React from "react";
import Marquee from "react-fast-marquee";
import "./marquee.css"
// import img2 from '../Team/img.jpg';
import  img2 from '../Assets/img.jpg'
function Marqueex(props)
{
    return (
    
    <Marquee pauseOnHover="true" className="container">  
        
        <div className="Marqueecard"><img src={img2} alt="/"></img><h4>Divyansh Verma</h4></div>
        <div className="Marqueecard"><img src={img2} alt="/"></img><h4>Jatin Kaushik</h4></div> 
        <div className="Marqueecard"><img src={img2} alt="/"></img><h4>Abhay Pratap Singh</h4></div> 
        <div className="Marqueecard"><img src={img2} alt="/"></img><h4>Abhay Singh</h4></div> 
        <div className="Marqueecard"><img src={img2} alt="/"></img><h4>Harsh Gautam</h4></div> 
        <div className="Marqueecard"><img src={img2} alt="/"></img><h4>Akshat Gupta</h4></div> 
        <div className="Marqueecard"><img src={img2} alt="/"></img><h4>Amber Gupta</h4></div> 
        <div className="Marqueecard"><img src={img2} alt="/"></img><h4>Anshu Dwivedi</h4></div> 
                
       
       </Marquee>
    )   
}
export default Marqueex;