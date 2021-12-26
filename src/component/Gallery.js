import React, { Component } from 'react';
import _Product from './product/_Product.js';
import { robots } from './robots.js';

class Gallery extends Component {
  render() {
    return (<>
    <div className="container">
        <h2 className="text-center pt-4">Gallery</h2>
        <hr/>
        <div className="row my-3">
            <_Product username={robots[0].username} name={robots[0].name} email={robots[0].email} />
            <_Product username={robots[1].username} name={robots[1].name} email={robots[1].email} />
            <_Product username={robots[2].username} name={robots[2].name} email={robots[2].email} />
            <_Product username={robots[3].username} name={robots[3].name} email={robots[3].email} />
            <_Product username={robots[4].username} name={robots[4].name} email={robots[4].email} />
            <_Product username={robots[5].username} name={robots[5].name} email={robots[5].email} />
        </div>
    </div>
    </>);
  }
}

export default Gallery;
