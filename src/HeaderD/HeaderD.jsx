import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next';
import "../HeaderD/HeaderD.css";

const HeaderD = () => {
  const { t } = useTranslation()
  return (
    <>
      <section id='blog'>
        <Container id='sec'>
          <Row id="post" className="justify-content-between">
            <Col className='d-block d-sm-block col-lg-4 col-12'>
              <h3 className='recend'>{t("text.recend")}</h3>
              <div className="card">
                <h3 className='make'>{t("text.make")}</h3>
                <div className="yil">
                  <h4 className='sana'>12 Feb 2020</h4>
                  <h1> </h1>
                  <h4 className='design'>{t("text.design")}</h4>
                </div>
                <p className='poragrow'>{t("text.poragrow")}</p>
              </div>
            </Col>
            <Col className='d-block d-sm-block col-lg-4 col-12'>
              <h3 className='view'>{t("text.view")}</h3>
              <div className="card" style={{ marginTop: "60px" }}>
                <h3 className='make'>{t("text.make")}</h3>
                <div className="yil">
                  <h4 className='sana'>12 Feb 2020</h4>
                  <h1> </h1>
                  <h4 className='design'>{t("text.design")}</h4>
                </div>
                <p className='poragrow'>{t("text.poragrow")}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default HeaderD
