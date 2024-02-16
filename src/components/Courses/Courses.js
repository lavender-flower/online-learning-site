
import React from 'react';
import Card from 'react-bootstrap/Card';


import useCourses from '../../hooks/useCourses';

const Courses = () => {
    const[courses]=useCourses();
    
    return (
        <div>
        
            

    {
        courses.map((course,i)=>(
            <div className='m-4' key={i}>
                
                <div className="card  style ">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={course.img} className="img-fluid rounded-start" alt="..."></img>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{course.name}</h5>
        <small className="card-text">{course.purpose}</small>
        <p className="card-text text-success">Price:{course.price}tk</p>
        <p className="card-text"><small className="text-body-secondary">Purchased by <span className='text-danger'>{course.students}</span> students</small></p>
      </div>
    </div>
  </div>
</div>

            </div>
        ))
    }
            
       
        </div>
    );
};

export default Courses;