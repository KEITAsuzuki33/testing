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

var p = function(a, b, c) {
    return a == searchWord
}

var owari = words.map(p)

console.log(owari)


