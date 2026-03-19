import { css } from "lit";

export const styles = css`

:host {
    width: 100%;
    display: flex;
    justify-content: center;
}

/* ===============================
   FORM BASE
=============================== */

.form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    width: 100%;
    max-width: 420px; 
}

/* ===============================
   FIELD CONTAINER
=============================== */

.field-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

/* ===============================
   ERROR TEXT
=============================== */

.error-text {
    position: relative;
    padding-left: 0.6rem;

    font-size: 0.8rem;
    color: oklch(65.57% 0.1744 23.19);
}

.error-text::before {
    content: "*";
    position: absolute;
    left: 0;
    top: 0;
}

/* ===============================
   TABLET
=============================== */

@media (max-width: 1024px) {

    .form {
        max-width: 100%;
    }

}

/* ===============================
   MOBILE
=============================== */

@media (max-width: 768px) {

    :host {
        width: 100%;
    }

    .form {
        width: 100%;
        max-width: 100%;
        gap: 1rem;
    }

}

/* ===============================
   MOBILE PEQUEÑO
=============================== */

@media (max-width: 480px) {

    .form {
        gap: 0.9rem;
    }

    .error-text {
        font-size: 0.75rem;
    }

}
`;
