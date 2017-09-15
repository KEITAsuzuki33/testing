 // 対象の配列
var target = [ 4, 3, 7 ] ;

// 実行する関数
var f = function( x, i, a ) {
    // x = 要素の値
    // i = 要素のインデックス番号
    // a = 配列そのもの

    // 要素を2倍にして返す
    return x * 2 ;
}

// 各要素に関数を実行 ( → [ 8, 6, 14 ] )
var result = target.map( f ) ;

console.log (result)


var array = [1,2,3,4,5,6,7];
for( var i = 0 ; i < 10 ; i+=2)
{  console.log(i);
}



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
var result1 = words.filter(function(i){
    a++
    return i.name == searchWord
})
console.log(a)
console.log(result1)



console.log(p)
for (var i = 0; i < words.length ; i++) {
}



var kekka =[]
var p = function(word){
        if (word.name == searchWord) {kekka.push(searchWord)
         
        }
    }

//ループ回数が0回？？？？？？？？？？
var e = 0
function sagasu(n){
    return n.name == searchWord
    e++
}

console.log(words.filter(sagasu))
console.log(e)
