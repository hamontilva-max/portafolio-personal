import React from 'react';
import { PortafolioTemplate } from '../components/templates/PortafolioTemplate';
import { SeccionInicio } from '../components/organisms/SeccionInicio';
import { SeccionPersonal } from '../components/organisms/SeccionPersonal';
import { SeccionExperiencia } from '../components/organisms/SeccionExperiencia';
import { SeccionEstudios } from '../components/organisms/SeccionEstudios';
import { SeccionProyectos } from '../components/organisms/SeccionProyectos';
import { SeccionContacto } from '../components/organisms/SeccionContacto';

export const Home = () => {
    return (
        <PortafolioTemplate>
            <section id="inicio">
                <SeccionInicio />
            </section>

            <section id="sobre-mi">
                <SeccionPersonal />
            </section>

            <section id="experiencia">
                <SeccionExperiencia />
                <SeccionEstudios />
            </section>

            <section id="proyectos">
                <SeccionProyectos />
            </section>

            <section id="contacto">
                <SeccionContacto />
            </section>
        </PortafolioTemplate>
    );
};