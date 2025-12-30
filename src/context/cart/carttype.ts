// Single product
export type Product = {
  id: number;
  name: string;
  price: number;
};

// Product inside cart
export type CartItem = Product & {
  quantity: number;
};

// Cart state
export type CartState = {
  items: CartItem[];
};

// Cart actions
export type CartAction =
  | { type: "ADD_ITEM"; payload: Product }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "INCREASE_QTY"; payload: number }
  | { type: "DECREASE_QTY"; payload: number };
