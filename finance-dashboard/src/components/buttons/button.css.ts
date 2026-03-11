import { css } from "lit";

export const styles = css`
    button{
        background: none;                    
        border: none;                      
        padding: 0;             
        font: inherit;          
        cursor: pointer;       
        color: inherit;         
        outline: none;  
    }


    .primary{
        width:100%;

        padding: 0 .3rem;

        border-radius:6px;
        box-sizing:border-box;
        border:1px solid var(--color-primary);

        transition: background .2s ease-in-out;
    }

    .primary:hover{
        background: var(--color-primary);
    }
`