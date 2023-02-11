import React from "react";
import { Trans, useTranslation } from 'react-i18next';
// reactstrap components
import { Card, Container, Row, Col } from "reactstrap";

// core components

function Performances() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="cd-section" id="performances">
        <div className="features-4">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">
                  <Trans i18nKey="Performances">
                    實績
                  </Trans>
                </h2>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card
                  className="card-background card-raised"
                  data-background-color=""
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/bg24.jpg") + ")"
                  }}
                >
                  <div className="info">
                    <div className="icon icon-white">
                      <i className="now-ui-icons business_bulb-63"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">
                        <Trans i18nKey="Performances1">
                          生技製藥化工
                        </Trans>
                      </h4>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col md="4">
                <Card
                  className="card-background card-raised"
                  data-background-color=""
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/bg23.jpg") + ")"
                  }}
                >
                  <div className="info">
                    <div className="icon icon-white">
                      <i className="now-ui-icons ui-2_settings-90"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">
                        <Trans i18nKey="Performances2">
                          石油化工
                        </Trans>
                      </h4>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col md="4">
                <Card
                  className="card-background card-raised"
                  data-background-color=""
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/bg25.png") + ")"
                  }}
                >
                  <div className="info">
                    <div className="icon icon-white">
                      <i className="now-ui-icons education_atom"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">
                        <Trans i18nKey="Performances3">
                          精密化學
                        </Trans>
                      </h4>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Performances;
