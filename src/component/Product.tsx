import { useCart } from "../context/cart/useCart";

const products = [
    { id: 1, name: "Phone", price: 1000 },
    { id: 2, name: "IIIIPhone", price: 13300 },
];

export default function Product() {
    const { state, dispatch } = useCart();

    return (
        <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg space-y-4">

            {products.map(product => (
                <div
                    key={product.id}
                    className="border p-4 rounded-lg"
                >
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        {product.name}
                    </h2>

                    <div className="flex gap-2">
                        <button
                            onClick={() =>
                                dispatch({ type: "ADD_ITEM", payload: product })
                            }
                            className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700"
                        >
                            Add
                        </button>

                        <button
                            onClick={() =>
                                dispatch({ type: "REMOVE_ITEM", payload: product.id })
                            }
                            className="flex-1 bg-red-600 text-white py-2 rounded-lg font-medium hover:bg-red-700"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))}

            <h3 className="mt-6 text-lg font-semibold text-gray-700 border-b pb-2">
                Cart Items
            </h3>

            <div className="mt-3 space-y-2">
                {state.items.map(item => (
                    <div
                        key={item.id}
                        className="flex justify-between bg-gray-100 px-4 py-2 rounded-lg"
                    >
                        <span className="font-medium">{item.name}</span>
                        <span>x {item.quantity}</span>
                    </div>
                ))}
            </div>

        </div>
    );
}
