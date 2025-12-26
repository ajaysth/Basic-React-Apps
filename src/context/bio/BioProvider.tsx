import type { ReactNode } from "react"
import { BioContext } from "./BioContext"

type BioProviderProps = {
    children: ReactNode
}

export const BioProvider = ({ children }: BioProviderProps) => {
    const name = "Ajay Messi"
    return (
        <BioContext.Provider value={name}>
            {children}
        </BioContext.Provider>
    )
}