import React, { useState, useContext } from 'react';
import { Card, Space, Button, Alert } from 'antd';
import { EyeOutlined, SmileOutlined, FrownOutlined } from '@ant-design/icons';
import ReportModal from '../ReportModal';
import { store } from '../Store';
import Login from '../Login';

const UserReports = () => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const reports = [
        { id: 1, title: 'Denúncia 1', status: true },
        { id: 2, title: 'Denúncia 2', status: false },
        { id: 3, title: 'Denúncia 3', status: true },
        { id: 4, title: 'Denúncia 4', status: false },
    ];
    const reports2 = []
    const globalState = useContext(store);
    const { state, dispatch } = globalState;

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
                {status ? <SmileOutlined style={{ color: 'mediumseagreen' }}/> : <FrownOutlined style={{ color: 'tomato' }}/>}
                {title}
            </div>
            <Button
                type="link"
                onClick={() => {
                    setIsOpenModal(true)
                }}
            >
                <Space>
                    <EyeOutlined style={{ display: 'inline-flex' }} />
                    Visualizar
                </Space>
            </Button>
        </div>
    );

    if(state.login === false)
        return <Login />

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#f5f5f5',
                marginTop: 40
            }}
        >
            <ReportModal isOpen={isOpenModal} setIsOpen={setIsOpenModal}/>
            <Card
                title="Suas Denúncias"
                bordered={false}
                style={{
                    width: '80vw',
                }}
            >
                {reports2.length === 0 &&
                    <Alert
                        message="Você não fez denúncias"
                        description={"Envie sua denúncia na página \"Denunciar\"."}
                        type="info"
                        showIcon
                    />
                }
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
