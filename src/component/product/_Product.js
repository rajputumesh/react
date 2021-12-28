import React, { Component } from 'react';


const _Product = () => {
    return (<div className="col-md-3 p-2">
        <img className="img-fluid" src={'https://robohash.org/${props.username}'} />
      </div>
    );
}

export default _Product;
