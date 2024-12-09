import React, { useState, useEffect } from 'react';
import { Card, Form, Input, Select, InputNumber, Row, Col, Button } from 'antd';
import { Map, LocationMarkerOnClick } from '../Maps';

const ReportForm = () => {
    const [latLong, setLatLong] = useState({
        latitude: null,
        longitude: null
    });
    const [form] = Form.useForm();

    useEffect(() => {
        const { latitude, longitude } = latLong;
        let { latitude: newLatitude, longitude: newLongitude } = form.getFieldsValue();
        if (latitude != null) newLatitude = latitude;
        if (longitude != null) newLongitude = longitude;
        form.setFieldsValue({ latitude: newLatitude, longitude: newLongitude });
    }, [latLong]);

    const onFinish = (values) => {
        console.log(values);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#f5f5f5'}}>
            <Card
                title="Denunciar"
                bordered={false}
                style={{ width: '70vw'}}
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
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Tipo"
                                name="type"
                                rules={[{required: true, message: 'Selecione o tipo da denúncia.'}]}
                                >
                                <Select style={{ width: '100%' }}>
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
                                <Input.TextArea autoSize={false}  style={{ height: '43.2vh', overflowY: 'scroll', resize: 'none'  }} />
                            </Form.Item>
                        </Col>

                        {/* Map Column */}
                        <Col span={12}>
                            <Map center={[51.505, -0.09]} styleHeight="70vh" zoom="3">
                                <LocationMarkerOnClick latLong={latLong} setLatLong={setLatLong} />
                            </Map>
                        </Col>
                    </Row>
                    <Row>
                        <Form.Item style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                            <Button style={{width: '15vw'}} type="primary" htmlType="submit">
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
