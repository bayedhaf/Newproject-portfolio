import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Logo from '../assets/image/telegram.jpg';
import linked from '../assets/image/lkdn.jpg'; 
import fbook from '../assets/image/facebook.jpg'; 
import gthub from '../assets/image/github.jpg';

const CustomNavbar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Navbar expand="lg" className={scroll ? "scroll" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img  className="Logo" src="" alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle  aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact Me</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com"><img src={linked} alt="LinkedIn" /></a>
                            <a href="https://www.facebook.com"><img src={fbook} alt="Facebook" /></a>
                            <a href="https://www.github.com"><img src={gthub} alt="GitHub" /></a>
                            <a href="https://www.github.com"><img src={Logo} alt="telegram" /></a>
                        </div>
                        <button className="vvd" onClick={() => console.log('connect')}>
                            <span>Let's Connect</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;