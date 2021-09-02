import React, { Component } from 'react';
import Spinner from '../Spinner/Spinner';

import './person-details.css';

export default class PersonDetails extends Component {

  render() {
      const {person, loading} = this.props;

      if(!person){

        
        return <span className='d-flex justify-content-center align-items-center h-100'>Select a person from a list</span>
      }
   
const text = <> 
  <img className="person-image" 
  src={`https://starwars-visualguide.com/assets/img/characters/${person.id}.jpg`} 
  alt=''/>

<div className="card-body">
<h4>{person.name} </h4>
<ul className="list-group list-group-flush">
  <li className="list-group-item">
    <span className="term">Gender</span>
    <span>{person.gender} </span>
  </li>
  <li className="list-group-item">
    <span className="term">Birth Year</span>
    <span>{person.birth_year} </span>
  </li>
  <li className="list-group-item">
    <span className="term">Eye Color</span>
    <span>{person.eye_color} </span>
  </li>
</ul>
</div></>
    return (
      
      <div className="person-details card">
{loading ? 
        <Spinner isLoading={true} align='center'/>
: text}
      </div>
    )
  }
}
