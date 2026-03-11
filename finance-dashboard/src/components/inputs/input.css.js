import { css } from "lit";

export const styles = css`
    /* ========== RESET BASE ========== */
  .input {
    border: none;
    outline: none;
    background: none;
    font: inherit;
    color: inherit;
    box-sizing: border-box;
    -webkit-appearance: none;
    appearance: none;
  }

  /* ========== BLOQUE ========== */
  .input__field {
    width: 100%;
    padding: 0.7rem 0.75rem;

    background-color: var(--color-bg-secondary);
    color: var(--color-text-primary);

    border-radius: 6px;
    border: 1px solid var(--color-border);

    transition: 
      border-color 0.2s ease,
      box-shadow 0.2s ease,
      background-color 0.2s ease;
  }

  /* ========== PLACEHOLDER ========== */
  .input__field::placeholder {
    color: var(--color-text-secondary);
    opacity: 0.7;
  }

  /* ========== HOVER ========== */
  .input__field:hover {
    border-color: var(--color-primary-hover);
  }

  /* ========== FOCUS (accesible real) ========== */
  .input__field:focus-visible {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.35);
  }

  /* ========== DISABLED ========== */
  .input__field:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /* ========== ESTADOS ========== */
  .input__field--success {
    border-color: var(--color-success);
  }

  .input__field--success:focus-visible {
    box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.35);
  }

  .input__field--error {
    border-color: var(--color-danger);
  }

  .input__field--error:focus-visible {
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.35);
  }
`