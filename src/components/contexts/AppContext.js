import { createContext } from "react"

const initialContext = {
    score: 0,
    time: 0,
    words: [],
    isEnd: false,
    setScore: () => {},
    setTime: () => {},
    setWords: () => {},
    setIsEnd: () => {},
}
const AppContext = createContext(initialContext)

export default AppContext
