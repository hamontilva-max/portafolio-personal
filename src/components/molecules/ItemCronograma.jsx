import React from 'react';
import { Card, Typography } from 'antd';

const { Text, Title } = Typography;

export const ItemCronograma = ({ title, subtitle, dates }) => {
    return (
        <Card style={{ marginBottom: 16, borderColor: '#d9d9d9' }}>
            <Title level={4} style={{ margin: 0, color: '#000000' }}>{title}</Title>
            <Text strong style={{ color: '#595959' }}>{subtitle}</Text>
            <div>
                <Text type="secondary">{dates}</Text>
            </div>
        </Card>
    );
};