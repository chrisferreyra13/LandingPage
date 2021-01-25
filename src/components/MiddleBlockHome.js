import React from 'react';
import { Row, Col } from 'antd';
import { withTranslation } from 'react-i18next';

import '../App.css';
import '../styles/MiddleBlockHome.css';

const MiddleBlockHome = () => {
  return (
    <div className="middle-block">
      <Row type="flex" justify="center" align="middle">
        <div className="content-wrapper">
        <Col lg={24} md={24} sm={24} xs={24}>
            <h6>Who We Are.</h6>
            <div className="content">
              <p>We are an organization that seeks to bring together people who share our vision</p>
              <p>with projects that complete <b className="bold-color">the infinite cycle of sustainability</b>.</p>
            </div>
        </Col>
        </div>
      </Row>
    </div>
  );
};

export default withTranslation()(MiddleBlockHome);