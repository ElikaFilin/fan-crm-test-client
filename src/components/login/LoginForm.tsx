import React, { useContext, useEffect } from 'react';
import { Col, FormProps, Row, Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../store/contexts/user.context';
import { request } from '../../api/request';
import { appRoutes, errorsMessages, HTTP_METHODS } from '../../constants';
import { ILoginField, ILoginBodyRequest } from './login.interface';
import { err } from '../../utils/logger';
import { appStore } from '../../store/appStorage';
import { ILoginResponse } from '../../api/loginResponce.interface';

const {
  loginForm: { usernameRequired, failedToSubmit },
} = errorsMessages;

const onFinishFailed: FormProps<ILoginField>['onFinishFailed'] = (
  errorInfo
) => {
  err(failedToSubmit, errorInfo);
};

export function LoginForm() {
  const navigate = useNavigate();
  const { setUser, user } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  async function handleSubmit({ username }: ILoginField) {
    const loginResponse = await request<ILoginBodyRequest, ILoginResponse>({
      actionUrl: appRoutes.login,
      method: HTTP_METHODS.POST,
      body: { username } as ILoginBodyRequest,
    });
    setUser(loginResponse.user);
    appStore.setAccessToken(loginResponse.access_token);
  }

  return (
    <Row justify="center" align="middle" style={{ height: '100vh' }}>
      <Col span={8}>
        <Form
          name="login"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<ILoginField>
            label="Username"
            name="username"
            rules={[{ required: true, message: usernameRequired }]}
          >
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}
