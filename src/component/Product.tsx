import { useCart } from "../context/cart/useCart";

const product = {
    id: 1,
    name: "Phone",
    price: 1000,
};

export default function Product() {
    const { state, dispatch } = useCart();

    return (
        <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {product.name}
            </h2>

            <button
                onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}
                className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium
               hover:bg-blue-700 transition-colors duration-200"
            >
                Add to Cart
            </button>
            <button
                onClick={() => dispatch({ type: "REMOVE_ITEM", payload: product.id })}
                className="w-full bg-red-600 text-white py-2 rounded-lg font-medium
               hover:bg-red-700 transition-colors duration-200"
            >
                Add to Cart
            </button>

            <h3 className="mt-6 text-lg font-semibold text-gray-700 border-b pb-2">
                Cart Items
            </h3>

            <div className="mt-3 space-y-2">
                {state.items.map(item => (
                    <div
                        key={item.id}
                        className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg"
                    >
                        <span className="font-medium text-gray-800">
                            {item.name}
                        </span>
                        <span className="text-sm text-gray-600">
                            x {item.quantity}
                        </span>
                    </div>
                ))}
            </div>
        </div>

    );
}
