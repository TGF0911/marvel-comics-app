import {createContext, ReactNode, useContext} from 'react'

interface CardXContext {
  children: ReactNode
}


type CardContext = {

}

const CardContext = createContext<CardContext>({} as CardContext)

export function CardProvider({children}: CardXContext) {
  //https://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784/standard_medium.jpg

// const defaultThumbanail = useMemo(() => {
//   const { thumbnail } = character;
//   return `${thumbnail.path}/standard_medium.${thumbnail.extension}`;
// }, [character])

// const largeThumbanail = useMemo(() => {
//   const { thumbnail } = character;
//   return `${thumbnail.path}/landscape_amazing.${thumbnail.extension}`;
// }, [character]);

  return <CardContext.Provider value={{}}>{children}</CardContext.Provider>
}


export const useCard = () => useContext(CardContext)