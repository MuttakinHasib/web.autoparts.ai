// application
import type { IAddressData } from "./address";
import type { IProduct } from "./product";

export interface IOrderItemOption {
  name: string;
  value: string;
}

export interface IOrderItem {
  options: IOrderItemOption[];
  price: number;
  product: IProduct;
  quantity: number;
  total: number;
}

export interface IOrderTotal {
  price: number;
  title: string;
}

export interface IOrder {
  billingAddress: IAddressData;
  createdAt: string;
  id: number;
  items: IOrderItem[];
  number: string;
  payment: string;
  quantity: number;
  shippingAddress: IAddressData;
  status: string;
  subtotal: number;
  token: string;
  total: number;
  totals: IOrderTotal[];
}
