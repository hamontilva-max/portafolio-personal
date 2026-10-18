import React from 'react';
import {Typography} from "antd";

const {Title} = Typography;

export const TituloSeccion = ({children}) => {
    return (
        <Title
            level={2}
            style={{
                textAlign: 'center',
                marginBottom: 30,
                color: '#000000',
                textTransform: 'uppercase',
                letterSpacing: '1px'
            }}
        >
            {children}
            </Title>
    );

}