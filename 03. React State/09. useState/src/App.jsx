import React from "react"

export default function App() {
    /**
     * React.useState("Yes")が内部的にこんな配列を返している ["Yes", stateを変更する関数]
     * それを分解してlet [isImportant, setIsImportant]に入れています。
     */
    let [isImportant, setIsImportant] = React.useState("Yes")

    function handleClick() {
        setIsImportant("Heck yes")
    }
    return (
        <main>
            <h1 className="title">Is state important to know?</h1>
            <button onClick={handleClick} className="value">{isImportant}</button>
        </main>
    )
}