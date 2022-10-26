import React from 'react';
import Col from 'react-bootstrap/Col';
const Course = ({course}) => {
    const {id, img, title, } = course;
    return (                    
        <Col lg="4">
            <div className="course-single mb-4 text-center">
                <h5>{title}</h5>
                <img className='img-fluid' src={img} alt="" />
                <button className='btn btn-primary mt-3'>Details</button>
            </div>
        </Col>        
    );
};

export default Course;