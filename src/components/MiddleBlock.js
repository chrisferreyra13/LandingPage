import React from 'react';
import { Row, Col } from 'antd';

import '../App.css';
import '../styles/MiddleBlock.css';

const MiddleBlock = ({ title, content}) => {
  return (
    <div className="middle-block">
      <Row type="flex" justify="center" align="middle">
        <div className="content-wrapper">
        <Col lg={24} md={24} sm={24} xs={24}>
            <h6>{title}</h6>
            <div className="content">{content}</div>
        </Col>
        </div>
      </Row>
    </div>
  );
};

export default MiddleBlock;