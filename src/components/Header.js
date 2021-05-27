import { useContext } from "react"
import AppContext from "./contexts/AppContext"

const Header = () => {
    const { timeState, scoreState } = useContext(AppContext)
    const [time] = timeState
    const [score] = scoreState
    return (
        <header>
            <div className="score_wrap">
                <span id="score">{score}</span>
            </div>
            <div className="logo_wrap">
                <p>Typing Game</p>
            </div>
            <div className="time_wrap">
                <span id="time">{time}</span>
            </div>
        </header>
    )
}
export default Header
