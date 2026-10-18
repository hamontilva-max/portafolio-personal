import React from 'react';
import { Row, Col } from 'antd';
import { TituloSeccion } from '../atoms/TituloSeccion';
import { TarjetaProyecto } from '../molecules/TarjetaProyecto';



export const SeccionProyectos = () => {
    const proyectos = [
        {
            id: 1,
            title: 'TECNOFIT',
            description: 'Plataforma web interactiva con registro, login y validaciones de correo de dominio Duoc UC.',
        },
        {
            id: 2,
            title: 'Panel Administrativo de Usuarios',
            description: 'Módulo interactivo desarrollado en React con Ant Design para gestión y búsqueda en tiempo real de usuarios.',

        }
    ];

    return (
        <div id="proyectos" style={{ padding: '60px 20px', maxWidth: 1000, margin: '0 auto' }}>
            <TituloSeccion>Desarrollos y Proyectos</TituloSeccion>
            <Row gutter={[24, 24]} justify="center">
                {proyectos.map(p => (
                    <Col xs={24} sm={12} key={p.id}>
                        <TarjetaProyecto
                            title={p.title}
                            description={p.description}
                            image={p.image}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );
};