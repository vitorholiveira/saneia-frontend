import React from 'react';
import { Card, Space, Image, Col, Typography, Row } from 'antd';
import { Map } from '../Maps';
import logoSaneiaLabel from '../../assets/logo_saneia_label.png';

const { Title, Paragraph, Text } = Typography;

/** Componente principal */
const MapPage = () => {
    return (
        <Space
            direction="vertical"
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#ffff',
                width: '100%',
                height: 'calc(100vh - 64px)', // Preencher a altura total da tela
            }}
        >
            {/* Card com mapa */}
            <Card
                bordered={false}
                style={{
                    margin: 0,
                    width: '100vw',
                    height: 'calc(100vh - 274px)', // Ajuste o tamanho do mapa conforme necessário
                }}
                bodyStyle={{
                    padding: 0,
                }}
            >
                <Map styleHeight={'calc(100vh - 274px)'}/>
            </Card>

            {/* Introduction Card como footer */}
            <Row justify="center" align="middle" style={{ width: '100%', height: '200px' }}>
                <Col xs={24} sm={24} md={16} lg={12}>
                    <Row gutter={16} align="middle" justify="center">
                        <Col span={6}>
                            <Image
                                width={140}
                                src={logoSaneiaLabel}
                                preview={false}
                                style={{ display: 'block', margin: '0 auto', marginTop: 10 }}
                            />
                        </Col>
                        <Col span={18}>
                            <Typography>
                                <Title level={3} style={{ textAlign: 'center' }}>
                                    Mapeando Soluções, Transformando Comunidades
                                </Title>
                                <Paragraph>
                                    <Text strong>Saneia</Text> é uma plataforma tecnológica inovadora que reimagina a abordagem aos desafios de saneamento básico em Porto Alegre. Mais do que um simples aplicativo, somos um movimento de transformação social que utiliza tecnologia para empoderar comunidades e promover mudanças estruturais.
                                </Paragraph>
                            </Typography>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Space>
    );
};

export default MapPage;
