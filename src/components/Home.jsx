import React, { useState } from 'react'
import './style.css'

import Navbar from './Navbar';


import coursecard from './Apidata/coursecard'
import campusdata from './Apidata/campusdata'
import facilitydata from './Apidata/facilitydata'
import testimonialdata from './Apidata/testimonialcard'
import Footer from './Footer';

const Home = () => {

    const [course, setCourse] = useState(coursecard);
    const [campus, setCampus] = useState(campusdata);
    const [facility, setFacility] = useState(facilitydata);
    const [testimonial, setTestimonial] = useState(testimonialdata);


    return (
        <>
            <section className="header">
               <Navbar/>
                <div className="text-box">
                    <h1>World's Biggest University</h1>
                    <p>It is a long established fact that a reader will be distracted by
                        the readable content of a page when looking at its layout.<br />
                        The point of using Lorem Ipsum</p>
                    <a href="home" class="hero-btn">Visit Us To Know More</a>
                </div>
            </section>
            {/* course section  */}
            <section className="course">
                <h1>Courses We Offer</h1>
                <p>It is a long established fact that a reader will be distracted</p>
                <div className="row">
                    {course.map((ele) => {
                        const { title, info } = ele;
                        return (
                            <div className="course-col">
                                <h3>{title}</h3>
                                <p>{info}</p>
                            </div>

                        )
                    })}

                </div>
            </section>
            {/*  campus section  */}

            <section className="campus">
                <h1>Our Global Campus</h1>
                <p>It is a long established fact that a reader will be distracted</p>
                <div className="row">
                    {
                        campus.map((item) => {
                            const { pic, city } = item;
                            return (
                                <div className="campus-col">
                                    <img src={pic} alt="pic" />
                                    <div className="layer">
                                        <h3>{city}</h3>
                                    </div>
                                </div>
                            );
                        })
                    }


                </div>
            </section>
            {/* facilities section */}

            <section className="facilities">
                <h1>Our Facilities</h1>
                <p>It is a long established fact that a reader will be distracted</p>
                <div className="row">
                    {
                        facility.map((i) => {

                            const { pic, title, text } = i;

                            return (
                                <div className="facilities-col">
                                    <img src={pic} alt='lib pic' />
                                    <h3>{title}</h3>
                                    <p>{text}</p>
                                </div>
                            )
                        })
                    }


                </div>
            </section>

            {/*  testimonial section  */}

            <section className="testimonial">
                <h1>WHAT OUR STUDENTS SAYS</h1>
                <p>It is a long established fact that a reader will be distracted</p>
                <div className="row">

                    {
                        testimonial.map((e) => {
                            const { name, pic, text, icon } = e;
                            return (
                                <div className="testimonial-col">
                                    <img src={pic} alt="..." />
                                    <div>
                                        <p>{text}</p>
                                        <h3>{name}</h3>
                                        <i className="fa fa-star" ></i>
                                        <i className="fa fa-star" ></i>
                                        <i className="fa fa-star" ></i>
                                        <i className="fa fa-star" ></i>
                                        <i className="fa fa-star" ></i>


                                    </div>
                                </div>
                            )
                        })
                    }



                </div>
            </section>

            {/* call to action section */}
            <section className="cta">
                <h1>Enroll for our various courses<br />anywhere from world</h1>
                <a href="..." class="hero-btn">CONTACT US</a>
            </section>

            {/* footer  */}
           
                    <Footer/>

        </>
    )
}

export default Home
