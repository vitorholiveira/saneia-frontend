import React from 'react';
import { Card, Button, Form, Input } from 'antd';

const Login = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#f5f5f5', // Adicione um fundo, se quiser
            }}
        >
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
        </div>
    );
};

export default Login;
