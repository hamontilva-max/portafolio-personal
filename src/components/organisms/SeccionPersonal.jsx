import React from 'react';
import { Card, Avatar, Typography, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { TituloSeccion } from '../atoms/TituloSeccion';

// Importación de imagen desde la carpeta assets
import miFoto from '../../assets/hero.png';

const { Title, Paragraph } = Typography;

export const SeccionPersonal = () => {
    return (
        <div id="personal" style={{ padding: '80px 20px 40px 20px', maxWidth: 1000, margin: '0 auto' }}>
            <TituloSeccion>¿Quién soy?</TituloSeccion>
            <Card style={{ textAlign: 'center', borderRadius: 8, borderColor: '#d9d9d9' }}>
                <Space direction="vertical" size="middle" align="center">
                    <Avatar
                        size={120}
                        src={miFoto}
                        icon={<UserOutlined />}
                        style={{ backgroundColor: '#000000' }}
                    />
                    <Title level={3} style={{ margin: 0, color: '#000000' }}>Hanses Montilva</Title>
                    <Title level={5} type="secondary" style={{ margin: 0 }}>Analista Programador Computacional</Title>
                    <Paragraph style={{ fontSize: '16px', maxWidth: 650, color: '#595959' }}>
                        Estudiante de Analista Programador Computacional en Duoc UC Sede Maipú. Aprendiendo desarrollo de software Front-End, la construcción de interfaces interactivas y la resolución de problemas mediante código limpio y eficiente.
                    </Paragraph>
                </Space>
            </Card>
        </div>
    );
};