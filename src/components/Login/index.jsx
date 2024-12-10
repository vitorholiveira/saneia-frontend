import React, { useContext } from 'react';
import { Card, Button, Form, Input, Alert, Space, Col } from 'antd';
import { setLogin } from '../Store/actions';
import { store } from '../Store';

const Login = () => {
    const globalState = useContext(store);
    const { state, dispatch } = globalState;

    const onFinish = (values) => {
        dispatch(setLogin(true))
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    
    return (
        <Space style={{marginTop: 40}}>
            <Col>
                <Alert 
                    message="Para acessar essa página você precisa fazer login."
                    type="warning"
                    style={{marginBottom: 15}}
                    showIcon
                />
                <Card
                    title="Login"
                    bordered={false}
                    style={{
                        width: 500,
                        height: 320
                    }}
                >
                    <Form
                        name="basic"
                        layout="vertical"
                        initialValues={{remember: true}}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Usuário"
                            name="username"
                            rules={[{required: true, message: 'Insira o seu nome de usuário.'}]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Senha"
                            name="password"
                            rules={[{required: true, message: 'Insira a sua senha.'}]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item>
                            <Button style={{width: '100%'}} type="primary" htmlType="submit">
                                Entrar
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
        </Space>
    );
};

export default Login;
