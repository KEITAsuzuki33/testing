var words = [
    {"name" : "hoge"} , // 0
    {"name" : "fuga"} , // 2
    // .....
    {"name" : "piyo"} , // 90万 //90 万行目
    // .....
    {"name" : "hoge"} , // 90万1
    {"name" : "fuga"} , // 90万2
    {"name" : "piyo"} , // 180万行 //90 万行目
    {"name" : "piy"}  , // 180万1行
    // .....
]


var searchWord = "piyo"


var a = 0
var result1 = words.filter(function(word){
    a++
    return word.name == searchWord
})
console.log(a)
console.log(result1)



for (var i = 0; i < words.length ; i++) {
}




var kekka =[]
var p = function(word){
        if (word.name == searchWord) {kekka.push(searchWord)
         
        }
    }




//ループ回数が0回？？？？？？？？？？
var e = 0
var sagasu = function (n){
    return n.name == searchWord
    e++
}
function yyy() {
   return words.filter(sagasu)
}
console.log(yyy())
