import { createContext } from "react";
import type { CartState, CartAction } from "../../types/types";

const CartContext = createContext<{ state: CartState; dispatch: React.Dispatch<CartAction>; }>({ state: initialState, dispatch: () => null, });
