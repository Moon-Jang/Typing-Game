import AppContext from "./contexts/AppContext"
import { useContext, useEffect, useRef } from "react"
const Footer = () => {
    return (
        <footer>
            <Form />
        </footer>
    )
}

const Form = () => {
    const { wordsState, timeState, scoreState, endState } = useContext(AppContext)
    const [words, setWords] = wordsState
    const [time, setTime] = timeState
    const [score, setScore] = scoreState
    const [isEnd] = endState
    const delayTime = useRef(0)
    useEffect(() => {
        if (isEnd === false) {
            if (time !== 0) {
                setTimeout(() => {
                    delayTime.current++
                    setTime(time - 1)
                }, 1000)
            }
        }
    }, [time]) //eslint-disable-line

    const handleSubmit = (event) => {
        event.preventDefault()
        const input = event.target.word
        const value = input.value
        const target = words[0]
        if (target === value) {
            clear()
        }
        input.value = ""
    }

    const clear = () => {
        calculateScore(delayTime.current)
        delayTime.current = 0
        words.shift()
        setWords([...words])
    }
    const calculateScore = (delayTime) => {
        if (delayTime < 3) {
            setScore(score + 100)
        } else if (delayTime < 10) {
            setScore(score + 50)
        } else {
            setScore(score + 10)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" id="input" name="word" autoComplete="off"></input>
            <button id="send">입력</button>
        </form>
    )
}
export default Footer
