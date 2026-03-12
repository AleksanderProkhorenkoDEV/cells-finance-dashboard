import { css } from "lit";

export const styles = css` 
    .card {
        width:50%;

        padding: 16px;
        margin-bottom: 12px;

        border-left: 6px solid #ccc; 
        border-radius: 12px;
        
        box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        background: var( --color-bg-primary);

        transition: transform 0.2s ease;
    }

    .card--income { border-left-color: var(--color-profit); }
    .card--expense { border-left-color: var(--color-loss); }

    .card--income .card__amount { color: var(--color-profit); font-weight: bold; }
    .card--expense .card__amount { color: var(--color-loss); font-weight: bold; }

    .card__data {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
    }

    .card__title {
        font-size: 1.1rem;
        color: var(--text-color-primary);
        text-transform: capitalize;
    }

    .card__footer {
        display: flex;
        justify-content: space-between;
        font-size: 0.85rem;
        color: var(--text-color-primary);
    }

    .card__type-badge {
        text-transform: uppercase;
        font-size: 0.7rem;
        letter-spacing: 0.5px;
        background: var(--color-chart-grid);
        padding: 2px 8px;
        border-radius: 4px;
    }

`