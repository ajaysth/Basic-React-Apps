import { Suspense, useState } from "react"
import { lazy } from "react"

const Messi = lazy(() => import('./Messi'))


const LazyEg = () => {
    const [load, setLoad] = useState(false)

    return (
        <>
            <div className="flex flex-col items-center justify-center mt-10 ">
                <button onClick={() => setLoad(!load)} className=" px-4 py-2 border border-amber-300 cursor-pointer hover:bg-amber-300 hover:text-white transition duration-350 ease-in-out">Load it</button>
                {
                    load ? <Suspense ><Messi /></Suspense> : null
                }
            </div>
        </>
    )
}

export default LazyEg