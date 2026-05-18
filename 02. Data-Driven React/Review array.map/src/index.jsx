/*
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/
const nums = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]
// Your code here
/*
map() 是 JavaScript 数组的一个内置方法。
它对数组中的每个元素执行一次操作，并返回一个“新的数组”。

function(num) {
  return num * num
}
是传给 map() 的“回调函数（callback function）”。
map() 会自动遍历数组，并把每个值放进num参数里。
map() 会把所有 return 的结果收集起来，然后赋值给squares
*/
const squares = nums.map(function(num) {
  return num * num
})

// console.log(squares)


/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/

const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here

/*
箭头函数 
(name) => {
  return ...
}
这里：name表示数组中的每一个名字。

toUpperCase() 转成大写字母
name.slice(1) 从索引 1 开始截取后面的字符串
"A" + "lice" 字符串拼接
*/
const capitalized = names.map((name) => {
  return name[0].toUpperCase() + name.slice(1)
})

// console.log(capitalized)


/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here

/*
`<p>${mon}</p>`中的 ` 是反引号，而不是普通引号。
${mon}把变量的值插入字符串中。
*/
const  paragraphs = pokemon.map((mon) => {
  return `<p>${mon}</p>`
})

console.log(paragraphs)