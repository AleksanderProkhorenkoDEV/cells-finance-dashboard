import { css } from 'lit';

export const styles = css`
  :host {
    height: 100vh;
    width: 100vw;
    
    display:flex;
    align-items:center;
    justify-content:center;

    box-sizing: border-box;
    border:1px solid red;
  }

  main {
    width:90vw;
    height:85vh;

    display:grid;
    grid-template-areas: 
      "balance movements"
      "chart   actions";
      grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;

    padding:0.6rem;

    border: 1px solid var(--color-border);
    border-radius:.5rem;
    box-sizing:border-box;

    background-color: var(--color-bg-secondary)
  }

  main > :nth-child(1){
    grid-area:balance;
  }

  main > :nth-child(2){
    grid-area:movements;
  }

  main > :nth-child(3){
    grid-area:chart;
  }

  main > :nth-child(4){
    grid-area:actions;
  }


`;