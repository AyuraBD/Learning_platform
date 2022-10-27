import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../shared/Footer/Footer';
import { useState } from 'react';
import { useEffect } from 'react';
import Course from './Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('https://learning-point-server-xi.vercel.app/courses/')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <>
            <Container className='mt-5'>
                <Row>
                    <div className="heading">
                        <h1 className='text-center mb-5'>Check Out Our Courses</h1>
                    </div>                    
                    {
                        courses.map(course => <Course
                            key={course.id}
                            course={course}
                        ></Course>)
                    }                   
                </Row>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Courses;