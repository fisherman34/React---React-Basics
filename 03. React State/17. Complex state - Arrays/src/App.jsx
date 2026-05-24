import React from "react"

export default function App() {
  const [myFavoriteThings, setMyFavoriteThings] = React.useState([])

  const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁", 
  "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
  const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)

  function addFavoriteThing() {
    /**
     * ...prevFavThingsは スプレッド構文 (spread syntax) です。配列の中身を1つずつ展開する
     * 例えば：const arr = ["A", "B"]を[...arr]とすると、結果は：["A", "B"]です。
     * つまり...prevFavThingsは、現在の配列の中身をそのままコピーしています。
    */
    setMyFavoriteThings(
        prevFavThings => [
            ...prevFavThings, 
            allFavoriteThings[prevFavThings.length]
        ])
  }
  
  return (
    <main>
      <button onClick={addFavoriteThing}>Add item</button>
      <section aria-live="polite">
        {thingsElements}
      </section>
    </main>
  )
}