export interface SelectOptions {
    label: string,
    value: string
}

interface ValidationError {
    message: string;
}

export interface FormErrors {
    title: ValidationError;
    amount: ValidationError;
    type: ValidationError;
}