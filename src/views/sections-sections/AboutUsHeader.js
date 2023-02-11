import React from "react";

// reactstrap components
import { Row, Col, Container } from "reactstrap";
import { Trans, useTranslation } from 'react-i18next';

// core components
function AboutUsHeader() {
  const { t, i18n } = useTranslation();

  let pageHeader = React.createRef();
  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="cd-section" id="headers">
        <div className="page-header page-header-small">
          <div
            className="page-header-image"
            style={{
              backgroundImage: "url(" + require("assets/img/wintech_background.webp") + ")"
            }}
            ref={pageHeader}
          ></div>
          <div className="content-center">
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h1 className="title">
                  <Trans i18nKey="aboutus">
                    關於我們
                  </Trans>
                </h1>
                <h4>
                  <Trans i18nKey="aboutusheader">
                    In recent years, the level of industry has been constantly improving, and the technology applied in various types of science and technology factories has been rapidly updated. Therefore, the technology and ability of engineering integration has become particularly important. Wending Technology Engineering Co., Ltd. is born under this concept.
                  </Trans>
                </h4>
                <h4 className="description">
                  <Trans i18nKey="aboutusdescription">
                    本公司工程專業人員累積化工、環工、生技、製藥、水資源利用等各類工程經驗及KNOW-HOW，應用以往所累積獨特之工程資源整合能力，整合工程設計、協助採購、建造，提供業主全方位之技術整合服務。
                  </Trans>
                </h4>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className="cd-section" id="features">
        <div className="features-1">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">
                  <Trans i18nKey="featurestitle">
                    工程經驗
                  </Trans>
                </h2>

              </Col>
            </Row>
            <Row>
              <Col md="3">
                <div className="info info-hover">
                  <div className="icon icon-info">
                    <i className="now-ui-icons design-2_ruler-pencil"></i>
                  </div>
                  <h4 className="info-title"><Trans i18nKey="features1">國內外各石化、化工專案</Trans></h4>
                </div>
              </Col>
              <Col md="3">
                <div className="info info-hover">
                  <div className="icon icon-success">
                    <i className="now-ui-icons shopping_box"></i>
                  </div>
                  <h4 className="info-title"><Trans i18nKey="features2">特化廠(化學品工廠)室內建造</Trans></h4>
                </div>
              </Col>
              <Col md="3">
                <div className="info info-hover">
                  <div className="icon icon-warning">
                    <i className="now-ui-icons business_bulb-63"></i>
                  </div>
                  <h4 className="info-title"><Trans i18nKey="features3">最大型API藥廠(原料藥廠)</Trans></h4>
                </div>
              </Col>
              <Col md="3">
                <div className="info info-hover">
                  <div className="icon icon-danger">
                    <i className="now-ui-icons business_chart-bar-32"></i>
                  </div>
                  <h4 className="info-title"><Trans i18nKey="features4">國內唯一最大BPE標準醱酵系統(20KL)</Trans></h4>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <div className="info info-hover">
                  <div className="icon icon-danger">
                    <i className="now-ui-icons ui-2_chat-round"></i>
                  </div>
                  <h4 className="info-title"><Trans i18nKey="features5">cGMP標準藥廠及生技廠</Trans></h4>
                </div>
              </Col>
              <Col md="3">
                <div className="info info-hover">
                  <div className="icon icon-warning">
                    <i className="now-ui-icons ui-1_settings-gear-63"></i>
                  </div>
                  <h4 className="info-title"><Trans i18nKey="features6">國內最大型純水工廠細部設計整合</Trans></h4>
                </div>
              </Col>
              <Col md="3">
                <div className="info info-hover">
                  <div className="icon icon-success">
                    <i className="now-ui-icons arrows-1_share-66"></i>
                  </div>
                  <h4 className="info-title"><Trans i18nKey="features7">國內唯一符合美國FDA確效合格生技製藥純水</Trans></h4>
                </div>
              </Col>
              <Col md="3">
                <div className="info info-hover">
                  <div className="icon icon-info">
                    <i className="now-ui-icons arrows-1_refresh-69"></i>
                  </div>
                  <h4 className="info-title"><Trans i18nKey="features8">國內唯一工程技術、設備製造、設備進出口全方位整合工程服務公司</Trans></h4>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default AboutUsHeader;
