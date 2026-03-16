import { css } from "lit";

export const styles = css`
    .nav{
        width:100%;
        height:100;

        display:flex;
        justify-content:end;

        border-bottom:1px solid var(--color-border);
    }

    .nav__host{
        display:flex;
        align-items:center;
        gap:1.5rem;

        margin-right:2rem;
        padding:1rem;

        list-style:none;
    }

    .nav__items{
        text-transform:uppercase;
        letter-spacing:2px;

        cursor:pointer;
    }

    .nav__items--active{

        padding:0.4rem 0.6rem;

        border-radius: 4px;
        border:1px solid var(--color-primary-hover);

        background-color: color-mix(var(--color-primary-hover), transparent 50%);
    }
`