import React from 'react'
import './style.css';

const Footer = () => {
    return (
        <>
            <section className="footer">
                <h4>ABOUT US</h4>
                <p>It is a long established fact that a reader will be distracted by
                    the readable content of a page<br /> when looking at its layout.
                    The point of using Lorem Ipsum</p>
                <div className="icons">
                    <i className="fab fa-facebook" ></i>
                    <i className="fab fa-twitter" ></i>
                    <i className="fab fa-instagram" ></i>
                    <i className="fab fa-linkedin" ></i>
                    <i className="fab fa-youtube" ></i>
                </div>
                <p>Made with <i className="fa fa-heart"></i> by Nitin kumar</p>
            </section>
        </>
    )
}

export default Footer
