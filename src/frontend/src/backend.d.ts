import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface OrderSummary {
    city: string;
    postalCode: string;
    lang: string;
    fullName: string;
    securityProfile: string;
    productName: string;
    email: string;
    streetNo: string;
    quantity: bigint;
    phone: string;
    price: string;
}
export interface Result {
    hasMore: boolean;
    rows: Array<Array<Cell>>;
}
export interface OrderRecord {
    status: string;
    token: string;
    order: OrderMessage;
    createdAt: bigint;
}
export type ConfirmResult = {
    __kind__: "ok";
    ok: OrderSummary;
} | {
    __kind__: "err";
    err: ConfirmError;
};
export interface Cell {
    value: Value;
    name: string;
}
export interface OrderMessage {
    city: string;
    postalCode: string;
    lang: string;
    privacyAccepted: boolean;
    fullName: string;
    securityProfile: string;
    productId: string;
    productName: string;
    email: string;
    streetNo: string;
    contractAccepted: boolean;
    quantity: bigint;
    phone: string;
    securityNotes: string;
}
export type Value = {
    __kind__: "int";
    int: bigint;
} | {
    __kind__: "nat";
    nat: bigint;
} | {
    __kind__: "float";
    float: number;
} | {
    __kind__: "bool";
    bool: boolean;
} | {
    __kind__: "null";
    null: null;
} | {
    __kind__: "text";
    text: string;
};
export enum ConfirmError {
    alreadyConfirmed = "alreadyConfirmed",
    expired = "expired",
    notFound = "notFound"
}
export interface backendInterface {
    confirm_order(token: string): Promise<ConfirmResult>;
    execute(qJson: string): Promise<Result>;
    schema(): Promise<string>;
    send_contact_email(name: string, email: string, subject: string, message: string): Promise<string>;
    send_order_email(order: OrderMessage): Promise<string>;
}
