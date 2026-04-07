import { TransactionServices } from "../../services/transaction";
import { Chart, ChartConfiguration } from "chart.js/auto";
import { customElement, state } from "lit/decorators.js";
import { html, LitElement } from "lit";

@customElement("income-chart")
export class IncomeChart extends LitElement {

    private _chart?: Chart;
    private _canvas?: HTMLCanvasElement;

    @state()
    private _income: number = 0;

    @state()
    private _widthdraw: number = 0;

    protected createRenderRoot(): HTMLElement | DocumentFragment {
        return this;
    }

    connectedCallback() {
        super.connectedCallback();
        this._income = TransactionServices.getCurrentMonthMoney("ingreso");
        this._widthdraw = TransactionServices.getCurrentMonthMoney("retirada");
    }

    async firstUpdated() {
        await this.updateComplete; 

        this._canvas = this.querySelector("#balanceChart") as HTMLCanvasElement;

        const config: ChartConfiguration = {
            type: 'bar',
            data: {
                labels: ["Ingresos", "Gastos"],
                datasets: [{
                    label: "Resumen",
                    data: [this._income, this._widthdraw],
                    backgroundColor: ["#22C55E", "#EF4444"],
                    borderRadius: 8,
                }],
            },
            options: {
                responsive: true,
                plugins: { legend: { display: false } },
            },
        };

        this._chart = new Chart(this._canvas, config);
    }

    updated() {
        if (this._chart) {
            this._chart.data.datasets[0].data = [
                this._income,
                this._widthdraw,
            ];
            this._chart.update();
        }
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this._chart?.destroy();
    }

    render() {
        return html`
            <article class="chart__container">
                <canvas id="balanceChart"></canvas>
            </article>
        `
    }
}