import { ElementController } from "@open-cells/element-controller";
import { Transaction } from "../types/transactions";

export const initTransactionsManager = (host: any) => {
    const controller = new ElementController(host);

    controller.subscribe('new-transaction', (data: Transaction) => {

        const localData = localStorage.getItem('transactions') || '[]';

        const currentTransactions: Transaction[] = JSON.parse(localData) || []

        const updateList = [...currentTransactions, data];

        localStorage.setItem('transactions', JSON.stringify(updateList))

        controller.publish('transactions-list-updated', updateList);
    });

    controller.subscribe('delete-all-transaction', (name: string) => {
        localStorage.removeItem(name)
    })
};
