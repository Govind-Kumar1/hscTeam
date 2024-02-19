// import React from 'react';
import './Team.css';
import Hover from '../Hover/Hover';
import Marqueex from '../marquee/marquee';
// import all_product from '../Assets/all_product';

const Team = () => {
  return (
    <div className='team-container'>
      <h1>Meet Our Teams</h1>

      <section className="team-section">
        <h2>Logistics</h2>
        <div className="card-container">
          {getTeamMembers("Logistics")}
        </div>
      </section>

      <section className="team-section">
        <h2>Marketing</h2>
        <div className="card-container">
          {getTeamMembers("Marketing")}
        </div>
      </section>
      <section className="team-section">
        <h2>Finance</h2>
        <div className="card-container">
          {getTeamMembers("Finance")}
        </div>
      </section>
      <section className="team-section">
        <h2>Social Media Management</h2>
        <div className="card-container">
          {getTeamMembers("Social Media Management")}
        </div>
      </section>
      <section className="team-section">
        <h2>Publicity</h2>
        <div className="card-container">
          {getTeamMembers("Publicity")}
        </div>
      </section>
      <section className="team-section">
        <h2>Events</h2>
        <div className="card-container">
          {getTeamMembers("Events")}
        </div>
      </section>
      <section className="team-section">
        <h2>Content</h2>
        <div className="card-container">
          {getTeamMembers("Content")}
        </div>
      </section>
      <section className="team-section">
        <h2>HR</h2>
        <div className="card-container">
          {getTeamMembers("HR")}
        </div>
      </section>
      <section className="team-section">
        <h2>Design</h2>
        <div className="card-container">
          {getTeamMembers("Design")}
        </div>
      </section>
      <section className="team-section">
        <h2>Web Development</h2>
        <div className="card-container">
          {getTeamMembers("web")}
        </div>
      </section>

      

      <div><Marqueex></Marqueex></div>
    </div>
  );
};

const getTeamMembers = (teamName) => {
  const teamMembers = {
    Logistics: [
      { id: 1, name: 'Divyansh Verma', roll: '3rd BE' },
      { id: 2, name: 'Jatin Kaushik', roll: '3rd CHE' },
      { id: 3, name: 'Abhay Sonkar', roll: '3rd CHE' },
    ],
    Marketing: [
      { id: 4, name: 'Shivam Bhaskar', roll: '3rd FT' },
      { id: 5, name: 'Abhay Pratap Singh', roll: '3rd PT' },
    ],
    Finance: [
      { id: 6, name: 'Harsh Gautam', roll: '3rd ME' },
      { id: 7, name: 'Akshat Gupta', roll: '3rd ME' },
      { id: 8, name: 'Amber Gupta', roll: '3rd CHE' },
    ],
    "Social Media Management": [
      { id: 9, name: 'Anshu Dwivedi', roll: '3rd ET' },
      { id: 10, name: 'Chandrika Singh', roll: '3rd BE' },
    ],
    Publicity: [
      { id: 11, name: 'Shruti Nigam', roll: '3rd PT' },
      { id: 12, name: 'Ritik', roll: '3rd PT' },
    ],
    Events: [
      { id: 13, name: 'Shalini Pal', roll: '3rd BE' },
      { id: 14, name: 'Haza Rahman', roll: '3rd CHE' },
    ],
    Content: [
      { id: 15, name: 'Anant Pandey', roll: '3rd FT' },
      { id: 16, name: 'Akanksha Verma', roll: '3rd ET' },
    ],
    HR: [
      { id: 17, name: 'Akrati Varshney', roll: '3rd BE' },
      { id: 18, name: 'Shivendra Tripathi', roll: '3rd PT' },
      { id: 19, name: 'Sneha', roll: '3rd CHE' },
    ],
    Design: [
      { id: 20, name: 'Hritik Gupta', roll: '3rd CHE (poster)' },
      { id: 21, name: 'Isha Singh', roll: '3rd CHE (Poster)' },
      { id: 22, name: 'Aashika Nath', roll: '3rd EE (video)' },
    ],
    web: [
      { id: 20, name: 'Hritik Gupta', roll: '3rd CHE ' },
      { id: 21, name: 'Isha Singh', roll: '3rd CHE ' },
      { id: 22, name: 'Aashika Nath', roll: '3rd EE ' },
      {id:23,name:'Harsh Pathak',roll:'2nd CSE'},
      {id:23,name:'Govind Kumar',roll:'2nd CSE'},
      {id:23,name:'Sukrit Prakash',roll:'2nd CSE'},
      {id:23,name:'Sumit Singh',roll:'2nd CSE'},
      {id:23,name:'Harsh Chaturvedi',roll:'2nd CSE'},
    ],
  };

  return teamMembers[teamName].map((item) => (
    <div key={item.id} className="card-wrapper">
      <Hover id={item.id} name={item.name} role={item.roll} />
    </div>
  ));
};

export default Team;