import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="container mt-5">
      <h1 className='text-center'>Main Menu</h1>
      <div className="d-flex justify-content-center gap-3 mt-3">
        <Link to="/create-lead" className="btn btn-primary">Add Lead</Link>
        <Link to="/display-lead" className="btn btn-secondary">View Lead</Link>
      </div>
    </div>
  );
};

export default Menu;
