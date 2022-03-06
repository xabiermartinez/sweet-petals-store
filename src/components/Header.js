import React from "react";
import "./Header.css";
import { Col, Container, Row } from "react-grid-system";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function Header () {
    return (
        <Container fluid className="header">
            <Row>
                <Col sm={3} xl={4}>
                    <Link to="/"><Logo /></Link>
                </Col>
                <Col sm={9} xl={8} className="title">
                    <h1><Link to="/">Sweet Petals Store</Link></h1>
                </Col>
            </Row>
            <Row>
                <Col className="breadcrumbs">
                    <Link to="/">Home</Link>
                </Col>
            </Row>
        </Container>
    );
}

export default Header;
