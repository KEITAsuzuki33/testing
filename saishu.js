var words = [
    {"name":"piyo", "adress":"shinjuku"},
    {"name":"hoge", "adress":"kashiwa"} , 
    {"name":"piyo", "adress":"Ageo"} , 
    {"name":"piyo", "adress":"Koube"} , 
    {"name":"fuga", "adress":"omiya"} , 
];

var index = {}

words.forEach(function(word){
	var key = word.name
	if ( index[key] != null ) {
		index[key].push(word)
	} else {
		var value = [word]
		index[key] = valuek
	}
})

console.log(index)
console.log(index["hoge"])
console.log(index["fuga"])
console.log(index["piyo"])

二つのキーでインデックスを作成する場合、インデックスの中にインデックスを入れる
この場合だと、nameというキーで作成さてたインデックスがあり、さらにそこからAgeoをvalueとして持つキーを検索したい場合、
nameで作成されたインデックスの中にadressで作成されたインデックスを入れる

インデックスを作成することによるメリット
・処理が高速になる
・


デメリット
・データの量が増える
・インデックスを作成するためのコードを書かなければいけない(手間がかかるということ)
・要素を追加・削除する場合、インデックス自体を更新しなければならないので
・二つのキーを用いてインデックスを作成する場合、1つのキーでインデックスを作成する場合と比べて配列の量が増え、データが重くなる
