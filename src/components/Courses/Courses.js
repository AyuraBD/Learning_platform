import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { useEffect } from 'react';
import Course from './Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <Container className='mt-5'>
            <Row>  
                <div className="heading">
                    <h1 className='text-center mb-5'>Check out our courses</h1>    
                </div>              
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }                
            </Row>
      </Container>
    );
};

export default Courses;