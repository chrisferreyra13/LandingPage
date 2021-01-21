import React from 'react';
import { Row, Col } from 'antd';
import { withTranslation } from 'react-i18next';


import './MiddleBlock.css';

const MiddleBlock = ({ title, content, t }) => {
  return (
    <div className="middle-block">
      <Row type="flex" justify="center" align="middle">
        <div className="content-wrapper">
        <Col lg={24} md={24} sm={24} xs={24}>
            <h6>{t(title)}</h6>
            <div className="content">{t(content)}</div>
        </Col>
        </div>
      </Row>
    </div>
  );
};

export default withTranslation()(MiddleBlock);