import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Course.css';
const Course = ({course}) => {
    const {id, img, title, author, ratings } = course;
    return (                   
            <Col lg='4'>
                <div className="course-single mb-4">
                    <img className='img-fluid' src={img} alt="" />
                    <div className="course-cnt">
                        <h5>{title}</h5>
                        <div className="author">
                            <span> Author: {author}</span>
                            <span> {ratings} Stars</span>
                        </div>
                        <Link to={`/courses/${id}`} className='btn btn-primary mt-3'>Details</Link>
                    </div>
                </div>
            </Col>       
    );
};

export default Course;