/*eslint-disable*/
import React from "react";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";
import { Trans } from 'react-i18next';
// core components

function Projects() {
  const [pills, setPills] = React.useState("1");
  return (
    <>
      <div className="cd-section" id="projects">
        <div className="projects-5">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">
                  <Trans i18nKey="Projects">
                    服務項目
                  </Trans>
                </h2>
                <h4 className="description">
                </h4>

              </Col>
              <Col md="12">

                <div className="nav-align-center">
                  <Nav
                    className="nav-pills-info nav-pills-just-icons"
                    pills
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("1");
                        }}
                        className={pills === "1" ? "active" : ""}
                        role="tablist"
                        href="#pablo"
                      >
                        <i className="now-ui-icons design_image"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("2");
                        }}
                        className={pills === "2" ? "active" : ""}
                        role="tablist"
                        href="#pablo"
                      >
                        <i className="now-ui-icons location_world"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("3");
                        }}
                        className={pills === "3" ? "active" : ""}
                        role="tablist"
                        href="#pablo"
                      >
                        <i className="now-ui-icons design-2_ruler-pencil"></i>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
                <div className="section-space"></div>
                <TabContent className="gallery" activeTab={"pills" + pills}>
                  <TabPane tabId="pills1">
                    <Row>
                      <Col className="ml-auto mr-auto" md="5">
                        <Card
                          className="card-background card-background-product card-raised"
                          style={{
                            backgroundImage:
                              "url(" + require("assets/img/bg23.jpg") + ")"
                          }}
                        >
                          <CardBody>
                            <CardTitle tag="h2">化工技術</CardTitle>
                            <p className="card-description text-white">
                              提供整廠方法設計、各種設備尺寸訂定及設備選擇, 協助各類型工廠提供整套建廠基本計設文件

                            </p>
                            <Badge className="badge-neutral">Tech</Badge>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md="5">
                        <div className="info info-horizontal">
                          <div className="icon icon-danger">
                            <i className="now-ui-icons design-2_ruler-pencil"></i>
                          </div>
                          <div className="description">
                            <h4 className="info-title">
                              化工製程系統規劃設計
                            </h4>
                          </div>
                        </div>
                        <div className="info info-horizontal">
                          <div className="icon icon-danger">
                            <i className="now-ui-icons design-2_ruler-pencil"></i>
                          </div>
                          <div className="description">
                            <h4 className="info-title">公用製程系統規劃設計</h4>
                          </div>
                        </div>
                        <div className="info info-horizontal">
                          <div className="icon icon-danger">
                            <i className="now-ui-icons design-2_ruler-pencil"></i>
                          </div>
                          <div className="description">
                            <h4 className="info-title">球槽系統及大氣儲槽系統設計</h4>
                          </div>
                        </div>
                        <div className="info info-horizontal">
                          <div className="icon icon-danger">
                            <i className="now-ui-icons design-2_ruler-pencil"></i>
                          </div>
                          <div className="description">
                            <h4 className="info-title">單元系統規劃設計</h4>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="pills2">
                    <Row>
                      <Col className="ml-auto mr-auto" md="5">
                        <Card
                          className="card-background card-background-product card-raised"
                          style={{
                            backgroundImage:
                              "url(" + require("assets/img/project8.jpg") + ")"
                          }}
                        >
                          <CardBody>
                            <CardTitle tag="h2">Social Analytics</CardTitle>
                            <p className="card-description">
                              Insight to help you create, connect, and convert.
                              Understand Your Audience's Interests, Influence,
                              Interactions, and Intent. Discover emerging topics
                              and influencers to reach new audiences.
                            </p>
                            <Badge className="badge-neutral">Analytics</Badge>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md="5">
                        <div className="info info-horizontal">
                          <div className="icon icon-danger">
                            <i className="now-ui-icons ui-2_chat-round"></i>
                          </div>
                          <div className="description">
                            <h5 className="info-title">
                              Listen to Social Conversations
                            </h5>
                            <p className="description">
                              Gain access to the demographics, psychographics,
                              and location of unique people who talk about your
                              brand.
                            </p>
                          </div>
                        </div>
                        <div className="info info-horizontal">
                          <div className="icon icon-danger">
                            <i className="now-ui-icons design-2_ruler-pencil"></i>
                          </div>
                          <div className="description">
                            <h5 className="info-title">Social Conversions</h5>
                            <p className="description">
                              Track actions taken on your website that
                              originated from social, and understand the impact
                              on your bottom line.
                            </p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="pills3">
                    <Row>
                      <Col className="ml-auto mr-auto" md="5">
                        <Card
                          className="card-background card-background-product card-raised"
                          style={{
                            backgroundImage:
                              "url(" + require("assets/img/bg25.jpg") + ")"
                          }}
                        >
                          <CardBody>
                            <CardTitle tag="h2">Interior Redesign</CardTitle>
                            <p className="card-description">
                              Insight to help you create, connect, and convert.
                              Understand Your Audience's Interests, Influence,
                              Interactions, and Intent. Discover emerging topics
                              and influencers to reach new audiences.
                            </p>
                            <Badge className="badge-neutral">Interior</Badge>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md="5">
                        <div className="info info-horizontal">
                          <div className="icon icon-info">
                            <i className="now-ui-icons design_palette"></i>
                          </div>
                          <div className="description">
                            <h5 className="info-title">Colors adjustments</h5>
                            <p className="description">
                              Gain access to the demographics, psychographics,
                              and location of unique people who talk about your
                              brand.
                            </p>
                          </div>
                        </div>
                        <div className="info info-horizontal">
                          <div className="icon icon-info">
                            <i className="now-ui-icons design_scissors"></i>
                          </div>
                          <div className="description">
                            <h5 className="info-title">Performance Clothing</h5>
                            <p className="description">
                              Unify data from Facebook, Instagram, Twitter,
                              LinkedIn, and Youtube to gain rich insights from
                              easy-to-use reports.
                            </p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">
                  <Trans i18nKey="Projects">
                    服務項目
                  </Trans>
                </h2>
                <h4 className="description">
                </h4>
                <div className="section-space"></div>
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto" md="5">
                <Card
                  className="card-background card-background-product card-raised"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/project1.jpg") + ")"
                  }}
                >
                  <CardBody>
                    <CardTitle tag="h2">化工技術</CardTitle>
                    <p className="card-description">
                      提供整廠方法設計、各種設備尺寸訂定及設備選擇, 協助各類型工廠提供整套建廠基本計設文件
                    </p>
                    <Badge className="badge-neutral">Tech</Badge>
                  </CardBody>
                </Card>
              </Col>
              <Col className="mr-auto" md="5">
                <div className="info info-horizontal">
                  <div className="icon icon-danger">
                    <i className="now-ui-icons design-2_ruler-pencil"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">
                      化工製程系統規劃設計
                    </h4>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-danger">
                    <i className="now-ui-icons design-2_ruler-pencil"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">公用製程系統規劃設計</h4>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-danger">
                    <i className="now-ui-icons design-2_ruler-pencil"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">球槽系統及大氣儲槽系統設計</h4>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-danger">
                    <i className="now-ui-icons design-2_ruler-pencil"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">單元系統規劃設計</h4>
                  </div>
                </div>
              </Col>
            </Row>
            <hr></hr>
            <Row>
              <Col className="ml-auto mt-5" md="5">
                <div className="info info-horizontal">
                  <div className="icon icon-warning">
                    <i className="now-ui-icons users_single-02"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">生技cGMP建廠設施技術諮詢</h4>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-warning">
                    <i className="now-ui-icons business_chart-bar-32"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">工程設計、協助採購、<br></br>建造管理</h4>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-warning">
                    <i className="now-ui-icons arrows-1_refresh-69"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">建築、機電、<br></br>生技製程規劃整合</h4>
                  </div>
                </div>
              </Col>
              <Col className="mr-auto" md="5">
                <Card
                  className="card-background card-background-product card-raised"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/project2.jpg") + ")"
                  }}
                >
                  <CardBody>
                    <CardTitle tag="h2">生技製藥</CardTitle>
                    <p className="card-description">
                      提供生技製藥建廠全方位之工程整合服務, 從建廠基本規劃、重點設施(純水、注射用水、純蒸氣)工程技術提供, 於設計階段, 建築、機電、生產製程各相關工程專案整合管理, 並協助業主採購, 建造管理, 並於確效階段提供我們cGMP要求之試車整合, 以最專業的經驗協助業主完成建廠專案。
                    </p>
                    <Badge className="badge-neutral">Biologic</Badge>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <hr></hr>
            <Row>
              <Col className="ml-auto" md="5">
                <Card
                  className="card-background card-background-product card-raised"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/project3.jpg") + ")"
                  }}
                >
                  <CardBody>
                    <CardTitle tag="h2">生技醱酵工廠</CardTitle>
                    <p className="card-description">
                      本公司提供提供無菌級之生技醱酵系統規劃、設計、建造, 我們的工程經驗完成依據ASME-BPE標準建造之生技醱酵槽(20KL), 並完成無菌測試30天以上。
                    </p>
                    <Badge className="badge-neutral">Factory</Badge>
                  </CardBody>
                </Card>
              </Col>
              <Col className="mr-auto" md="5">
                <div className="info info-horizontal">
                  <div className="icon icon-danger">
                    <i className="now-ui-icons users_single-02"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">
                      生技、無菌醱酵系統專業諮詢
                    </h4>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-danger">
                    <i className="now-ui-icons business_chart-bar-32"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">整廠醱酵工廠規劃、設計、建造、採購</h4>
                  </div>
                </div>
              </Col>
            </Row>
            <hr></hr>
            <Row>
              <Col className="ml-auto mt-5" md="5">
                <div className="info info-horizontal">
                  <div className="icon icon-warning">
                    <i className="now-ui-icons files_paper"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">精密化學品整廠先期規劃</h4>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-warning">
                    <i className="now-ui-icons design-2_ruler-pencil"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">精密化學品整廠基本設計</h4>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-warning">
                    <i className="now-ui-icons design-2_ruler-pencil"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">精密化學品整廠細部設計</h4>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-warning">
                    <i className="now-ui-icons design-2_ruler-pencil"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">基本設計整合細部設計</h4>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-warning">
                    <i className="now-ui-icons users_single-02"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">精密化學品生產設施諮詢</h4>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-warning">
                    <i className="now-ui-icons ui-1_settings-gear-63"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">精密化學品試車協助</h4>
                  </div>
                </div>
              </Col>
              <hr></hr>
              <Col className="mr-auto" md="5">
                <Card
                  className="card-background card-background-product card-raised"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/project4.jpeg") + ")"
                  }}
                >
                  <CardBody>
                    <CardTitle tag="h2">精密化學品工廠</CardTitle>
                    <p className="card-description">
                      本公司提供多功能及單一功能精密化學品工廠規劃、設計工程技術整合, 從設計階段→建造階段→試車階段全方位整合, 提供完整的模組化設計, 製程乾區及濕區之完整規劃, 依據顧客需求提供完整之計畫性服務, 創造顧客最佳價值。
                    </p>
                    <Badge className="badge-neutral">Factory</Badge>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <hr></hr>
            <Row>
              <Col className="ml-auto" md="5">
                <Card
                  className="card-background card-background-product card-raised"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/project5.webp") + ")"
                  }}
                >
                  <CardBody>
                    <CardTitle tag="h2">原料藥廠</CardTitle>
                    <p className="card-description">
                      本公司提供多功能及單一功能API藥廠規劃、設計工程技術整合, 從設計階段→建造階段→試車階段→確效階段, 全方位整合, 從100l→500l→15000l提供完整的模組化設計, 製程乾區及濕區之完整規劃, 依顧客需求提供完整之計畫性服務, 創造顧客最佳價值。
                    </p>
                    <Badge className="badge-neutral">Factory</Badge>
                  </CardBody>
                </Card>
              </Col>
              <Col className="mr-auto" md="5">
                <div className="info info-horizontal">
                  <div className="icon icon-warning">
                    <i className="now-ui-icons files_paper"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">API藥廠整廠先期規劃</h4>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-warning">
                    <i className="now-ui-icons design-2_ruler-pencil"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">API藥廠整廠基本設計</h4>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-warning">
                    <i className="now-ui-icons design-2_ruler-pencil"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">API藥廠整廠細部設計</h4>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-warning">
                    <i className="now-ui-icons users_single-02"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">API藥廠生產設施cGMP<br></br>要求諮詢</h4>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-warning">
                    <i className="now-ui-icons arrows-1_share-66"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">API藥廠設備提供</h4>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-warning">
                    <i className="now-ui-icons ui-1_settings-gear-63"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">API藥廠試車及確效協助</h4>
                  </div>
                </div>
              </Col>
            </Row>
            <hr></hr>
            <Row>
              <Col className="ml-auto mt-5" md="5">
                <div className="info info-horizontal">
                  <div className="icon icon-danger">
                    <i className="now-ui-icons design-2_ruler-pencil"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">一般實驗室規劃設計</h4>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-danger">
                    <i className="now-ui-icons design-2_ruler-pencil"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">P2實驗室規劃設計</h4>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-danger">
                    <i className="now-ui-icons design-2_ruler-pencil"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">P3實驗室規劃設計</h4>
                  </div>
                </div>
              </Col>
              <Col className="mr-auto" md="5">
                <Card
                  className="card-background card-background-product card-raised"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/project6.jpg") + ")"
                  }}
                >
                  <CardBody>
                    <CardTitle tag="h2">實驗室規劃</CardTitle>
                    <p className="card-description">
                      本公司整合實驗室專業廠商, 依據業主需求規劃, 建造符合業主需求之完整功能性實驗室。
                    </p>
                    <Badge className="badge-neutral">Lab</Badge>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <hr></hr>
            <Row>
              <Col className="ml-auto" md="5">
                <Card
                  className="card-background card-background-product card-raised"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/project7.jpg") + ")"
                  }}
                >
                  <CardBody>
                    <CardTitle tag="h2">特殊設備進出口</CardTitle>
                    <p className="card-description">
                      本公司擁有製程、儀控、設備、管線等專業能力, 引進國外技術, 達成顧客須求。
                      我們依業主需求代理各類的特殊設備, 解決業主在專用特殊設備技術上的整合問題。同時我們結合國內製造商的設備組裝能力及專業技術整合, 以OEM、ODM之方式, 提供國外顧客高品質之特殊套裝設備。
                    </p>
                    <Badge className="badge-neutral">Trade</Badge>
                  </CardBody>
                </Card>
              </Col>
              <Col className="mr-auto" md="5">
                <div className="info info-horizontal">
                  <div className="icon icon-danger">
                    <i className="now-ui-icons arrows-1_cloud-download-93"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">
                      特殊設備進口
                    </h4>
                    <p className="description">
                      整合國外技術, 協助業主解決技術問題
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-danger">
                    <i className="now-ui-icons arrows-1_cloud-upload-94"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">特殊設備出口</h4>
                    <p className="description">
                      整合國內設備廠商, 提供國外廠商高品質套裝設備
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <hr></hr>
            <Row>
              <Col className="ml-auto mt-5" md="5">
                <div className="info info-horizontal">
                  <div className="icon icon-warning">
                    <i className="now-ui-icons business_bulb-63"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">協助設備、製造工廠做價值提昇</h4>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-warning">
                    <i className="now-ui-icons business_bulb-63"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">協助cGMP專用設備工廠價值提昇</h4>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-warning">
                    <i className="now-ui-icons arrows-1_refresh-69"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">成套設備系統安裝整合服務</h4>
                  </div>
                </div>
              </Col>
              <Col className="mr-auto" md="5">
                <Card
                  className="card-background card-background-product card-raised"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/project8.jpeg") + ")"
                  }}
                >
                  <CardBody>
                    <CardTitle tag="h2">整合設備、製造工廠價值</CardTitle>
                    <p className="card-description">
                      我們擁有協助價值提昇之優秀技術整合團隊, 並具備生技、製藥、cGMP之設計理念。
                    </p>
                    <Badge className="badge-neutral">Integrate</Badge>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <hr></hr>
            <Row>
              <Col className="ml-auto" md="5">
                <Card
                  className="card-background card-background-product card-raised"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/project9.jpeg") + ")"
                  }}
                >
                  <CardBody>
                    <CardTitle tag="h2">室內建廠技術</CardTitle>
                    <p className="card-description">
                      目前API藥廠、生技製藥廠、精密化學品工廠、醱酵工廠及對環境要求較高之生產工廠皆建造於室內。
                      我們擁有各類工廠建造於室內之實際經驗。
                    </p>
                    <Badge className="badge-neutral">Tech</Badge>
                  </CardBody>
                </Card>
              </Col>
              <Col className="mr-auto" md="5">
                <div className="info info-horizontal">
                  <div className="icon icon-danger">
                    <i className="now-ui-icons design-2_ruler-pencil"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">
                      製程設計
                    </h4>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-danger">
                    <i className="now-ui-icons design-2_ruler-pencil"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">建築設計</h4>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-danger">
                    <i className="now-ui-icons design-2_ruler-pencil"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">機電設計</h4>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-danger">
                    <i className="now-ui-icons design-2_ruler-pencil"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">安全設計</h4>
                  </div>
                </div>
              </Col>
            </Row>
            <hr></hr>
            <Row>
              <Col className="ml-auto mt-5" md="5">
                <div className="info info-horizontal">
                  <div className="icon icon-warning">
                    <i className="now-ui-icons design_app"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">生技製藥廠</h4>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-warning">
                    <i className="now-ui-icons design_app"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">醱酵工廠</h4>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-warning">
                    <i className="now-ui-icons design_app"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">原料藥廠</h4>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-warning">
                    <i className="now-ui-icons design_app"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">精密化學品工廠</h4>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-warning">
                    <i className="now-ui-icons design_app"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">純水系統</h4>
                  </div>
                </div>
              </Col>
              <Col className="mr-auto" md="5">
                <Card
                  className="card-background card-background-product card-raised"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/project10.jpg") + ")"
                  }}
                >
                  <CardBody>
                    <CardTitle tag="h2">設計、採購、建造整合</CardTitle>
                    <p className="card-description">
                      本公司考慮目前建廠時程掌控的急迫性及各環節的整合之重要性, 建廠工程必需採取設計、採購、建造(E.P.C.)同步整合, 以減少無謂時間浪費。本公司在生技、醱酵工廠、原料藥廠、精密化學品工廠、純水系統工程設計、採購、建造整合擁有多廠經驗, 可協助業主整合縮短建廠時間及建造風險, 相對提昇業主在建廠時效的價值性。
                    </p>
                    <Badge className="badge-neutral">Integrate</Badge>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <hr></hr>
            <Row>
              <Col className="ml-auto" md="5">
                <Card
                  className="card-background card-background-product card-raised"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/project11.png") + ")"
                  }}
                >
                  <CardBody>
                    <CardTitle tag="h2">3D機電整合模擬</CardTitle>
                    <p className="card-description">
                      室內建廠及大樓建築對空間的規劃, 在建造前採用3D設計模擬, 可預知其空間應用及設計、規劃之適當性, 本公司提供整合3D模擬及機電設計專業整合。
                    </p>
                    <Badge className="badge-neutral">Stimulate</Badge>
                  </CardBody>
                </Card>
              </Col>
              <Col className="mr-auto" md="5">
                <div className="info info-horizontal">
                  <div className="icon icon-danger">
                    <i className="now-ui-icons arrows-1_refresh-69"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">
                      3D機電整合
                    </h4>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-danger">
                    <i className="now-ui-icons ui-1_zoom-bold"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">空間使用檢討</h4>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-danger">
                    <i className="now-ui-icons files_single-copy-04"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">預先明暸空間設計安排之適當</h4>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-danger">
                    <i className="now-ui-icons design_bullet-list-67"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">協助提供材料總表</h4>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-danger">
                    <i className="now-ui-icons objects_globe"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">3D維護光碟製作</h4>
                  </div>
                </div>
              </Col>
            </Row>
            <hr></hr>
            <Row>
              <Col className="ml-auto mt-5" md="5">
                <div className="info info-horizontal">
                  <div className="icon icon-warning">
                    <i className="now-ui-icons ui-2_settings-90"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">無塵室設計、施工</h4>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-warning">
                    <i className="now-ui-icons ui-2_settings-90"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">無菌管線設計、施工</h4>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-warning">
                    <i className="now-ui-icons ui-2_settings-90"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">生化反應器設計、施工</h4>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-warning">
                    <i className="now-ui-icons files_paper"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">高潔淨材料規劃、採購</h4>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-warning">
                    <i className="now-ui-icons files_paper"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">高潔淨純水系統規劃</h4>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-warning">
                    <i className="now-ui-icons files_paper"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">高潔淨氣體系統規劃</h4>
                  </div>
                </div>
              </Col>
              <Col className="mr-auto" md="5">
                <Card
                  className="card-background card-background-product card-raised"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/project12.jpg") + ")"
                  }}
                >
                  <CardBody>
                    <CardTitle tag="h2">建廠潔淨技術</CardTitle>
                    <p className="card-description">
                      本公司整合環境潔淨、材料潔淨，製程潔淨之各項技術規劃，提供一個符合生技製藥產業全方位考量之潔淨環境，以協助客戶建立一個符合品質要求之生產環境。
                      我們提供潔淨技術之工程設計、採購協助、建造管理(E.P.C.)。 </p>
                    <Badge className="badge-neutral">E.P.C.</Badge>
                  </CardBody>
                </Card>
              </Col>
            </Row>

          </Container>
        </div>
      </div>
    </>
  );
}

export default Projects;
