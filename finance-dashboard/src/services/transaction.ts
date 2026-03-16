import { Transaction, TransactionType } from "../types/transactions";
import { v4 } from "uuid";

export class TransactionServices {


    static createTransaction = (data: { [k: string]: string }): Transaction => {
        return {
            id: v4(),
            title: String(data.title),
            amount: Number(data.amount),
            type: data.type as TransactionType,
            addedAt: new Date()
        };
    }

    static getAllTransaction = (): Transaction[] => {
        const rawData = localStorage.getItem("transactions") || '[]';
        return JSON.parse(rawData)
    }

    static getAllIconme = (filter: "ingreso" | "retirada") => {
        return this.getAllTransaction()
            .filter(item => item.type == filter)
            .reduce((sum, item) => sum + item.amount, 0);
    }

}