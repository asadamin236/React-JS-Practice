import React, {createContext, usestate} from "react"

const CountContext = createContext()

function CountProvider({children}) {
  const [countDetails, setCountDetails] = usestate({
    userName: "Asad Amin",
  })

  return (
    <CountContext.Provider value={countDetails}>
      {children}
    </CountContext.Provider>
  )
}

export {CountProvider, userContext}