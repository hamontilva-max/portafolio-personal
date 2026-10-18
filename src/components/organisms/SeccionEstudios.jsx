import React from 'react';
import { Row, Col } from 'antd';
import { TituloSeccion } from '../atoms/TituloSeccion';
import { ItemCronograma } from '../molecules/ItemCronograma';

export const SeccionEstudios = () => {
    const estudios = [
        {
            id: 1,
            titulo: 'Analista Programador Computacional',
            institucion: 'Duoc UC - Sede Maipú',
            fechas: 'En curso'
        }
    ];

    return (
        <div id="estudios" style={{ padding: '60px 20px', maxWidth: 1000, margin: '0 auto' }}>
            <TituloSeccion>Estudios</TituloSeccion>
            <Row justify="center">
                <Col xs={24} md={20}>
                    {estudios.map(est => (
                        <ItemCronograma
                            key={est.id}
                            title={est.titulo}
                            subtitle={est.institucion}
                            dates={est.fechas}
                        />
                    ))}
                </Col>
            </Row>
        </div>
    );
};