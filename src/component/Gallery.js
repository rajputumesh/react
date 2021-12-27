import React, { Component } from 'react';
import _Product from './product/_Product.js';
import { robots } from './robots.js';

class Gallery extends Component {
  render() {
    const products = robots.map((user , i) =>{
      return <_Product username={robots[i].username} name={robots[i].name} email={robots[i].email} />
    });
    return (<>
    <div className="container">
        <h2 className="text-center pt-4">Gallery</h2>
        <hr/>
        <div className="row my-3">
            {products}
        </div>
    </div>
    </>);
  }
}

export default Gallery;
