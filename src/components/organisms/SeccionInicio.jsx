import React from 'react';
import { Typography, Space, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

export const SeccionInicio = () => {
    return (
        <div
            id="inicio"
            style={{
                minHeight: '100vh',
                backgroundColor: '#141414',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: '0 20px',
                paddingTop: '64px'
            }}
        >
            <Space direction="vertical" size="small" align="center">
                <Text style={{ color: '#8c8c8c', fontWeight: 'bold', letterSpacing: '2px', fontSize: '14px' }}>
                    HOLA, MI NOMBRE ES
                </Text>
                <Title level={1} style={{ color: '#ffffff', fontSize: '48px', margin: 0, fontWeight: 800 }}>
                    HANSES MONTILVA
                </Title>
                <div style={{ width: '40px', height: '3px', backgroundColor: '#ffffff', margin: '15px 0' }}></div>
                <Text style={{ color: '#d9d9d9', fontSize: '16px', letterSpacing: '1px' }}>
                    ANALISTA PROGRAMADOR
                </Text>

                <Button
                    type="default"
                    size="large"
                    shape="round"
                    href="#personal"
                    icon={<DownOutlined />}
                    style={{ marginTop: '30px', backgroundColor: '#ffffff', color: '#000000', borderColor: '#ffffff', fontWeight: 'bold' }}
                >
                    Conóceme más
                </Button>
            </Space>
        </div>
    );
};