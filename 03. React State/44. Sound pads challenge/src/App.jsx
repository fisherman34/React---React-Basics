import React from "react"
import padsData from "./pads"
import Pad from "./Pad"

export default function App({ darkMode }) {
    const [pads, setPads] = React.useState(padsData)

    function toggle() {
        console.log("Clicked!")
    }
    /**
     * key={pad.id} は、React がリストで生成された各要素を識別するための特別な属性です。
     * pads.map() で配列 pads の各データから複数の <button> を作っています
     * React はこういうとき、「どの button がどのデータに対応しているのか」を区別する必要があります。
     * そのために key を使います。
     * 
     */
    const buttonElements = pads.map(pad => (
        <Pad toggle={toggle} key={pad.id} color={pad.color} on={pad.on} />
    ))

    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}