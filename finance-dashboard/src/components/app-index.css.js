
import { css } from 'lit';

export const styles = css`
  :host {
    display: flex;
    flex-direction: column;
    height: 100%;
    box-sizing: border-box;
  }
  main {
    flex: 1;
    position: relative;
    overflow: hidden;

    border:1px solid red;
  }

  main ::slotted(*) {
    width:100%;
    height:100%;

    position: absolute;
    left: 0;
    right: 0;
    visibility: hidden;

    border:1px solid yellow;
  }

  main ::slotted([state="active"]) {
    visibility: visible;
  }
  `;