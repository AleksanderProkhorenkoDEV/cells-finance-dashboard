export interface Transaction {
    id: string,
    title: string,
    amount: number,
    type: TransactionType,
    addedAt: Date
    category: TransactionCategory
}

export type TransactionType = "ingreso" | "retirada"

export type TransactionCategory =
    | "comida"
    | "transporte"
    | "ocio"
    | "suscripciones"
    | "salario"
    | "freelance";


export interface CreateTransactionDTO{
    title: string;
    amount: string;
    type: TransactionType;
    category: TransactionCategory;
};