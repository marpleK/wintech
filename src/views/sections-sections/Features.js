import React from "react";

// reactstrap components
import { Card, Container, Row, Col } from "reactstrap";

// core components

function Features() {
  return (
    <>
      <div className="cd-section" id="features">
        <div className="features-1">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title"><Trans i18nKey="Performances2">本公司主要工程經驗如下</h2>

              </Col>
            </Row>
            <Row>
              <Col md="3">
                <div className="info info-hover">
                  <div className="icon icon-info">
                    <i className="now-ui-icons ui-2_chat-round"></i>
                  </div>
                  <h4 className="info-title"><Trans i18nKey="Performances2">國內外各石化、化工專案之工程經驗及技術</h4>
                </div>
              </Col>
              <Col md="3">
                <div className="info info-hover">
                  <div className="icon icon-success">
                    <i className="now-ui-icons business_chart-pie-36"></i>
                  </div>
                  <h4 className="info-title"><Trans i18nKey="Performances2">將特化廠(化學品工廠)建造在室內之工程經驗及技術</h4>
                </div>
              </Col>
              <Col md="3">
                <div className="info info-hover">
                  <div className="icon icon-warning">
                    <i className="now-ui-icons design-2_ruler-pencil"></i>
                  </div>
                  <h4 className="info-title"><Trans i18nKey="Performances2">最大型API藥廠(原料藥廠)之工程經驗及技術</h4>
                </div>
              </Col>
              <Col md="3">
                <div className="info info-hover">
                  <div className="icon icon-warning">
                    <i className="now-ui-icons design-2_ruler-pencil"></i>
                  </div>
                  <h4 className="info-title"><Trans i18nKey="Performances2">唯一將BPE標準應用於國內最大醱酵系統(20KL)之工程經驗及工程技術</h4>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <div className="info info-hover">
                  <div className="icon icon-info">
                    <i className="now-ui-icons ui-2_chat-round"></i>
                  </div>
                  <h4 className="info-title"><Trans i18nKey="Performances2">協助藥廠及生技廠將cGMP標準用於工廠設施之工程經驗及工程技術</h4>
                </div>
              </Col>
              <Col md="3">
                <div className="info info-hover">
                  <div className="icon icon-success">
                    <i className="now-ui-icons business_chart-pie-36"></i>
                  </div>
                  <h4 className="info-title"><Trans i18nKey="Performances2">國內最大型純水工廠細部設計整合之工程經驗</h4>
                </div>
              </Col>
              <Col md="3">
                <div className="info info-hover">
                  <div className="icon icon-warning">
                    <i className="now-ui-icons design-2_ruler-pencil"></i>
                  </div>
                  <h4 className="info-title"><Trans i18nKey="Performances2">國內唯一符合美國FDA確效合格生技製藥純水之工程經驗</h4>
                </div>
              </Col>
              <Col md="3">
                <div className="info info-hover">
                  <div className="icon icon-warning">
                    <i className="now-ui-icons design-2_ruler-pencil"></i>
                  </div>
                  <h4 className="info-title"><Trans i18nKey="Performances2">國內唯一工程技術、設備製造、設備進出口全方位整合工程服務公司</h4>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div
          className="features-2 section-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg22.jpg") + ")"
          }}
        >
          <Container fluid>
            <Row>
              <Col className="mr-auto ml-auto" md="8">
                <h2 className="title">Trello lets you work more.</h2>
                <h4 className="description">
                  Trello’s boards, lists, and cards enable you to organize and
                  prioritize your projects in a fun, flexible and rewarding way.
                </h4>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <div className="info">
                  <div className="icon icon-info icon-circle">
                    <i className="now-ui-icons users_single-02"></i>
                  </div>
                  <h4 className="info-title">Work With Any Team</h4>
                  <p className="description">
                    Whether it’s for work or even the next family vacation,
                    Trello helps your team.
                  </p>
                </div>
              </Col>
              <Col md="4">
                <div className="info">
                  <div className="icon icon-danger icon-circle">
                    <i className="now-ui-icons business_chart-bar-32"></i>
                  </div>
                  <h4 className="info-title">A Productivity Platform</h4>
                  <p className="description">
                    Integrate the apps your team already uses directly into your
                    workflow.
                  </p>
                </div>
              </Col>
              <Col md="4">
                <div className="info">
                  <div className="icon icon-warning icon-circle">
                    <i className="now-ui-icons arrows-1_refresh-69"></i>
                  </div>
                  <h4 className="info-title">Always In Sync</h4>
                  <p className="description">
                    No matter where you are, Trello stays in sync across all of
                    your devices.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="features-3">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Simpler. Smarter. Faster.</h2>
                <h4 className="description">
                  The CloudCheckr Cloud Management Platform (CMP) provides full
                  visibility and control to reduce costs, improve cybersecurity
                  posture, and automate critical tasks.
                </h4>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <div className="info info-hover">
                  <div className="icon icon-success icon-circle">
                    <i className="now-ui-icons objects_globe"></i>
                  </div>
                  <h4 className="info-title">Asset Management</h4>
                  <p className="description">
                    Cross-account dashboards provide sophisticated reporting for
                    enterprise.
                  </p>
                </div>
              </Col>
              <Col md="4">
                <div className="info info-hover">
                  <div className="icon icon-primary icon-circle">
                    <i className="now-ui-icons education_atom"></i>
                  </div>
                  <h4 className="info-title">Resource Utilization</h4>
                  <p className="description">
                    CloudCheckr provides summary and detailed usage statistics
                    for resources.
                  </p>
                </div>
              </Col>
              <Col md="4">
                <div className="info info-hover">
                  <div className="icon icon-info icon-circle">
                    <i className="now-ui-icons tech_watch-time"></i>
                  </div>
                  <h4 className="info-title">Self-Healing</h4>
                  <p className="description">
                    CloudCheckr enables users to save money, time, and effort.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="features-4">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Performance 實績  </h2>
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
                      <h4 className="info-title">生技製藥化工</h4>
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
                      <i className="now-ui-icons business_badge"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">石油化工</h4>
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
                      "url(" + require("assets/img/bg25.jpg") + ")"
                  }}
                >
                  <div className="info">
                    <div className="icon icon-white">
                      <i className="now-ui-icons location_map-big"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">精密化學</h4>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="features-5">
          <Container>
            <Row>
              <Col md="5">
                <h2 className="title">Working is a pleasure</h2>
                <div className="info info-horizontal">
                  <div className="icon icon-info icon-circle">
                    <i className="now-ui-icons location_world"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Hundreds of Components</h4>
                    <p>
                      The moment you use Now UI Kit, you know you’ve never felt
                      anything like it. With a single use lets you do more than
                      ever before.
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-info icon-circle">
                    <i className="now-ui-icons sport_user-run"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Easy to Use</h4>
                    <p>
                      Divide details about your product or agency work into
                      parts. Write a few lines about each one. A paragraph
                      describing a feature.
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-info icon-circle">
                    <i className="now-ui-icons ui-2_time-alarm"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Fast Prototyping</h4>
                    <p>
                      Divide details about your product or agency work into
                      parts. Write a few lines about each one. A paragraph
                      describing a feature.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="7">
                <div className="tablet-container">
                  <img
                    alt="..."
                    src={require("assets/img/ipad2-inverted.png")}
                  ></img>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="features-6">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Working is a pleasure</h2>
                <h4 className="description">
                  This is the paragraph where you can write more details about
                  your product. Keep you user engaged by providing meaningful
                  information.
                </h4>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <div className="info info-horizontal">
                  <div className="icon icon-info">
                    <i className="now-ui-icons design-2_html5"></i>
                  </div>
                  <div className="description">
                    <h5 className="info-title">For Developers</h5>
                    <p>
                      The moment you use Now UI Kit, you know you’ve never felt
                      anything like it. With a single use, this powerfull UI Kit
                      lets you do more than ever before.
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-danger">
                    <i className="now-ui-icons design_palette"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">For Designers</h4>
                    <p>
                      Divide details about your product or agency work into
                      parts. Write a few lines about each one. A paragraph
                      describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="phone-container">
                  <img alt="..." src={require("assets/img/iphone2.png")}></img>
                </div>
              </Col>
              <Col md="4">
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="now-ui-icons design-2_ruler-pencil"></i>
                  </div>
                  <div className="description">
                    <h5 className="info-title">Bootstrap Grid</h5>
                    <p>
                      Divide details about your product or agency work into
                      parts. Write a few lines about each one. A paragraph
                      describing a feature will be enough.
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-success">
                    <i className="now-ui-icons files_single-copy-04"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Example Pages Included</h4>
                    <p>
                      Divide details about your product or agency work into
                      parts. Write a few lines about each one. A paragraph
                      describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div
          className="features-7 section-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg11.jpg") + ")"
          }}
        >
          <Col className="mr-auto ml-auto text-center" md="8">
            <h2 className="title">Working is a pleasure</h2>
            <h4 className="description">
              This is the paragraph where you can write more details about your
              product. Keep you user engaged by providing meaningful
              information.
            </h4>
          </Col>
          <Container fluid>
            <Row>
              <Col className="px-0" md="6">
                <Col sm="12">
                  <div className="info info-horizontal">
                    <div className="icon">
                      <i className="now-ui-icons design-2_html5"></i>
                    </div>
                    <div className="description">
                      <h5 className="info-title">For Developers</h5>
                      <p className="description">
                        The moment you use Now UI Kit, you know you’ve never
                        felt anything like it. With a single use, this powerfull
                        UI Kit lets you do more than ever before.
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon">
                      <i className="now-ui-icons design_palette"></i>
                    </div>
                    <div className="description">
                      <h5 className="info-title">For Designers</h5>
                      <p className="description">
                        The moment you use Now UI Kit, you know you’ve never
                        felt anything like it. With a single use, this powerfull
                        UI Kit lets you do more than ever before.
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon">
                      <i className="now-ui-icons design-2_ruler-pencil"></i>
                    </div>
                    <div className="description">
                      <h5 className="info-title">For Artists</h5>
                      <p className="description">
                        The moment you use Now UI Kit, you know you’ve never
                        felt anything like it. With a single use, this powerfull
                        UI Kit lets you do more than ever before.
                      </p>
                    </div>
                  </div>
                </Col>
              </Col>
              <Col md="6">
                <div className="image-container">
                  <img alt="..." src={require("assets/img/ipad3.png")}></img>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div
          className="features-8 section-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg30.jpg") + ")"
          }}
        >
          <Col className="ml-auto mr-auto text-center" md="8">
            <h2 className="title">Working is a pleasure</h2>
            <h4 className="description">
              Woodpecker.co is a follow-up automation SaaS founded in 2015.
              We’re an international team of 17, speaking 4 languages. Our
              mission is to enable all B2B companies to connect with their Ideal
              Customers.
            </h4>
          </Col>
          <Container>
            <Row>
              <Col md="3">
                <Card>
                  <div className="card-image">
                    <img
                      alt="..."
                      className="rounded"
                      src={require("assets/img/bg28.jpg")}
                    ></img>
                  </div>
                  <div className="info text-center">
                    <div className="icon">
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </div>
                    <h4 className="info-title">Reply detection</h4>
                    <p className="description">
                      If you get a reply, further follow-ups are automatically
                      stopped.
                    </p>
                  </div>
                </Card>
              </Col>
              <Col md="3">
                <Card>
                  <div className="card-image">
                    <img
                      alt="..."
                      className="rounded"
                      src={require("assets/img/bg26.jpg")}
                    ></img>
                  </div>
                  <div className="info text-center">
                    <div className="icon">
                      <i className="now-ui-icons ui-1_calendar-60"></i>
                    </div>
                    <h4 className="info-title">Follow-up</h4>
                    <p className="description">
                      Just set a number of days that you want send a follow-up.
                    </p>
                  </div>
                </Card>
              </Col>
              <Col md="3">
                <Card>
                  <div className="card-image">
                    <img
                      alt="..."
                      className="rounded"
                      src={require("assets/img/bg27.jpg")}
                    ></img>
                  </div>
                  <div className="info text-center">
                    <div className="icon">
                      <i className="now-ui-icons ui-1_send"></i>
                    </div>
                    <h4 className="info-title">Cold email</h4>
                    <p className="description">
                      Unlimited number of prospects daily with personalized
                      emails.
                    </p>
                  </div>
                </Card>
              </Col>
              <Col md="3">
                <Card>
                  <div className="card-image">
                    <img
                      alt="..."
                      className="rounded"
                      src={require("assets/img/bg29.jpg")}
                    ></img>
                  </div>
                  <div className="info text-center">
                    <div className="icon">
                      <i className="now-ui-icons ui-2_like"></i>
                    </div>
                    <h4 className="info-title">Teamwork</h4>
                    <p className="description">
                      You and your teammates won’t address the same person
                      twice.
                    </p>
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

export default Features;
