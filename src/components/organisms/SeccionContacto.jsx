import React from 'react';
import { Form, Input, Button, message } from 'antd';

export const SeccionContacto = () => {
    const onFinish = (values) => {
        message.success('Mensaje enviado con éxito');
    };

    return (
        <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
                name="nombre"
                label="Nombre Completo"
                rules={[{ required: true, message: 'Por favor ingresa tu nombre' }]}
            >
                <Input placeholder="Tu nombre" />
            </Form.Item>

            <Form.Item
                name="email"
                label="Correo Electrónico"
                rules={[
                    { required: true, message: 'Por favor ingresa tu correo' },
                    { type: 'email', message: 'Ingresa un correo válido' }
                ]}
            >
                <Input placeholder="tu@correo.com" />
            </Form.Item>

            <Form.Item
                name="mensaje"
                label="Mensaje"
                rules={[{ required: true, message: 'Por favor ingresa un mensaje' }]}
            >
                <Input.TextArea rows={4} placeholder="Escribe tu mensaje aquí..." />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Enviar Mensaje
                </Button>
            </Form.Item>
        </Form>
    );
};