import { Container, Row, Col, Tab} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import projeImg1 from '../assets/image/b3.jpg';
import ProjectCards from "./ProjectCards";

const Project = () => {
    const projects = [
        {
            id: 1,
            title: "Social App",
            desc: "Design & Development",
            imgurl: projeImg1,
        },
        {
            id: 2,
            title: "Mobile App",
            desc: "Design & Development",
            imgurl: projeImg1,
        },
        {
            id: 3,
            title: "School Management System",
            desc: "Design & Development",
            imgurl: projeImg1,
        },
        {
            id: 4,
            title: "Portfolio",
            desc: "Design & Development",
            imgurl: projeImg1,
        }
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2 className="pHeading">Projects</h2>
                        <p>Description of the project</p>
                        <Tab.Container id="project-first" defaultActiveKey="first">
                            <Nav variant="underline" defaultActiveKey="active">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" disabled>Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {projects.map((project, id) => (
                                            <ProjectCards
                                                key={project.id} // Use project.id instead of index for key
                                                {...project}
                                            />
                                        ))}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second"></Tab.Pane>
                                <Tab.Pane eventKey="third"></Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Project;