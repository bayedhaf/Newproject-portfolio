
import {Col} from 'react-bootstrap'

const ProjectCards = ({title,desc,imgurl}) => {
    return (
       <Col>
         <div className="proj-imgbx">
            <img src={imgurl}></img>
         <div className="proj-txtx">
            <h4>{title}</h4>
            <p>{desc}</p>
         </div>
         </div>
         
       </Col>
    );

};

export default ProjectCards;