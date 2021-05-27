import { useEffect, useState } from "react"
import "../styles/common.sass"
import AppContext from "./contexts/AppContext"
import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"

const WORDS = ["a", "b", "c", "d", "e", "f", "g", "h"]
const TIME_LIMIT = 120
function App() {
    const scoreState = useState(0)
    const timeState = useState(TIME_LIMIT)
    const wordsState = useState(WORDS)
    const [words] = wordsState
    const endState = useState(false)
    const setIsEnd = endState[1]
    useEffect(() => {
        if (!words.length) {
            setIsEnd(true)
        }
    }, [words]) // eslint-disable-line
    const contextValues = { scoreState, timeState, wordsState, endState }
    return (
        <AppContext.Provider value={contextValues}>
            <div className="App">
                <Header></Header>
                <Main></Main>
                <Footer></Footer>
            </div>
        </AppContext.Provider>
    )
}

export default App
