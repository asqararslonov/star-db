import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../Spinner/Spinner";

import "./item-list.css";

export default class ItemList extends Component {

  state = {
    peopleList: null,
    loader: true
  };

  componentDidMount(){
    this.getPeopleList()
  }

  getPeopleList = async() => {
    try{
      const response =await new SwapiService().getAllPeople();
      this.setState({ peopleList: response.results, loader: false });
    }catch(e){
      console.log(e);
    }
  }

  RenderPeople = ({peopleList}) => {
   return peopleList.map( item => (
        <li 
          className='list-group-item' 
          key={item.name}
          onClick={() => this.props.onPersonSelected(item.url)}
        >
          {item.name}
        </li>

   ))
    
  };

  render() {
        const {
          state: {peopleList, loader}, 
          RenderPeople,
        } = this;



    return (
      <ul className="item-list list-group">
        <Spinner isLoading={loader} align='center'/>
          {peopleList ? <RenderPeople peopleList={peopleList}/> : null}
      </ul>
    );


  }
}
