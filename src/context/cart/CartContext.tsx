import { createContext } from "react";
import { initialState } from "./reducer";
import type { CartState, CartAction } from "./carttype";

type CartContextType = {
    state: CartState;
    dispatch: React.Dispatch<CartAction>;
};

export const CartContext = createContext<CartContextType>({
    state: initialState,
    dispatch: () => null,
});


