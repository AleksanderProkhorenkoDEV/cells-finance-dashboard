import { css } from "lit";

export const styles = css`

:host {
    display: block; 
    width: 100%;

    border-radius: 0.75rem;
    border: 1px solid var(--color-border);
    background: var(--color-bg-card);

    box-sizing: border-box;
    overflow: hidden;

    transition: box-shadow 0.2s ease;
}

/* efecto sutil profesional */
:host(:hover) {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
}

article {
    width: 100%;
    height: 100%;

    padding: 1.5rem;
    box-sizing: border-box;
}

/* =========================
   TABLET
========================= */

@media (max-width: 1024px) {

    article {
        padding: 1.25rem;
    }

}

/* =========================
   MOBILE
========================= */

@media (max-width: 768px) {

    :host {
        border-radius: 0.6rem;
    }

    article {
        padding: 1rem;
    }

}

/* =========================
   MOBILE PEQUEÑO
========================= */

@media (max-width: 480px) {

    article {
        padding: 0.85rem;
    }

}
`;
