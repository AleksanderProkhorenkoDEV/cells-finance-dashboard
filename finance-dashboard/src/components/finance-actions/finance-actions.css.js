import { css } from 'lit'

export const styles = css`

    :host{
        width:100%;
        height:100%;
        
        padding:1rem 0;

        display:flex;
        flex-direction:column;
        gap:1rem;

        box-sizing:border-box;
    }

    .action__title{
        margin:0;

        font-size: 1.1rem;
        font-weight: 700;
        color: var(--color-text-primary);

        text-align:center;
        text-transform:uppercase;
    }

    .action__button{
        display:flex;
        justify-content:end;

        padding: 1rem;

        border-top:1px solid var(--color-border);
        box-sizing:border-box;
    }
`;