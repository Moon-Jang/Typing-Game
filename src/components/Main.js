import { useContext } from "react"
import AppContext from "./contexts/AppContext"

const Main = () => {
    const { wordsState } = useContext(AppContext)
    const [words] = wordsState
    return <main>{<WordWrap words={words} />}</main>
}

const WordWrap = ({ words }) => {
    const renderWords = () => words.map((word, idx) => <Word word={word} key={idx} />)
    return <div className="word_list_wrap">{renderWords()}</div>
}
const Word = ({ word }) => {
    return <div className="word_wrap">{word}</div>
}

export default Main
