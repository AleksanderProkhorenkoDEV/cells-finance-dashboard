import { TransactionServices } from "../../services/transaction";
import { Chart, ChartConfiguration } from "chart.js/auto";
import { customElement, state } from "lit/decorators.js";
import { html, LitElement } from "lit";
import { ElementController } from "@open-cells/element-controller";

@customElement("category-chart")
export class ExpenseCategoryChart extends LitElement {
  elementController = new ElementController(this);

  private _chart?: Chart;
  private _canvas?: HTMLCanvasElement;

  @state()
  private _data: Record<string, number> = {};

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    this._loadData();
    this.elementController.subscribe("transactions-list-updated", () => {
      this._loadData();
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._chart?.destroy();
    this.elementController.unsubscribe("transactions-list-updated");
  }

  private _loadData() {
    this._data = TransactionServices.getCurrentMonthExpensesGroupedByCategory();
  }

  async firstUpdated() {
    await this.updateComplete;
    this._canvas = this.querySelector("#categoryChart") as HTMLCanvasElement;

    const config: ChartConfiguration = {
      type: "pie",
      data: {
        labels: Object.keys(this._data),
        datasets: [
          {
            data: Object.values(this._data),
            backgroundColor: [
              "#6366F1",
              "#F59E0B",
              "#10B981",
              "#3B82F6",
              "#EF4444",
              "#8B5CF6",
              "#14B8A6",
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
      this._chart.data.labels = Object.keys(this._data);
      this._chart.data.datasets[0].data = Object.values(this._data);
      this._chart.update();
    }
  }

  render() {
    return html`
      <article class="chart__container">
        <canvas id="categoryChart"></canvas>
      </article>
    `;
  }
}