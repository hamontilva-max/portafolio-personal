import React from 'react';
import { Layout } from 'antd';
import { Navbar } from '../organisms/Navbar';
import { Footer } from '../organisms/Footer';

const { Content } = Layout;

export const PortafolioTemplate = ({ children }) => {
    return (
        <Layout style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
            <Navbar />
            <Content style={{ width: '100%' }}>
                {children}
            </Content>
            <Footer />
        </Layout>
    );
};