import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from '../../components/Particle';
import pdf from '../../assets/DanielResume1.pdf';
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from 'react-pdf';
import { GlobalWorkerOptions } from 'pdfjs-dist';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import './Resume.css';

GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.min.mjs`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <Row style={{ justifyContent: "center", marginBottom: "20px" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document 
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
            className="document"
          >
            {Array.from(new Array(numPages), (el, index) => (
              <div className="pdf-page-wrapper" key={`page_${index + 1}`}>
                <Page 
                  pageNumber={index + 1}
                  scale={width > 786 ? 1.5 : 0.5} 
                  className="pdf-page"
                />
              </div>
            ))}
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", marginTop: "20px" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;