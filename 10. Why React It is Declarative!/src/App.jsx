// import { createRoot } from "react-dom/client"
// const root = createRoot(document.getElementById("root"))

// root.render(
//     <h1>Hello, React!</h1>
// )


/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element (createElement)
- Give it some textContent
- Give it a class name of "header"
- append it as a child (using `appendChild`) of the div#root

Don't use innerHTML to accomplish any of this.
    
*/

// 新しい <h1> 要素を作成しています。
const h1 = document.createElement("h1")

// <h1> の文字内容を設定しています。
h1.textContent = "This is imperative coding"

// CSSクラス名を設定しています。
h1.className = "header"

/*
作成した <h1> を画面へ追加しています。
document は： 現在のHTMLページ全体を表すオブジェクト

document.getElementById() は： HTML の中から、指定した id を持つ要素を
取得する DOM 関数です。
*/
document.getElementById("root").appendChild(h1)