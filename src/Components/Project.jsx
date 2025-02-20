import { Container, Row, Col, Tab } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import projeImg1 from '../assets/image/b3.jpg';
import ProjectCards from "./ProjectCards";

const Project = () => {
    const projects = [
        {
         
            title: "Online Shopping Platform",
            desc: " An e-commerce platform that allows users to browse products, add them to their cart, and complete purchases securely. It includes features like product search, user reviews, and an admin dashboard for managing inventory and orders.",
            imgurl: projeImg1,
        },
        {
        
            title: "Social App Project",
            desc: "Connectify is a full-stack social networking application designed to connect users globally. It allows users to create profiles, share posts, follow friends, and interact through comments and likes. The app also includes real-time messaging and notifications to enhance user engagement.",
            imgurl: projeImg1,
        },
        {
           
            title: "My Portfolio - Showcasing My Work and Skills",
            desc: "This portfolio is a personal website designed to showcase my projects, skills, and experience. It includes an about section, project details, a blog, and a contact form for potential collaborations.",
            imgurl: projeImg1,
        },
       
    ];
 
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2 className="pHeading">Projects</h2>
                        <p>My goal is to design a product that is intuitive and accessible, 
                            ensuring that every user, regardless of their technical background, 
                            feels confident and comfortable. By focusing on ease of use and clear 
                            navigation, we aim to remove barriers and make the complex simple</p>
                      
                        <Tab.Container id="projects-first" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Project 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Project 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">project</Nav.Link>
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
                                <Row>
                                        {projects.map((project) => (
                                            <ProjectCards
                                                key={project.id}
                                                {...project}
                                            />
                                        ))}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">Coming soon...new project</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                       
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Project;