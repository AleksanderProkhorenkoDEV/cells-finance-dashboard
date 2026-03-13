import { customElement } from 'lit/decorators.js';
import { PageController } from '@open-cells/page-controller';
import { html, LitElement } from 'lit';

@customElement('home-page')
export class HomePage extends LitElement {
  pageController = new PageController(this);

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  render() {
    return html`
      <section class="home">
        <header class="home__header">
          <h1 class="home__title">Open Cells - Control de Gestión Económica Personal</h1>
          <p class="home__subtitle">
            Aplicación diseñada para ayudar a una persona a gestionar y visualizar su situación financiera de forma clara y sencilla.
          </p>
        </header>

        <article class="home__content">
          <p>
            Este proyecto permite registrar <strong>ingresos</strong> y <strong>gastos</strong>, 
            consultar el historial de movimientos y analizar cómo se distribuye el dinero a lo largo del tiempo.
          </p>

          <p>
            El objetivo principal es ofrecer una visión transparente del estado económico personal, 
            permitiendo conocer cuánto se gana, cuánto se gasta y cuánto impacto tienen las retiradas 
            sobre el sueldo mensual.
          </p>

          <p>
            Además, la aplicación facilita la detección de patrones de gasto, ayudando a tomar 
            decisiones más conscientes y mejorar la planificación financiera.
          </p>
        </article>

        <article class="home__tech">
          <h2>Tecnología</h2>
          <p>
            La aplicación está desarrollada utilizando el <strong>framework Open Cells de BBVA</strong>, 
            con el objetivo de aprender y aplicar su arquitectura basada en componentes.
          </p>

          <p>
            Se trabajan conceptos como:
          </p>

          <ul>
            <li>Gestión de componentes con Lit</li>
            <li>Uso de <strong>PageController</strong> y <strong>ElementController</strong></li>
            <li>Comunicación mediante <strong>canales y suscripciones</strong></li>
            <li>Arquitectura modular y desacoplada</li>
          </ul>

          <p>
            Este proyecto sirve como entorno práctico para comprender el flujo de datos, 
            la gestión de estado y la comunicación entre componentes dentro del ecosistema Open Cells.
          </p>
        </article>
    </section>
    `;
  }
}
