import axios from 'axios'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React, { useEffect, useState } from 'react'
import { Accordion, Button, Col, Container, Form, Row } from 'react-bootstrap'
import './FooterD.css'
import { useTranslation } from 'react-i18next';


const FooterD = () => {

  const { t } = useTranslation()


  const [value, setValue] = useState()
  const [postName, setPostName] = useState()
  const [postComment, setPostComment] = useState()

  const postComments = () => {
    axios.post("https://my-json-server-production-a01a.up.railway.app/data", { name: postName, post: postComment })
      .then((res) => {
        alert(res.statusText)
      })
  }


  const delet_func = (id) => {
    axios.delete(`https://my-json-server-production-a01a.up.railway.app/data/${id}`)
      .then((res) => {
        console.log(res);
      })
      setValue(value.filter((el)=>el.id !== id))
  }

  const getValues = () => {
    axios.get("https://my-json-server-production-a01a.up.railway.app/data")
      .then((responsive) => {
        setValue(responsive?.data)
      })
  }
  useEffect(() => {
    getValues()
  }, [])
  return (
    <>
      <Container>
        <Row className='justify-content-center mt-3'>
          <Col xs={12} lg={6} className='d-block d-sm-block'>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label> {t("text.your")}</Form.Label>
                <Form.Control type="text" className='your-name' onChange={(e) => setPostName(e.target.value)} placeholder={t("text.your")} />
              </Form.Group>
              <Form.Group className="comment mb-3" controlId="formBasicPassword">
                <textarea name="text" id="comment" onChange={(e) => setPostComment(e.target.value)} placeholder={t("text.coment")} cols="84" rows="5"></textarea>
              </Form.Group>
              <Button className='bootton' style={{ width: "100%" }} id='btn-submit' onClick={postComments} variant="primary" >
                {t("text.primary")}
              </Button>
            </Form>
          </Col>
        </Row>
        <Row id='fodrs' className='justify-content-center mt-3 mb-5'>
          <Col xs={12} lg={6} className='d-block d-sm-block'>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>All Comments</Accordion.Header>
                <Accordion.Body>
                  {
                    value?.map((val) => {
                      return (
                        <Accordion id='accordion'>
                          <Accordion.Item eventKey="1">
                            <Accordion id='names'><b>Name: </b>{val.name}</Accordion>
                            <Accordion id='comment-body'><b>comment: </b> {val.post}</Accordion>
                              <button style={{width:"100%", background:"blue", border:'none' ,color:'white'}} onClick={() => delet_func(val.id)}>delete</button>
                          </Accordion.Item>
                        </Accordion>
                      )
                    })
                  }
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
        <Row xs={12} lg={6} className='d-block d-sm-block'>
          <div className="bosh">
            <div className='icons'>
              <div className="gap">
                <GitHubIcon id='git' />
                <InstagramIcon id='git' />
                <TelegramIcon id='git' />
                <LinkedInIcon id='git' />
              </div>
              <p className='copy'>Copyright ©2020 All rights reserved </p>
            </div>
          </div>
        </Row>
      </Container>
    </>
  )
}
export default FooterD
