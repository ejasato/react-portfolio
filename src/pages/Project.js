import React from 'react';
// import Porfolio from '../components/portfolio.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function Project(props) {
  return (
    <div >
      <h1>Projects</h1>
      <Container>
        <Row xs={1} lg={2} className="g-4">
        {/* {props.projects.map((project) => ( */}
          <Col className="d-flex justify-content-center">
            <Card style={{ width: '25rem' }} className="justify-content-center bg-dark text-white">
              <Card.Img variant="top" src="./images/JATE(1).jpg" alt="Card image" />
                <Card.Title><Card.Link href="https://polar-cove-23951.herokuapp.com/">New Open Text Editor Software</Card.Link><Card.Link href="https://github.com/ejasato/Notes-NewOpenTextEditorSoftware-"><img class = "imgGithub" src = "./images/github-mark-white.png" href = "https://github.com/ejasato/Notes-NewOpenTextEditorSoftware-" alt = "NewOpenTextEditorSoftware"/></Card.Link></Card.Title>
                <Card.Text>PWA</Card.Text>
            </Card>
          </Col>
           <Col className="d-flex justify-content-center">
           <Card style={{ width: '25rem'}} className="bg-dark text-white">
               <Card.Img variant="top" src="./images/notetaker.jpg" alt="Card image" />
                 <Card.Title><Card.Link href = "https://polar-sands-81436.herokuapp.com/notes">Take A Note of That </Card.Link><Card.Link href = "https://github.com/ejasato/Take-A-Note-of-That"><img class = "imgGithub" src = "./images/github-mark-white.png"  alt = "takeanote"/></Card.Link></Card.Title>
                 <Card.Text>Express</Card.Text>
             </Card>
           </Col>
           <Col className="d-flex justify-content-center">
           <Card style={{ width: '25rem'}} className="bg-dark text-white">
               <Card.Img variant="top" src="./images/Screen Shot-MaintenancePortal.png" alt="Card image" />
                 <Card.Title><Card.Link href="#https://github.com/ejasato/Isell">Maintenance Portal</Card.Link><Card.Link href = "https://github.com/WittyInventor/MaintenancePortal"><img class = "imgGithub" src = "./images/github-mark-white.png"  alt = "MaintenancePortal"/></Card.Link></Card.Title>
                 <Card.Text>ORM</Card.Text>
             </Card>
           </Col>
           <Col className="d-flex justify-content-center">
           <Card style={{ width: '25rem'}} className="bg-dark text-white">
               <Card.Img variant="top" src="./images/workdayscheduler.jpg" alt="Card image" />
                 <Card.Title><Card.Link  href="https://ejasato.github.io/challenge5-workdayscheduler-/">Work Day Scheduler</Card.Link><Card.Link href = "https://github.com/ejasato/challenge5-workdayscheduler-"><img class = "imgGithub" src = "./images/github-mark-white.png" alt = "workdayscheduler"/></Card.Link></Card.Title>
                 <Card.Text>Third-Party API</Card.Text>
             </Card>
           </Col>
           <Col className="d-flex justify-content-center">
           <Card style={{ width: '25rem'}} className="bg-dark text-white">
               <Card.Img variant="top" src="./images/social network.jpg" alt="Card image" />
                 <Card.Title><Card.Link href="https://github.com/ejasato/Professional-README-Generator-chall.-09-">An Social Network</Card.Link><Card.Link href = "https://github.com/ejasato/AnSocialNetwork"><img class = "imgGithub" src = "./images/github-mark-white.png" alt = "AnSocialNetwork"/></Card.Link></Card.Title>
                 <Card.Text>Node JS</Card.Text>
             </Card>
           </Col>
           <Col className="d-flex justify-content-center">
           <Card style={{ width: '25rem'}} className="justify-content-center bg-dark text-white">
               <Card.Img variant="top" src="./images/social network.jpg" alt="Card image" />
                 <Card.Title><Card.Link href="https://github.com/begirlz/RoadSage">Road-Sage</Card.Link><Card.Link href = "https://protected-crag-00303.herokuapp.com/"><img class = "imgGithub" src = "./images/Homepage.png" alt = "Librarian"/></Card.Link></Card.Title>
                 <Card.Text>MERN</Card.Text>
             </Card>
           </Col>
        </Row>
      </Container>
    </div>
  );
}
