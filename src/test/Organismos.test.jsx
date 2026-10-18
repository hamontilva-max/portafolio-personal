import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

import { Navbar } from '../components/organisms/Navbar';
import { SeccionInicio } from '../components/organisms/SeccionInicio';
import { SeccionPersonal } from '../components/organisms/SeccionPersonal';
import { SeccionProyectos } from '../components/organisms/SeccionProyectos';
import { SeccionContacto } from '../components/organisms/SeccionContacto';

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => {},
    }),
});

global.ResizeObserver = class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
};

describe('Pruebas Automatizadas - Organismos Principales y Formulario', () => {

    it('debe renderizar correctamente el organismo Navbar', () => {
        render(<Navbar />);
        expect(screen.getByText(/HANSES MONTILVA/i)).toBeInTheDocument();
    });

    it('debe renderizar correctamente el organismo SeccionInicio', () => {
        render(<SeccionInicio />);
        expect(screen.getByText(/HOLA, MI NOMBRE ES/i)).toBeInTheDocument();
    });

    it('debe renderizar correctamente el organismo SeccionPersonal', () => {
        render(<SeccionPersonal />);
        expect(screen.getByText(/¿Quién soy?/i)).toBeInTheDocument();
    });

    it('debe renderizar correctamente el organismo SeccionProyectos', () => {
        render(<SeccionProyectos />);
        expect(screen.getByText(/Desarrollos y Proyectos/i)).toBeInTheDocument();
    });

    it('debe renderizar el formulario con sus campos y permitir escribir en ellos', () => {
        render(<SeccionContacto />);

        const inputNombre = screen.getByLabelText(/Nombre Completo/i);
        const inputEmail = screen.getByLabelText(/Correo Electrónico/i);
        const inputMensaje = screen.getByLabelText(/Mensaje/i);
        const botonEnviar = screen.getByRole('button', { name: /Enviar Mensaje/i });

        expect(inputNombre).toBeInTheDocument();
        expect(inputEmail).toBeInTheDocument();
        expect(inputMensaje).toBeInTheDocument();
        expect(botonEnviar).toBeInTheDocument();

        fireEvent.change(inputNombre, { target: { value: 'Juan Pérez' } });
        fireEvent.change(inputEmail, { target: { value: 'juan@ejemplo.com' } });
        fireEvent.change(inputMensaje, { target: { value: 'Mensaje de prueba' } });

        expect(inputNombre.value).toBe('Juan Pérez');
        expect(inputEmail.value).toBe('juan@ejemplo.com');
        expect(inputMensaje.value).toBe('Mensaje de prueba');
    });
});