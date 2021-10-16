import React, {useState} from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import './style.css';

import coursecard from './Apidata/coursecard'

import facilitydata from './Apidata/facilitydata'

const Course = () => {

    const [course, setCourse] = useState(coursecard);
    
    const [facility, setFacility] = useState(facilitydata);

    return (
        <>
          <section class="sub-header">
        <Navbar/>
       <h1>OUR COURSES</h1>
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



    <Footer/>
        </>
    )
}

export default Course
