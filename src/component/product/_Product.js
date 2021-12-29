import React from 'react';


const _Product = (robot) => {
    return (<div className="col-md-3 p-2 text-center">
        <div className="p-2 m-1 bg-light">
        <img className="img-fluid" alt="name" src={`https://robohash.org/${robot.id}`} />
        <div className="py-2">
          <p>{robot.name}</p>
          <p>{robot.email}</p>
        </div>
        </div>
      </div>
    );
}

export default _Product;
