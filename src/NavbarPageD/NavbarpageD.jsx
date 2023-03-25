import * as React from 'react';
import Myimg from '../Images/My_img.jpg'
import '../NavbarPageD/NavbarD.css'
import { useState } from 'react';
import { Col, Container, Form, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import 'animate.css';
import '../NavbarPageD/NavbarD.css'
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { Backdrop, CircularProgress } from '@mui/material';


const NavbarpageD = () => {


  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const { t } = useTranslation()

  const handlClick = (lang) => {
    i18next.changeLanguage(lang)
    i18next.changeLanguage("uz")
  }

  const [activeNav, setActiveNav] = useState("#")
  return (
    <>
      <section style={{ overflowX: 'hidden' }} id='contect'>
        <Container >

          <Navbar bg="light" expand="lg">
            <Container fluid>
              <Navbar.Brand href="#"></Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <NavDropdown title="Lang" id="collasible-nav-dropdown">
                    <NavDropdown.Item onClick={() => handlClick("eng")} href="#action/3.1"> <li onClick={handleToggle}>Eng</li></NavDropdown.Item>

                    <Backdrop
                      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                      open={open}
                      onClick={handleClose}
                    >
                      <CircularProgress color="inherit" />
                    </Backdrop>

                    <NavDropdown.Item onClick={() => handlClick("rus")} href="#action/3.2"> <li onClick={handleToggle}>Ru</li>  </NavDropdown.Item>

                    <Backdrop
                      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                      open={open}
                      onClick={handleClose}
                    >
                      <CircularProgress color="inherit" />
                    </Backdrop>

                    <NavDropdown.Item onClick={() => handlClick("uz")} href="#action/3.3"><li onClick={handleToggle}>Uzb</li> </NavDropdown.Item>

                    <Backdrop
                      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                      open={open}
                      onClick={handleClose}
                    >
                      <CircularProgress color="inherit" />
                    </Backdrop>

                    <NavDropdown.Divider />
                  </NavDropdown>

                </Nav>
                <Form style={{ gap: "60px" }} className="d-flex">
                  <Nav.Link href="#action1" className={activeNav === '#home' ? "active" : ""} style={{ fontSize: '25px' }}> {t('text.contact')}</Nav.Link>
                  <Nav.Link href="#blog" onClick={() => setActiveNav('#blog')} className={activeNav === '#blog' ? "active" : ""} style={{ fontSize: '25px' }}>{t('text.blog')}</Nav.Link>
                  <Nav.Link href="works" onClick={() => setActiveNav('#works')} className={activeNav === '#works' ? "active" : ""} style={{ fontSize: '25px' }} >{t('text.works')}</Nav.Link>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <div id='watch'>
            <Row className="justify-content-between  container">
              <Col className='d-block d-sm-block col-lg-5 col-12'>
                <section className="navbar_content">

                  <h1 className='hi animate__hinge' >{t('text.hello')} </h1>
                  <h1 class="animate__animated animate__bounce">{t('text.animal')}</h1>
                  <p className='amet '> {t('text.amet')}</p>
                  <button className='btndow'>Download Resume</button>
                </section>
              </Col>
              <Col xs={3}>
                <img className='my_img' src={Myimg} alt="" />
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  )
}

export default NavbarpageD
