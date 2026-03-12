import { css } from "lit";

export const styles = css`
    :host {
        /* Ocupar toda la pantalla para el backdrop */
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 1000;

        display: none;
        align-items: center;
        justify-content: center;
        
        background: rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(4px);
        
        /* Animación de entrada */
        opacity: 0;
        transition: opacity 0.3s ease, display 0.3s allow-discrete;
    }

    :host([open]) {
        display: flex;
        opacity: 1;
    }

    /* Soporte para navegadores modernos con animaciones de entrada */
    @starting-style {
        :host([open]) {
            opacity: 0;
        }
    }

    .modal {
        /* Dimensiones más orgánicas que 50/50 */
        width: 90%;
        max-width: 450px;
        min-height: 200px;
        max-height: 80vh;

        display: flex;
        flex-direction: column;
        
        padding: 1.5rem;
        box-sizing: border-box;
        
        background-color: var(--color-bg-card, #ffffff);
        border: 1px solid var(--color-border, #e0e0e0);
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);

        /* Animación de "subida" del contenido */
        transform: translateY(20px);
        transition: transform 0.3s ease;
    }

    :host([open]) .modal {
        transform: translateY(0);
    }

    h3 {
        margin: 0 0 1rem 0;
        font-size: 1.25rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        color: var(--color-text-primary, #333);
        border-bottom: 1px solid var(--color-border, #eee);
        padding-bottom: 0.75rem;
    }

    /* El contenido crece para empujar las acciones al fondo */
    ::slotted([name="modal-content"]) {
        flex: 1;
        font-size: 1rem;
        line-height: 1.5;
        color: var(--color-text-secondary, #666);
        margin-bottom: 1.5rem;
    }

    .actions {
        display: flex;
        justify-content: flex-end; /* Botones a la derecha es estándar de UI */
        gap: 0.75rem;
        margin-top: auto;
    }
`;
