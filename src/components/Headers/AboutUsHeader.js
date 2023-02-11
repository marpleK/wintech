import React from "react";

// reactstrap components
import { Row, Col } from "reactstrap";

// core components

function AboutUsHeader() {
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
              <h1 className="title">About Us</h1>
              <h4>
                近年來由於產業層次不斷提昇，<br></br>
                各類型的科技廠房建廠應用技術也不斷的更新，<br></br>
                因此工程整合的技術及能力便顯得重要非凡，<br></br>
                問鼎科技工程有限公司便是該理念下孕育而成。<br></br>

              </h4>
              <h4 className="description">
                本公司工程專業人員累積化工、環工、生技、製藥、水資源利用等各類工程經驗及KNOW-HOW，應用以往所累積獨特之工程資源整合能力，整合工程設計、協助採購、建造，提供業主全方位之技術整合服務。
              </h4>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default AboutUsHeader;
