import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import certificate from './img/certificate.jpg';
import './style.css'

const Blog = () => {
    return (
        <>
            <section class="sub-header">
       <Navbar/>
       <h1>Our Certificate & Online Programs</h1>
    </section>



<section class="blog-content">
    <div class="row">
        <div class="blog-left">
            <img src={certificate} alt='....'/> >
            <h2>Our Certificate & Online Programs</h2>
            <p>It is a long established fact that a reader will be distracted by the
                 readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                 of letters, as opposed to using 'Content here, content here', making it look like 
                 readable English.
            </p><br/>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text.
                 It has roots in a piece of classical Latin literature from 45 BC,
                  making it over 2000 years old. Richard McClintock, a Latin professor
                   at Hampden-Sydney College in Virginia, looked up one of the more
                    obscure Latin words, consectetur, from a Lorem Ipsum 
                passage, and going through the cites of the word in classical literature,
                 discovered the undoubtable source.
            </p><br/>
            <p>It is a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout.
                  making it look like 
                readable English.
            </p><br/>
            <p>It is a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout.
                at Hampden-Sydney College in Virginia, looked up one of the more
                    obscure Latin words, consectetur, from a Lorem Ipsum 
                 The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                of letters, as opposed to using 'Content here, content here', making it look like 
                readable English.</p>

                <div class="comment-box">
                    <h3>Leave a comment</h3>
                    <form  class="comment-form">
                        <input type="text" placeholder="enter name"/>
                        <input type="email" placeholder="enter email"/>
                        <textarea  rows="5" placeholder="your comment"></textarea>
                        <button type="submit" class="hero-btn red-btn">Post Comment</button>
                    </form>
                </div>
        </div>
        <div class="blog-right">
            <h3>Post Categories</h3>
            <div>
                <span>Bussiness Analytics</span>
                <span>23</span>
            </div>
            <div>
                <span>Data Science</span>
                <span>19</span>
            </div>
            <div>
                <span>Machine Learning</span>
                <span>32</span>
            </div>
            <div>
                <span>Computer Science</span>
                <span>43</span>
            </div>
            <div>
                <span>Commerce</span>
                <span>15</span>
            </div>
            <div>
                <span>Animation</span>
                <span>23</span>
            </div>
            <div>
                <span>literature</span>
                <span>13</span>
            </div>
        </div>
    </div>
</section>

<Footer/>
        </>
    )
}

export default Blog
