import React from 'react';
import { Typography, Layout, Row, Col } from 'antd';
import { IErrorProps } from './error.interface';
import { appContentStyles } from '../../styles';

const { Title } = Typography;

export function ErrorPage({ error }: IErrorProps) {
  return (
    <Layout style={appContentStyles}>
      <Row justify="center" align="middle">
        <Col>
          <Title level={4}>{error}</Title>
        </Col>
      </Row>
    </Layout>
  );
}
