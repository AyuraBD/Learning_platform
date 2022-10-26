import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="not-found-cnt">
                    <h1 className='header'>404</h1>
                    <p>The page you are looking for doesn't exist or other error occurred.</p>
                    <p>Go back, or head over the <Link to='/'>learning-point.com</Link> to choose a direction.</p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;