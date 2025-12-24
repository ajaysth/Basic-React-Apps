import { useReducer } from "react"


type CounterState = {
    count: number;
};

type CounterAction =
    | { type: "INCREASE" }
    | { type: "DECREASE" };

function reducer(state: CounterState, action: CounterAction) {
    switch (action.type) {
        case "INCREASE":
            return { count: state.count + 1 }
        case "DECREASE":
            return { count: state.count - 1 }
        default:
            return state
    }
}
const initialState = { count: 0 }

function UseReducerEg() {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
                <h1 className="text-center">{state.count}</h1>
                <button onClick={() => dispatch({ type: "INCREASE" })}>Increase</button>
                <button onClick={() => dispatch({ type: "DECREASE" })}>Decrease</button>
            </div>

            <button>Load it</button>
        </>
    )
}

export default UseReducerEg
