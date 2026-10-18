import React from 'react';
import { GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';

export const Footer = () => {
    return (
        <footer
            style={{
                backgroundColor: '#000',
                color: '#fff',
                padding: '30px 20px',
                textAlign: 'center',
                marginTop: 'auto',
            }}
        >
            <p style={{ marginBottom: '10px' }}>
                © 2026 Hanses Montilva - Analista Programador Computacional (Duoc UC Sede Maipú).
            </p>


            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '20px',
                    margin: '15px 0',
                    fontSize: '24px',
                }}
            >
                <a
                    href="https://github.com/tu-usuario"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#fff', transition: 'color 0.3s' }}
                >
                    <GithubOutlined />
                </a>

                <a
                    href="https://linkedin.com/in/tu-perfil"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#0a66c2', transition: 'color 0.3s' }}
                >
                    <LinkedinOutlined />
                </a>

                <a
                    href="mailto:ha.montilva@duocuc.cl"
                    style={{ color: '#ea4335', transition: 'color 0.3s' }}
                >
                    <MailOutlined />
                </a>
            </div>

            <p style={{ fontSize: '14px', color: '#888' }}>
                Contacto: ha.montilva@duocuc.cl
            </p>
        </footer>
    );
};