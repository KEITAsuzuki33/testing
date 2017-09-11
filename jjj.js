var words = [
    {"name" : "hoge", "gender"} , // 0
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



//これは配列ではないらしい

var altWords = [
    [0,900001] , // hoge
    [] , // fuga
    [1800001] , // piy 
    [900000,1800000] , // piyo
];
