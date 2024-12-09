import React from 'react';
import { Card, Space, Button } from 'antd';
import { EyeOutlined, SmileOutlined, FrownOutlined } from '@ant-design/icons';

const UserReports = () => {
    const reports = [
        { id: 1, title: 'Denúncia 1', status: true },
        { id: 2, title: 'Denúncia 2', status: false },
        { id: 3, title: 'Denúncia 3', status: true },
        { id: 4, title: 'Denúncia 4', status: false },
    ];

    const ReportItem = ({ title, status }) => (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '8px 0',
                borderBottom: '1px solid #f0f0f0',
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {status ? <SmileOutlined /> : <FrownOutlined />}
                {title}
            </div>
            <Button
                type="link"
                onClick={() => {
                    console.log('Open:', title);
                }}
            >
                <Space>
                    <EyeOutlined style={{ display: 'inline-flex' }} />
                    Visualizar
                </Space>
            </Button>
        </div>
    );

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#f5f5f5',
            }}
        >
            <Card
                title="Denúncias"
                bordered={false}
                style={{
                    width: '80vw',
                }}
            >
                {reports.map((report) => (
                    <ReportItem
                        key={report.id}
                        title={report.title}
                        status={report.status}
                    />
                ))}
            </Card>
        </div>
    );
};

export default UserReports;
