import React from 'react';
import './CourseDetails.css';
import { Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link, useLoaderData } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import { FaDownload } from 'react-icons/fa';

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    console.log(courseDetails);
    const {about, author, duration, img, title, language, lectures, ratings, price } = courseDetails;
    return (
        <>
            <Container className='mt-5'>
                <Row>
                    <Col lg='8'>
                        <div className="courseDetails">
                            <div className="heading">
                                <h4>Course Details</h4>
                                <button className="icon">
                                    <FaDownload/>
                                </button>
                            </div>
                            <h1>{title}</h1>
                            <img className='img-fluid' src={img} alt="" />
                            <p>{about}</p>
                        </div>
                    </Col>
                    <Col lg='4'>
                        <div className="courseFeatures">
                            <h4>Course Features</h4>
                            <ul>
                                <li>
                                    <span>Instructor</span>
                                    <span>{author}</span>
                                </li>
                                <li>
                                    <span>Rating</span>
                                    <span>{ratings} Star</span>
                                </li>
                                <li>
                                    <span>Lectures</span>
                                    <span>{lectures}</span>
                                </li>
                                <li>
                                    <span>Duration</span>
                                    <span>{duration}</span>
                                </li>
                                <li>
                                    <span>Language</span>
                                    <span>{language}</span>
                                </li>
                                <h5>Course Price: ${price}</h5>
                            </ul>
                            <div className='enroll'><Link to='/'>Get Premium Access</Link></div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default CourseDetails;