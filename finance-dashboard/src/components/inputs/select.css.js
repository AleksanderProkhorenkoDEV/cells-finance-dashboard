import { css } from "lit";

export const styles = css`
    /* ========== RESET BASE ========== */
  .select {
    border: none;
    outline: none;
    background: none;
    font: inherit;
    color: inherit;
    box-sizing: border-box;
    -webkit-appearance: none;
    appearance: none;
  }

  /* ========== WRAPPER ========== */
  .select__wrapper {
    position: relative;
    width: 100%;
  }

  /* ========== CAMPO ========== */
  .select__field {
    width: 100%;
    padding: 0.7rem 2.5rem 0.7rem 0.75rem;

    background-color: var(--color-bg-secondary);
    color: var(--color-text-primary);

    border-radius: 6px;
    border: 1px solid var(--color-border);

    cursor: pointer;

    transition: 
      border-color 0.2s ease,
      box-shadow 0.2s ease,
      background-color 0.2s ease;
  }

  /* ========== FLECHA CUSTOM ========== */
  .select__wrapper::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0.9rem;
    transform: translateY(-50%);
    pointer-events: none;

    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid var(--color-text-secondary);
  }

  /* ========== HOVER ========== */
  .select__field:hover {
    border-color: var(--color-primary-hover);
  }

  /* ========== FOCUS ========== */
  .select__field:focus-visible {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.35);
  }

  /* ========== DISABLED ========== */
  .select__field:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /* ========== OPTION (limitado por navegador) ========== */
  .select__field option {
    background-color: var(--color-bg-secondary);
    color: var(--color-text-primary);
  }

  /* ========== ESTADOS ========== */
  .select__field--error {
    border-color: var(--color-danger);
  }

  .select__field--error:focus-visible {
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.35);
  }
`