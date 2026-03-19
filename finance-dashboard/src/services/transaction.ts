import { Transaction, TransactionType, CreateTransactionDTO } from "../types/transactions";
import { v4 } from "uuid";


export class TransactionServices {

    static createTransaction = (data: CreateTransactionDTO): Transaction => {
        return {
            id: v4(),
            title: String(data.title),
            amount: Number(data.amount),
            type: data.type as TransactionType,
            addedAt: new Date(),
            category: data.category
        };
    }

    static getAllTransaction = (): Transaction[] => {
        const rawData = localStorage.getItem("transactions") || '[]';
        const desorderData: Transaction[] = JSON.parse(rawData)
        return desorderData.sort((a, b) => {
            const dateA = new Date(a.addedAt).getTime();
            const dateB = new Date(b.addedAt).getTime();
            return dateA - dateB;
        })
    }

    static getAllmoney = (filter: TransactionType, startDate: Date, endDate: Date) => {
        return this.getAllTransaction()
            .filter(item => {
                const date = new Date(item.addedAt)

                return (
                    item.type == filter &&
                    date <= startDate &&
                    date >= endDate
                )
            })
            .reduce((sum, item) => sum + item.amount, 0);
    }

    static getCurrentMonthMoney = (type: TransactionType) => {
        const now = new Date()
        const endDate = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate())
        console.log(now, endDate);

        return this.getAllmoney(type, now, endDate)
    }

}