import { css } from "lit";

export const styles = css`

:host {
    display: block;
    width: 100%;
}

/* =========================
   CARD BASE
========================= */

.card {
    width: 100%;
    padding: 1rem;
    margin-bottom: 0.75rem;

    border-left: 6px solid #ccc;
    border-radius: 12px;

    background: var(--color-bg-secondary);
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);

    box-sizing: border-box;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.card:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(0,0,0,0.08);
}

/* =========================
   VARIANTS
========================= */

.card--income {
    border-left-color: var(--color-profit);
}

.card--expense {
    border-left-color: var(--color-loss);
}

.card--income .card__amount {
    color: var(--color-profit);
    font-weight: 600;
}

.card--expense .card__amount {
    color: var(--color-loss);
    font-weight: 600;
}

/* =========================
   HEADER
========================= */

.card__data {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    margin-bottom: 0.5rem;
}

.card__title {
    font-size: 1rem;
    color: var(--text-color-primary);
    text-transform: capitalize;
    word-break: break-word;
}

.card__amount {
    font-size: 1rem;
    white-space: nowrap;
}

/* =========================
   FOOTER
========================= */

.card__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.75rem;

    font-size: 0.8rem;
    color: var(--text-color-secondary);
    flex-wrap: wrap;
}

/* =========================
   BADGES
========================= */

.card__badges {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
}

.card__badge {
    font-size: 0.7rem;
    padding: 2px 8px;
    border-radius: 20px;
    background: var(--color-bg-card);
    border: 1px solid var(--color-border);
    text-transform: capitalize;
}

/* =========================
   TABLET
========================= */

@media (max-width: 1024px) {

    .card {
        padding: 0.9rem;
    }

}

/* =========================
   MOBILE
========================= */

@media (max-width: 768px) {

    .card {
        padding: 0.85rem;
    }

    .card__data {
        flex-direction: column;
        align-items: flex-start;
    }

    .card__amount {
        font-size: 0.95rem;
    }

    .card__footer {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.4rem;
    }

}

/* =========================
   MOBILE PEQUEÑO
========================= */

@media (max-width: 480px) {

    .card {
        padding: 0.75rem;
        border-radius: 10px;
    }

    .card__title {
        font-size: 0.95rem;
    }

}
`;
