import React from 'react';
import Footer from '../shared/Footer/Footer';
import './Home.css';

const Home = () => {
    return (
        <>
            <div className='home'>
                <div className="overlay">
                    <h3>Learn from anywhere</h3>
                    <h1>Educational Courses</h1>
                </div>
            </div>
            <Footer></Footer>        
        </>
    );
};

export default Home;