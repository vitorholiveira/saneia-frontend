import React from 'react';
import { Card, Space, Button } from 'antd';
import { Map, DescriptionsLocationMarkers } from '../Maps';

const MapPage = () => {

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#f5f5f5',
            }}
        >
            <Card
                title="Mapa de Denúncias"
                bordered={false}
                style={{
                    width: '80vw',
                }}
            >
                <Map styleHeight='75vh'>
                </Map>
            </Card>
        </div>
    );
};

export default MapPage;
