import React from 'react';
import { Row, Col } from 'antd';

import '../App.css';
import '../styles/MiddleBlock.css';

import ColoredLine from './ColoredLine'

const MiddleBlock = ({ title, content}) => {
  return (
    <div className="middle-block">
      <Row type="flex" justify="center" align="middle">
        <div className="content-wrapper">
          <Col lg={24} md={24} sm={24} xs={24}>
              <h6 className="middle-block-title">{title}</h6>
              {/*<ColoredLine className="line" color="#02af64"/>*/}
              <div className="content">{content}</div>
          </Col>
        </div>
      </Row>
    </div>
  );
};

export default MiddleBlock;