import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRight } from 'react-bootstrap-icons';
import headerIMg from '../assets/image/b4.jpg';

const Banner = () => {
    const [loopZero, setLoopZero] = useState(0);
    const [isDelete, setIsDelete] = useState(false);
    const toRotate = ["Web Developer", "Mobile App Developer", "Problem Solver"];
    const [text, setText] = useState('');
    const period = 2000;
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

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{'Hi, I am Bayisa:'} <span className="wrap">{text}</span></h1>
                        <p>About me description</p>
                        <button className="connect" onClick={() => console.log('Connect')}>
                            Let's connect <ArrowRight size={50} />
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