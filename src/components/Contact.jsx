import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import './style.css'

const Contact = () => {
    return (
        <>
            <section class="sub-header">
        <Navbar/>
       <h1>CONTACT US</h1>
    </section>



 <section class="contact-us">
     <div class="row">
         <div class="contact-col">
             <div>
                 <i class="fa fa-home"></i>
                 <span><h5>DEVLI EXTENSION,KHANPUR</h5>
                <p>NEW DELHI,INDIA</p>
                 </span>
             </div>
             <div>
                <i class="fa fa-phone"></i>
                <span><h5>+91-5340439303</h5>
               <p>Monday-Friday,9AM-5PM</p>
                </span>
            </div>
            <div>
                <i class="fa fa-envelope"></i>
                <span><h5>xyzs@tain.co.in</h5>
               <p>mail us your queries</p>
                </span>
            </div>
         </div>
         <div class="contact-col">
             <form action="formhandler.php" method="POST">
                 <input type="text" name="name" placeholder="enter your name" required/>
                 <input type="email" name="email" placeholder="enter email address" required />
                 <input type="text" name="subject" placeholder="enter your subject" required />
                 <textarea  rows="8" name="message"  placeholder="message"></textarea>
                 <button type="submit" class="hero-btn red-btn">Send Message</button>
             </form>
         </div>
     </div>
 </section>
 <Footer/>
        </>
    )
}

export default Contact
