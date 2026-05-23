export default function Main() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]

    const ingredientsList = ingredients.map(ingredient => (
      <li key={ingredient}>{ingredient}</li>
    ))
    
    /**
     * function handleSubmit(event) の event は、「イベント情報」が入ったオブジェクトです。
     * フォームが submit（送信）された時に handleSubmit を実行する。
     * その時 React は、自動的に submit に関する情報をeventへ渡します
     */
    function handleSubmit(event) {
      // event.preventDefault() フォーム送信の通常動作をキャンセルする
      event.preventDefault()
      // event.currentTargetはイベントが発生した対象要素、今回は submit イベントなので、
      // <form> ... </form>を指しています
      // FormData はブラウザ標準の機能で、フォームの入力データをまとめて取得するためのオブジェクト
      const formData = new FormData(event.currentTarget)
      // .get()は、ingredient という名前の入力値を取得
      const newIngredient = formData.get("ingredient")
      ingredients.push(newIngredient)
      console.log(ingredients)
    }

    return (
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientsList}
            </ul>
        </main>
    )
}