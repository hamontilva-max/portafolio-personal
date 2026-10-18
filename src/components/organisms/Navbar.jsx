import React from 'react';
import { Menu } from 'antd';

export const Navbar = () => {
    const items = [
        { label: <a href="#inicio">INICIO</a>, key: 'inicio' },
        { label: <a href="#sobre-mi">SOBRE MÍ</a>, key: 'sobre-mi' },
        { label: <a href="#experiencia">EXPERIENCIA</a>, key: 'experiencia' },
        { label: <a href="#proyectos">PROYECTOS</a>, key: 'proyectos' },
        { label: <a href="#contacto">CONTACTO</a>, key: 'contacto' },
    ];

    return (
        <header
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                width: '100%',
                zIndex: 1000,
                backgroundColor: '#000',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 20px',
                boxSizing: 'border-box',
            }}
        >
            <div style={{ color: '#fff', fontWeight: 'bold', fontSize: '18px', whiteSpace: 'nowrap' }}>
                HANSES MONTILVA
            </div>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['inicio']}
                items={items}
                style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    minWidth: 0,
                    borderBottom: 'none',
                    backgroundColor: 'transparent',
                }}
            />
        </header>
    );
};