import { CartItem, ShippingInfo, User } from "./types";

export interface UserReducerIntialState {
  user: User | null;
  loading: boolean;
}

export interface CartReducerIntialState {
  loading: boolean;
  cartItems: CartItem[];
  subtotal: number;
  shippingCharges: number;
  discount: number;
  total: number;
  tax: number;
  shippingInfo: ShippingInfo;
}
