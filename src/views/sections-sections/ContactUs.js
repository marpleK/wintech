import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";
import Iframe from 'react-iframe'
import { Trans, useTranslation } from 'react-i18next';
// core components

function ContactUs() {
  const { t, i18n } = useTranslation();

  const [first1Focus, setFirst1Focus] = React.useState(false);
  const [last1Focus, setLast1Focus] = React.useState(false);
  const [email1Focus, setEmail1Focus] = React.useState(false);
  const [first2Focus, setFirst2Focus] = React.useState(false);
  const [email2Focus, setEmail2Focus] = React.useState(false);
  return (
    <>
      <div className="cd-section" id="contact-us">
        <div
          className="contactus-1 section-image"
          style={{
            backgroundImage: "url(" + require("assets/img/contact1.jpg") + ")"
          }}
        >
          <Container>
            <Row>
              <Col md="3">
                <h2 className="title">
                  <Trans i18nKey="contactustitle">
                    聯絡我們
                  </Trans>
                </h2>
              </Col>
              <Col md="3">
                <div className="info info-horizontal mt-3">
                  <div className="icon icon-info">
                    <i className="now-ui-icons location_pin"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">
                      <Trans i18nKey="contactusaddress">
                        地址
                      </Trans>
                    </h4>
                    <p>
                      <Trans i18nKey="contactusaddressp">
                        221 新北市汐止區秀峰路81巷13號1樓
                      </Trans><br></br>
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info info-horizontal mt-3">
                  <div className="icon icon-info">
                    <i className="now-ui-icons tech_mobile"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">
                      <Trans i18nKey="contactusphone">
                        電話
                      </Trans>
                    </h4>
                    <p>
                      <Trans i18nKey="contactusphonep">
                        Tel. 02-8692 1168 <br></br>Fax. 02-2642 0277
                      </Trans>
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info info-horizontal mt-3">
                  <div className="icon icon-info">
                    <i className="now-ui-icons ui-1_email-85"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">
                      <Trans i18nKey="contactusmail">
                        信箱
                      </Trans>
                    </h4>
                    <p>
                      <Trans i18nKey="contactusmailp">
                        linda@wintech-eng.com
                      </Trans>
                    </p>
                  </div>
                </div>
              </Col>

            </Row>
            <Row>
              <Col className="ml-auto mr-auto" md="6">
                <Card className="card-contact card-raised">
                  <Iframe className="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14456.426250553306!2d121.6606173!3d25.0643771!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x16ba15f8f35a0b7a!2z5ZWP6byO56eR5oqA5bel56iL5pyJ6ZmQ5YWs5Y-4!5e0!3m2!1szh-TW!2stw!4v1671288988005!5m2!1szh-TW!2stw"
                    width="100%" height="380px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                  </Iframe>
                </Card>
              </Col>
              <Col className="ml-auto mr-auto" md="6">
                <Card className="card-contact card-raised">
                  <Form id="contact-form1" method="post" role="form">
                    <CardHeader className="text-center">
                      <CardTitle tag="h4"></CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="pr-2" md="6">
                          <label>
                            <Trans i18nKey="contactusname">
                              Name
                            </Trans></label>
                          <InputGroup
                            className={first1Focus ? "input-group-focus" : ""}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="now-ui-icons users_circle-08"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              aria-label="Name..."
                              autoComplete="Name"
                              placeholder="Name..."
                              type="text"
                              onFocus={() => setFirst1Focus(true)}
                              onBlur={() => setFirst1Focus(false)}
                            ></Input>
                          </InputGroup>
                        </Col>
                      </Row>
                      <FormGroup>
                        <label><Trans i18nKey="contactusEmailaddress">
                          Email address
                        </Trans></label>
                        <InputGroup
                          className={email1Focus ? "input-group-focus" : ""}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="now-ui-icons ui-1_email-85"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            autoComplete="email"
                            placeholder="Email Here..."
                            type="email"
                            onFocus={() => setEmail1Focus(true)}
                            onBlur={() => setEmail1Focus(false)}
                          ></Input>
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <label><Trans i18nKey="contactusYourmessage">
                          Your message
                        </Trans></label>
                        <Input
                          id="message"
                          name="message"
                          rows="6"
                          type="textarea"
                        ></Input>
                      </FormGroup>
                      <Row>
                        <Col md="6">
                          <FormGroup check>
                            <Label check>
                              <Input type="checkbox"></Input>
                              <span className="form-check-sign"></span>
                              <Trans i18nKey="contactusrobot">
                                I'm not a robot
                              </Trans>
                            </Label>
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <Button
                            className="btn-round pull-right"
                            color="info"
                            type="submit"
                          >
                            <Trans i18nKey="contactusSend">
                              Send Message
                            </Trans>
                          </Button>
                        </Col>
                      </Row>
                    </CardBody>
                  </Form>
                </Card>
              </Col>

            </Row>
            <Row>

            </Row>
          </Container>
        </div>

      </div>

    </>
  );
}

export default ContactUs;
