import {createContext, ReactNode, useContext} from 'react'

interface CardXContext {
  children: ReactNode
}


type CardContext = {

}

const CardContext = createContext<CardContext>({})

export function CardProvider({children}: CardXContext) {
  return <CardContext.Provider value={{}}>{children}</CardContext.Provider>
}


export const useCard = () => useContext(CardContext)