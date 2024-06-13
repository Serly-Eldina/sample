import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="bg-light py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="mb-4">
              <h1 className="display-4 mb-3">Halo, Saya </h1>
              <p className="lead">Saya adalah seorang pengembang web yang bersemangat dan kreatif dengan pengalaman dalam pengembangan aplikasi web dan desain UI/UX.</p>
              <ul className="list-unstyled">
                <li><strong>Alamat:</strong> [Alamat Anda]</li>
                <li><strong>Email:</strong> [Email Anda]</li>
                <li><strong>Telepon:</strong> [Nomor Telepon Anda]</li>
              </ul>
            </div>
          </Col>
          <Col md={6}>
            <div className="text-center">
              <img src="path-to-your-image.jpg" alt="Profile" className="img-fluid rounded-circle" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
