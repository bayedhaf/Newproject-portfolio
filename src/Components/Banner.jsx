import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRight } from 'react-bootstrap-icons';
import headerIMg from '../assets/image/bb1.jpg';

const Banner = () => {
    const [loopZero, setLoopZero] = useState(0);
    const [isDelete, setIsDelete] = useState(false);
    const toRotate = ["Web Developer", "Mobile App Developer", "Problem Solver"];
    const [text, setText] = useState('');
    const period = 200;
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
    }, [text, delta]);

    const tick = () => {
        let i = loopZero % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDelete ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (!isDelete && updatedText === fullText) {
            setIsDelete(true);
            setDelta(period);
        } else if (isDelete && updatedText === '') {
            setIsDelete(false);
            setLoopZero(loopZero + 1);
            setDelta(500);
        }
    };
//resume dowload code
const handleDownload = () => {
    
    const fileUrl = "/path/to/resume.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "resume.pdf"); 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{'Hi, I am Bayisa: '} <span className="wrap">{text}</span></h1>
                         <p>A motivated Software Engineering student at Adama Science and
                                Technology University, with a strong foundation in web
                                development and mobile app development. Skilled in front-end
                                and back-end technologies such as HTML, CSS, JavaScript,
                                React, Node.js, Python, and Express.js. Eager to improve my
                                skills continuously and contribute to innovative solutions while
                                collaborating effectively with teams to solve real-world problems.</p>
                                    <button className="connect" onClick={handleDownload}>
                            Download Resume <ArrowRight size={25} />
                        </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img className="profileimg" src={headerIMg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;