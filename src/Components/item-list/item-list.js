import React, { Component } from 'react';
import './item-list.css';
import Spinner from "../Spinner/Spinner";

export default class ItemList extends Component {
state = {
    peopleList: null,
    loader: true
};
getPeopleList = async () => {
    try {
       const response = await new SwapiService().getAllPeople();
       this.setState({peopleList: response.results, loader: false})
    }
    catch (e) {
        console.log(e)
    }
}
componentDidMount () {
        this.getPeopleList()
}
RenderPeople = ({peopleList}) => {
    return  peopleList.map(item => (
        <div>
            <li
                onClick={() => {

                }}
                className="list-group-item"
                key={item.id}>
                {item.name}
            </li>
        </div>
    )
    )

}
render() {
        const {
            state:{peopleList, loader},
            RenderPeople,
        } = this;
    return (
      <ul className="item-list list-group">
          <Spinner isLoading={loader} align={"center"} />
          {peopleList ? <RenderPeople peopleList={peopleList}/>: null}
      </ul>
    );
  }
}