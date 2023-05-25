import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png"
import { FaFacebook } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";


const Footer = () => {
    return (
        <footer>
            <div className="container footer_container">
                <article>
                    <Link> <img src={Logo} alt="logo" /></Link>

                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam deserunt aliquam, architecto a iste beatae? Similique odio iure quia qui!</p>

                <div className="footer_socials">
                    <a href="https://linkedln.com/" target="_blank" rel="noreferrer noopener"><FaLinkedin/> </a>
                    <a href="https://linkedln.com/" target="_blank" rel="noreferrer noopener"><FaFacebook/> </a>
                    <a href="https://linkedln.com/" target="_blank" rel="noreferrer noopener"><AiOutlineTwitter/> </a>
                    <a href="https://linkedln.com/" target="_blank" rel="noreferrer noopener"><AiFillInstagram/> </a>

                </div>
                </article>
                <article>
                    <h4>PermalInks</h4>
                    <Link to="/about">About</Link>
                    <Link to="/plans">Plans</Link>
                    <Link to="/trainers">Traniers</Link>
                    <Link to="/gallery">Gallery</Link>  
                    <Link to="/contact">Contact</Link>
                    
                </article>

                <article>
                    <h4>PermalInks</h4>
                    <Link to="/s">Blog</Link>
                    <Link to="/s">Case Studies</Link>
                    <Link to="/s">Event</Link>
                    <Link to="/s">Communities</Link>  
                    <Link to="/s">FAQs</Link>
                    
                </article>

                <article>
                    <h4>PermalInks</h4>
                    <Link to="/s">Blog</Link>
                    <Link to="/s">Case Studies</Link>
                    <Link to="/s">Event</Link>
                    <Link to="/s">Communities</Link>  
                    <Link to="/s">FAQs</Link>
                    
                </article>
                </div>

                <div className="footer_copyright">
                    <small>2023 copyrights &copy; All right reserved</small>
                </div>
            

        </footer>
    )
}

export default Footer;