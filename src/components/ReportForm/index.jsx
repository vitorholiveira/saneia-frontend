import React, { useState, useEffect, useContext } from 'react';
import { Card, Form, Input, Select, InputNumber, Row, Col, Button, message } from 'antd';
import { Map, LocationMarkerOnClick } from '../Maps';
import { store } from '../Store';
import Login from '../Login';

const ReportForm = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const defaultLatLong = {
        latitude: null,
        longitude: null
    }
    const [latLong, setLatLong] = useState(defaultLatLong);
    const [form] = Form.useForm();
    const globalState = useContext(store);
    const { state, dispatch } = globalState;

    useEffect(() => {
        const { latitude, longitude } = latLong;
        let { latitude: newLatitude, longitude: newLongitude } = form.getFieldsValue();
        if (latitude != null) newLatitude = latitude;
        if (longitude != null) newLongitude = longitude;
        form.setFieldsValue({ latitude: newLatitude, longitude: newLongitude });
    }, [latLong]);

    const onFinish = (values) => {
        console.log(values);
        success();
        form.resetFields();
        setLatLong(defaultLatLong);
    };

    const success = () => {
        messageApi.open({
          type: 'success',
          content: 'Denúncia enviada com sucesso!'
        });
    };

    if(state.login === false)
        return <Login />

    return (
        <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#f5f5f5', marginTop: 40}}>
            {contextHolder}
            <Card
                title="Denunciar"
                bordered={false}
                style={{ width: '80vw', height: 660}}
            >
                <Form
                    name="report-form"
                    onFinish={onFinish}
                    layout="vertical"
                    form={form}
                >
                    <Row gutter={24}>
                        {/* Form Column */}
                        <Col span={12}>
                            <Form.Item
                                label="Título"
                                name="title"
                                rules={[{required: true, message: 'Insira o título da denúncia.'}]}
                                >
                                <Input/>
                            </Form.Item>
                            <Form.Item
                                label="Tipo"
                                name="type"
                                rules={[{required: true, message: 'Selecione o tipo da denúncia.'}]}
                                >
                                <Select>
                                    <Select.Option value="Tipo 1">Tipo 1</Select.Option>
                                    <Select.Option value="Tipo 1">Tipo 2</Select.Option>
                                    <Select.Option value="Tipo 3">Tipo 3</Select.Option>
                                    <Select.Option value="Tipo 4">Tipo 4</Select.Option>
                                </Select>
                            </Form.Item>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item
                                        label="Latitude"
                                        name="latitude"
                                        rules={[{required: true, message: 'Selecione algum local no mapa.'}]}
                                        >
                                        <InputNumber style={{ width: '100%' }} precision={4} disabled />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        label="Longitude"
                                        name="longitude"
                                        rules={[{required: true, message: ''}]}
                                    >
                                        <InputNumber style={{ width: '100%' }} precision={4} disabled />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Form.Item
                                label="Descrição"
                                name="description"
                                rules={[{required: true, message: 'Descreva a denúncia.'}]}
                                >
                                <Input.TextArea
                                    autoSize={false} 
                                    style={{ margin: 0, resize: 'none'  }} 
                                    maxLength={600}
                                    showCount
                                    rows={8}
                                />
                            </Form.Item>
                        </Col>

                        {/* Map Column */}
                        <Col span={12}>
                            <Map styleHeight={500}>
                                <LocationMarkerOnClick latLong={latLong} setLatLong={setLatLong} />
                            </Map>
                        </Col>
                    </Row>
                    <Row>
                        <Form.Item style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: 20}}>
                            <Button style={{width: 300}} type="primary" htmlType="submit">
                                Enviar
                            </Button>
                        </Form.Item>
                    </Row>
                </Form>
            </Card>
        </div>
    );
};

export default ReportForm;
