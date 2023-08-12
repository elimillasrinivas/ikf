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

       <div class="accordion accordion-flush mt-3 border" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              View Lead
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
             Here, you can check your details
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
             Add Lead
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Here, you can add your details
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Menu;
