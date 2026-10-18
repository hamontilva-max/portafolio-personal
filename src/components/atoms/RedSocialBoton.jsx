import React from 'react';
import {Button} from "antd";

export const RedSocialBoton = ({ icon, href, children }) => {
    return (
        <Button
            type="primary"
            shape="round"
            icon={icon}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            size="large"
            style={{ backgroundColor: '#000000', borderColor: '#000000' }}
        >
            {children}
        </Button>
    );
};