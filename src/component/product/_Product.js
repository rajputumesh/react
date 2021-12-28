import React from 'react';


const _Product = ({username, name, email}) => {
    return (<div className="col-md-3 p-2">
        <div className="p-2 m-1 bg-success border-radius">
        <img className="img-fluid" alt="name" src={`https://robohash.org/${username}`} />
        <p>{name}</p>
        <p>{email}</p>
        </div>
      </div>
    );
}

export default _Product;
