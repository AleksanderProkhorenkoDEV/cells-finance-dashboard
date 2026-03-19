import { css } from "lit";

export const styles = css`

/* =========================
   NAV CONTAINER
========================= */

.nav {
    width: 100%;
    min-height: 60px;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    border-bottom: 1px solid var(--color-border);
    box-sizing: border-box;
}

/* =========================
   MENU LIST
========================= */

.nav__host {
    display: flex;
    align-items: center;
    gap: 2rem;

    margin-right: 2rem;
    padding: 1rem;

    list-style: none;
}

/* =========================
   ITEMS
========================= */

.nav__items {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.85rem;

    cursor: pointer;
    padding: 0.4rem 0.6rem;
    border-radius: 4px;

    transition: background 0.2s ease, border 0.2s ease;
}

.nav__items:hover {
    background: var(--color-bg-secondary);
}

.nav__items--active {
    border: 1px solid var(--color-primary-hover);
    background-color: color-mix(in srgb, var(--color-primary-hover) 20%, transparent);
}

/* =========================
   TABLET
========================= */

@media (max-width: 900px) {

    .nav {
        justify-content: center;
    }

    .nav__host {
        margin-right: 0;
        gap: 1.5rem;
    }
}

/* =========================
   MOBILE
========================= */

@media (max-width: 600px) {

    .nav {
        justify-content: center;
    }

    .nav__host {
        width: 100%;
        justify-content: space-around;
        gap: 0;
        padding: 0.8rem 0.5rem;
    }

    .nav__items {
        font-size: 0.75rem;
        letter-spacing: 1px;
        padding: 0.4rem;
    }

}
`;
