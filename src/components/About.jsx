import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import './style.css'
import about from './img/about.jpg';

const About = () => {
    return (
        <>
           <section class="sub-header">
         <Navbar/>
       <h1>ABOUT US</h1>
    </section>


<section class="about-us">
    <div class="row">
        <div class="about-col">
            <h1>WORLD'S LARGEST UNIVERSITY</h1>
            <p>There are many variations of passages of Lorem Ipsum available,
                 but the majority have suffered alteration in some form, by injected humour
                 , or randomised words which don't look even slightly believable.
                  If you are going to use a passage of Lorem Ipsum, you need to be
                   sure there isn't anything embarrassing hidden in the middle of text.
            </p>
            <a href="..." class="hero-btn red-btn">EXPLORE NOW</a>
        </div>
        <div class="about-col">
            <img src={about} alt='...' />
        </div>
    </div>
</section> 
<Footer/>
        </>
    )
}

export default About
