import React, { Component } from 'react';
import _Product from './product/_Product.js';
import Search from './Search.js';

class Gallery extends Component {
  constructor()
  {
    super()
    this.state = {
      'robots': [],
      'searchFeild':''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users =>
      this.setState({robots:users}));
  }

  searchRobots = (event) =>{
    this.setState({'searchFeild':event.target.value});
  }

  render() {
      const filterrobots = this.state.robots.filter(robots => {
        return robots.name.toLocaleLowerCase().includes(this.state.searchFeild.toLocaleLowerCase());
      })
      const products = filterrobots.map((user , i) =>{
      return (<_Product 
        key={i} 
        id={filterrobots[i].id}
        name={filterrobots[i].name}
        email={filterrobots[i].email} />
      );
    })
    return (<>
      <div className="container">
          <h2 className="text-center pt-4">Gallery</h2>
          <hr/>
          <div>
            <Search searchchange={this.searchRobots} />
          </div>
          <div className="row my-3">
              {products}
          </div>
      </div>
    </>);
  }
}

export default Gallery;
