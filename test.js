// const str = "мама мыла раму"
const str = "hello hello"
const sliceWord = () => {
   return str.split(' ').map(item => item.replace("/\w{2,3}/gm", '')).join(' ')
}
console.log(sliceWord());