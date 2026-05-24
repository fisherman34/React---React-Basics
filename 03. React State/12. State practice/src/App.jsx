import React from "react"

export default function App() {
    const [count, setCount] = React.useState(0)

    function add() {
    /** 
     * prevCount => prevCount + 1 はアロー関数です。
     * React が現在の count の値を取得する
     * その値を prevCount に渡す
     * prevCount + 1 を計算する
     * その結果を新しい state にする
     */
        setCount(prevCount => prevCount + 1)
    }

    function subtract() {
        setCount(prevCount => prevCount - 1)
    }

    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button className="minus" onClick={subtract} aria-label="Decrease count">–</button>
                <h2 className="count">{count}</h2>
                <button className="plus" onClick={add} aria-label="Increase count">+</button>
            </div>
        </main>
    )
}