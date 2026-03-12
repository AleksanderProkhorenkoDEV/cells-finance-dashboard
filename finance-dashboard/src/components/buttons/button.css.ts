import { css } from "lit";

export const styles = css`
      /* RESET */
  .button {
    all: unset;
    box-sizing: border-box;
    font: inherit;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  /* BASE */
  .button__field {
    width: 100%;
    padding: 0 1rem;

    border-radius: 6px;
    font-weight: 500;

    transition:
      background-color 0.2s ease,
      border-color 0.2s ease,
      box-shadow 0.2s ease,
      transform 0.05s ease;
  }

  /* PRIMARY */
  .button__field--primary {
    background-color: var(--color-primary);
    color: white;
    border: 1px solid var(--color-primary);
  }

  .button__field--primary:hover {
    background-color: var(--color-primary-hover);
    border-color: var(--color-primary-hover);
  }

  .button__field--primary:active {
    transform: scale(0.98);
  }

  .button__field--primary:focus-visible {
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.35);
  }

  /* SECONDARY */
  .button__field--secondary {
    background-color: var(--color-bg-secondary);
    color: var(--color-text-primary);
    border: 1px solid var(--color-border);
  }

  .button__field--secondary:hover {
    border-color: var(--color-primary-hover);
  }

  .button__field--secondary:focus-visible {
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.25);
  }

  /* SUCCESS */
  .button__field--success {
    background-color: var(--color-success);
    color: white;
    border: 1px solid var(--color-success);
  }

  .button__field--success:focus-visible {
    box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.35);
  }

  /* DANGER */
  .button__field--danger {
    background-color: var(--color-danger);
    color: white;
    border: 1px solid var(--color-danger);
  }

  .button__field--danger:focus-visible {
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.35);
  }

  /* DISABLED */
  .button__field:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`