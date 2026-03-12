export interface Transaction {
    id: string,
    title: string,
    amount: number,
    type: TransactionType,
    addedAt: Date
}

export type TransactionType = "ingreso" | "retirada"