
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container,Row,Col } from "react-bootstrap";
import codeIMG from '../assets/image/b6.jpg'
import codeIMG5 from '../assets/image/b5.jpg'
import codeIMG1 from '../assets/image/b2.jpg'

const Skills = () => {

    const responsive = {
        superLargeDesktop: {
          
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h1 className="hSkills">Skills</h1>
                     
                    <Carousel responsive={responsive}className="skill-slider">
                            <div className="item">
                                <img src={codeIMG1} alt="image" className="" />
                                <h3 >Web Development</h3>
                                <p>Front-end:& Back-end: React, Bootstrap,Tailwind, HTML, CSS,Node.js, Express.js,Mangodb</p>
                               
                            </div>
                            <div className="item">
                                <img src={codeIMG} alt="image" className="" />
                                <h3 >Mobile App developer</h3>
                                <p>React Native</p>
                            </div>
                            <div className="item">
                                <img src={codeIMG5} alt="image" className="" />
                                <h3 >Tools and Technologies</h3>
                                <p>Git, GitHub, VS Code, npm, REST APIs</p>
                            </div>
                            <div className="item">
                                <img src={codeIMG5} alt="image" className="" />
                                <h3 >Soft Skills</h3>
                                <p>Strong teamwork
                                    and collaboration
                                    skills
                                    Effective
                                    communication
                                    Problem-solving
                                    and analytical
                                    thinking</p>
                                    
                             </div>
                             <div className="item">
                                <img src={codeIMG5} alt="image" className="" />
                                <h3 >Professional Goals:</h3>
                                <p><ul><li>Continuously
                                        improve technical
                                        skills in software
                                        development.</li>
                                        <li> Experiment with
                                        new technologies
                                        and frameworks to
                                        stay ahead of the
                                        curve.</li>
                                        </ul>
                                       <li>Contribute to
                                        solving real-world
                                        problems through
                                        innovation and
                                        creative thinking.</li>
                                        <li> I am always open to
                                        networking and
                                        collaborating with
                                        like-minded
                                        professionals</li>
                                       </p>
                                        </div>
                            <div className="item">
                                <img src={codeIMG5} alt="image" className="" />
                                <h3 >Human Languages:</h3>
                                <p>English,
                                   , Afan Oromo and
                                    Amaric</p>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>

        </section>
        
    );
};

export default Skills;