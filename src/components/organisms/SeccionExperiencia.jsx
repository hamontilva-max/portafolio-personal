import React from 'react';
import { Row, Col } from 'antd';
import { TituloSeccion } from '../atoms/TituloSeccion';
import { ItemCronograma } from '../molecules/ItemCronograma';

export const SeccionExperiencia = () => {
    const experiencias = [
        {
            id: 1,
            cargo: 'Desarrollador Front-End (Proyecto Académico)',
            empresa: 'TECNOFIT - Aplicación Web',
            fechas: '2026 - Presente'
        },
        {
            id: 2,
            cargo: 'Desarrollador React & Ant Design',
            empresa: 'Panel Administrativo de Usuarios',
            fechas: '2026'
        }
    ];

    return (
        <div id="experiencia" style={{ padding: '60px 20px', maxWidth: 1000, margin: '0 auto' }}>
            <TituloSeccion>Experiencia Laboral</TituloSeccion>
            <Row justify="center">
                <Col xs={24} md={20}>
                    {experiencias.map(exp => (
                        <ItemCronograma
                            key={exp.id}
                            title={exp.cargo}
                            subtitle={exp.empresa}
                            dates={exp.fechas}
                        />
                    ))}
                </Col>
            </Row>
        </div>
    );
};