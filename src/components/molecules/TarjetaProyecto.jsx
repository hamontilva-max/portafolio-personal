import React from 'react';
import { Card } from 'antd';

export const TarjetaProyecto = ({ title, description, image }) => {
    return (
        <Card
            hoverable
            style={{ width: '100%', marginBottom: 20, borderColor: '#d9d9d9' }}
            cover={
                image ? (
                    <img
                        alt={title}
                        src={image}
                        style={{ height: 180, objectFit: 'cover' }}
                    />
                ) : null
            }
        >
            <Card.Meta title={title} description={description} />
        </Card>
    );
};