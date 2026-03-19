import { TransactionServices } from "../../services/transaction";
import { Chart, ChartConfiguration } from "chart.js/auto";
import { customElement, state } from "lit/decorators.js";
import { html, LitElement } from "lit";

@customElement("category-chart")
export class ExpenseCategoryChart extends LitElement {

  private _chart?: Chart;
  private _canvas?: HTMLCanvasElement;

  @state()
  private _data =
    TransactionServices.getCurrentMonthExpensesGroupedByCategory();

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  firstUpdated() {
    this._canvas = this.querySelector("#categoryChart") as HTMLCanvasElement;

    const labels = Object.keys(this._data);
    const values = Object.values(this._data);

    const config: ChartConfiguration = {
      type: "pie",
      data: {
        labels,
        datasets: [
          {
            data: values,
            backgroundColor: [
              "#6366F1", // Indigo
              "#F59E0B", // Amber
              "#10B981", // Emerald
              "#3B82F6", // Blue
              "#EF4444", // Red
              "#8B5CF6", // Violet
              "#14B8A6", // Teal
            ],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
          },
        },
      },
    };

    this._chart = new Chart(this._canvas, config);
  }

  updated() {
    if (this._chart) {
      const labels = Object.keys(this._data);
      const values = Object.values(this._data);

      this._chart.data.labels = labels;
      this._chart.data.datasets[0].data = values;
      this._chart.update();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._chart?.destroy();
  }

  render() {
    console.log(this._data);
    
    return html`
      <article class="chart__container">
        <canvas id="categoryChart"></canvas>
      </article>
    `;
  }
}
