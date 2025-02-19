import { Container, Row, Col, Tab } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import projeImg1 from '../assets/image/b3.jpg';
import ProjectCards from "./ProjectCards";

const Project = () => {
    const projects = [
        {
         
            title: "Social App",
            desc: "Design & Development",
            imgurl: projeImg1,
        },
        {
        
            title: "Mobile App",
            desc: "Design & Development",
            imgurl: projeImg1,
        },
        {
           
            title: "School Management System",
            desc: "Design & Development",
            imgurl: projeImg1,
        },
        {
         
            title: "Portfolio",
            desc: "Design & Development",
            imgurl: projeImg1,
        }
    ];
 
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2 className="pHeading">Projects</h2>
                        <p>Description of the project</p>
                      
                        <Tab.Container id="projects-first" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Project 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Project 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Technology </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {projects.map((project) => (
                                            <ProjectCards
                                                key={project.id}
                                                {...project}
                                            />
                                        ))}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    project 2
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">Technology</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                       
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Project;