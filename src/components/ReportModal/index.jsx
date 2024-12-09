import React, { useState, useEffect } from 'react';
import { Form, Input, Select, InputNumber, Row, Col, Modal } from 'antd';
import { Map, LocationMarkerOnClick } from '../Maps';

const ReportModal = ({isOpen, setIsOpen}) => {
    const [showMap, setShowMap] = useState(false)

    const handleClose = () => {
        setIsOpen(false);
        setShowMap(false);
    };

    useEffect(() => {
        if(!isOpen)
            return
        setShowMap(true);
    }, [isOpen]);

    return (
        <Modal
            title="Descrição 1"
            open={isOpen}
            onCancel={handleClose}
            width={1500}
            footer={null}
        >
                <Form
                    name="report-form"
                    layout="vertical"
                >
                    <Row gutter={24}>
                        {/* Form Column */}
                        <Col span={12}>
                            <Form.Item
                                label="Autor"
                                name="autor"
                            >
                                <Input disabled/>
                            </Form.Item>
                            <Form.Item
                                label="Tipo"
                                name="type"
                                >
                                <Select style={{ width: '100%' }} disabled>
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
                                        >
                                        <InputNumber
                                            style={{ width: '100%' }}
                                            precision={4}
                                            disabled
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        label="Longitude"
                                        name="longitude"
                                    >
                                        <InputNumber
                                            style={{ width: '100%' }}
                                            precision={4}
                                            disabled
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Form.Item
                                label="Descrição"
                                name="description"
                            >
                                <Input.TextArea
                                    autoSize={false} 
                                    style={{ height: '43.2vh', overflowY: 'scroll', resize: 'none'  }}
                                    disabled
                                />
                            </Form.Item>
                        </Col>

                        {/* Map Column */}
                        <Col span={12}>
                        {showMap && (
                            <Map styleHeight="70vh">
                                
                            </Map>)}
                        </Col>
                    </Row>
                </Form>
        </Modal>
    
    );
};
export default ReportModal;