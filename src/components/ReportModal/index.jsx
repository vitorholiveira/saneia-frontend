import React, { useState, useEffect } from 'react';
import { Form, Input, Select, InputNumber, Row, Col, Modal } from 'antd';
import { Map, LocationMarkerOnClick } from '../Maps';
import { SmileOutlined, FrownOutlined } from "@ant-design/icons";

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
    const status = true

    const titleComponent = (status) => {
        return (<span>
            <span style={{marginLeft: 5}}>Descrição 1</span>
                    </span>)
    }

    return (
        <Modal
            title={"Descrição 1"}
            open={isOpen}
            onCancel={handleClose}
            width={1000}
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
                                name="title"
                                >
                                <Input disabled/>
                            </Form.Item>
                            <Form.Item
                                label="Tipo"
                                name="type"
                                >
                                <Input disabled/>
                            </Form.Item>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item
                                        label="Latitude"
                                        name="latitude"
                                        >
                                        <InputNumber style={{ width: '100%' }} precision={4} disabled />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        label="Longitude"
                                        name="longitude"
                                    >
                                        <InputNumber style={{ width: '100%' }} precision={4} disabled />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Form.Item
                                label="Descrição"
                                name="description"
                                >
                                <Input.TextArea
                                    autoSize={false} 
                                    style={{ margin: 0, resize: 'none'  }} 
                                    maxLength={600}
                                    disabled
                                    rows={11}
                                />
                            </Form.Item>
                        </Col>

                        {/* Map Column */}
                        <Col span={12}>
                            {status ?
                                <span style={{ color: 'mediumseagreen'}}>
                                    <SmileOutlined style={{marginRight: 5}}/>
                                    Resolvido
                                </span>
                                :
                                <span style={{ color: 'tomato'}}>
                                    <FrownOutlined style={{marginRight: 5}}/>
                                    Não Resolvido
                                </span>
                            }
                            {showMap && <Map styleHeight={525}/>}
                        </Col>
                    </Row>
                </Form>
        </Modal>
    
    );
};
export default ReportModal;