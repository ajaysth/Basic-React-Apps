import { CartContext } from "./CartContext";
import { useReducer, type ReactNode } from "react";
import { cartReducer, initialState } from "./reducer";



export function CartProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}