import React from 'react';
import Porfolio from '../portfolio.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function Project(props) {
  return (
    <div>
      <h1>Project</h1>
      <container>
        <Row xs={1} md={2} className="g-4">
        {/* {props.projects.map((project) => ( */}
          <Col>
            <Card className="bg-dark text-white">
              <Card.Img src="./images/JATE(1).jpg" alt="Card image" />
                <Card.Title href="#https://polar-cove-23951.herokuapp.com/">New Open Text Editor Software</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>PWA</Card.Text>
            </Card>
          </Col>
          // {/* <Col>
          // <Card className="bg-dark text-white">
          //     <Card.Img src="holder.js/100px270" alt="Card image" />
          //     <Card.ImgOverlay>
          //       <Card.Title href="#https://polar-sands-81436.herokuapp.com/notes">Take A Note of That</Card.Title>
          //       <Card.Text>
          //         This is a wider card with supporting text below as a natural lead-in
          //         to additional content. This content is a little bit longer.
          //       </Card.Text>
          //       <Card.Text>Express</Card.Text>
          //     </Card.ImgOverlay>
          //   </Card>
          // </Col>
          // <Col>
          // <Card className="bg-dark text-white">
          //     <Card.Img src="holder.js/100px270" alt="Card image" />
          //     <Card.ImgOverlay>
          //       <Card.Title href="#https://github.com/ejasato/Isell">I Sell</Card.Title>
          //       <Card.Text>
          //         This is a wider card with supporting text below as a natural lead-in
          //         to additional content. This content is a little bit longer.
          //       </Card.Text>
          //       <Card.Text>ORM</Card.Text>
          //     </Card.ImgOverlay>
          //   </Card>
          // </Col>
          // <Col>
          // <Card className="bg-dark text-white">
          //     <Card.Img src="holder.js/100px270" alt="Card image" />
          //     <Card.ImgOverlay>
          //       <Card.Title href="https://ejasato.github.io/challenge5-workdayscheduler-/">Work Day Scheduler</Card.Title>
          //       <Card.Text>
          //         This is a wider card with supporting text below as a natural lead-in
          //         to additional content. This content is a little bit longer.
          //       </Card.Text>
          //       <Card.Text>server side API</Card.Text>
          //     </Card.ImgOverlay>
          //   </Card>
          // </Col>
          // <Col>
          // <Card className="bg-dark text-white">
          //     <Card.Img src="holder.js/100px270" alt="Card image" />
          //     <Card.ImgOverlay>
          //       <Card.Title href="https://github.com/ejasato/Professional-README-Generator-chall.-09-">Professional README Generator</Card.Title>
          //       <Card.Text>
          //         This is a wider card with supporting text below as a natural lead-in
          //         to additional content. This content is a little bit longer.
          //       </Card.Text>
          //       <Card.Text>Node JS</Card.Text>
          //     </Card.ImgOverlay>
          //   </Card>
          // </Col>
          // <Col>
          // <Card className="bg-dark text-white">
          //     <Card.Img src="holder.js/100px270" alt="Card image" />
          //     <Card.ImgOverlay>
          //       <Card.Title href="https://github.com/ejasato/Isell">I Sell</Card.Title>
          //       <Card.Text>
          //         This is a wider card with supporting text below as a natural lead-in
          //         to additional content. This content is a little bit longer.
          //       </Card.Text>
          //       <Card.Text>ORM</Card.Text>
          //     </Card.ImgOverlay>
          //   </Card>
          // </Col> */}
          {/* ))} */}
        </Row>
      </container>
    </div>
  );
}
