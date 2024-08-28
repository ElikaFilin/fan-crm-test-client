import { useContext, useEffect } from 'react';
import { Col, Form, Layout, Row, Typography } from 'antd';
import { IProfileField } from './profile.interface';
import { UserContext } from '../../store/contexts/user.context';
import { appContentStyles } from '../../styles';
import { request } from '../../api/request';
import { appRoutes } from '../../constants';

const { Title } = Typography;

export function Profile() {
  const { user } = useContext(UserContext);

  // dummy request to demonstrate authorization
  useEffect(() => {
    request({ actionUrl: `${appRoutes.getUser}/${user?.id}` });
  }, []);

  return (
    <Layout>
      <Row justify="center" align="middle" style={appContentStyles}>
        <Col span={4}>
          <Title level={4}>Profile</Title>
          <Form disabled initialValues={user ?? undefined}>
            <Form.Item<IProfileField> label="Username">
              {user?.username}
            </Form.Item>
            <Form.Item<IProfileField> label="First name">
              {user?.firstName}
            </Form.Item>
            <Form.Item<IProfileField> label="Last name">
              {user?.lastName}
            </Form.Item>
            <Form.Item<IProfileField> label="Email">{user?.email}</Form.Item>
            <Form.Item<IProfileField> label="Phone">{user?.phone}</Form.Item>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
}
