
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container,Row,Col } from "react-bootstrap";
import codeIMG from '../assets/image/b6.jpg'
import codeIMG5 from '../assets/image/b5.jpg'
import codeIMG1 from '../assets/image/b2.jpg'

const Skills = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
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
                        <h1 className="">Skills</h1>
                        <p>Web Development:HTML, CSS, JavaScriptReact.js, Angular, Vue.js Frontend Frameworks Node.js, Express.js Backend FrameworksRESTful APIs, GraphQL Responsive Design</p>
                        <Carousel responsive={responsive}className="skill-slider">
                            <div className="item">
                                <img src={codeIMG1} alt="image" className="" />
                                <h3 >Web Development</h3>
                            </div>
                            <div className="item">
                                <img src={codeIMG} alt="image" className="" />
                                <h3 >Mobile App developer</h3>
                            </div>
                            <div className="item">
                                <img src={codeIMG5} alt="image" className="" />
                                <h3 >Soft skill</h3>
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